import "dotenv/config"
import { projectsSeedData } from "./projects.data.ts"
import { logger } from "./serverLogger.ts"
import { supabase } from "./supabaseClient.ts"


const DRY_RUN = process.argv.includes("--dry-run")

type Project = typeof projectsSeedData[number]

function isDifferent(seed: Project, db: any) {
  if ((seed.title ?? "") !== (db.title ?? "")) return true;
  if ((seed.image_url ?? "") !== (db.image_url ?? "")) return true;
  if ((seed.live_url ?? null) !== (db.live_url ?? null)) return true;
  if ((seed.repo_url ?? "") !== (db.repo_url ?? "")) return true;
  if ((seed.description ?? "") !== (db.description ?? "")) return true;
  if (!!seed.completed !== !!db.completed) return true;
  if (!!seed.publish !== !!db.publish) return true;
  if (isStackDifferent(seed.stack, db.stack)) return true;
  return false;
}

function isStackDifferent(seedStack: Project['stack'], dbStack: any): boolean {
  if (!Array.isArray(dbStack)) return true;
  if (seedStack.length !== dbStack.length) return true;
  for (let i = 0; i < seedStack.length; i++) {
    if ((seedStack[i].name ?? "") !== (dbStack[i].name ?? "")) return true;
    if ((seedStack[i].url ?? "") !== (dbStack[i].url ?? "")) return true;
  }
  return false;
}

async function seed() {
  logger.info(`Starting project seed`)
  logger.info(`Mode: ${DRY_RUN ? "DRY_RUN" : "LIVE"}`);

  const { data: existing, error: fetchError } = await supabase.from("projects").select("*")
  if (fetchError) throw fetchError

  const existingMap = new Map(existing?.map(p => [p.repo_url, p]));

  const toInsertOrUpdate = projectsSeedData.filter(seed => {
    const db = existingMap.get(seed.repo_url);
    return !db || isDifferent(seed, db);
  });

  const seedRepoUrls = new Set(projectsSeedData.map(p => p.repo_url));
  const toDelete = (existing || [])
    .filter(p => !seedRepoUrls.has(p.repo_url))
    .map(p => p.repo_url);

  logger.info(`Summary:`)
  logger.info(`Total in seed file: ${projectsSeedData.length}`)
  logger.info(`Existing in DB: ${existing?.length || 0}`)
  logger.info(`Will upsert: ${toInsertOrUpdate.length}`)
  logger.info(`Will delete: ${toDelete.length}`)

  if (DRY_RUN) {
    if (toInsertOrUpdate.length > 0) {
      logger.info("Projects to upsert:");
      toInsertOrUpdate.forEach(p => logger.info(`${p.title}`));
    }
    if (toDelete.length > 0) {
      logger.info("Projects to delete:");
      toDelete.forEach(url => logger.info(`${url}`));
    }
    logger.info("Dry run complete. No changes applied.");
    return;
  }

  // UPSERT
  if (toInsertOrUpdate.length > 0) {
    const { error } = await supabase
      .from("projects")
      .upsert(toInsertOrUpdate, { onConflict: "repo_url" });
    if (error) throw error;
    logger.info(`Upserted ${toInsertOrUpdate.length} projects.`);
  }

  // DELETE
  if (toDelete.length > 0) {
    const { error } = await supabase
      .from("projects")
      .delete()
      .in("repo_url", toDelete);
    if (error) throw error;
    logger.info(`Deleted ${toDelete.length} projects.`);
  }

  logger.info("Seed completed successfully")
}

seed().catch(err => {
  logger.error(`Seed failed: ${err.message}`)
  process.exit(1)
})

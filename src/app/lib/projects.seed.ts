import { logger } from "./serverLogger"
import { supabase } from "./supabaseClient"
import { projectsSeedData } from "./projects.data.ts"

export async function seedProjects() {
  logger.info("Seeding projects...")

  const { data, error } = await supabase.from("projects").upsert(projectsSeedData, { onConflict: "title,repo-url" })
  if (error) {
    console.error(`Seed failed: ${error.message}`)
    throw error
  }

  logger.info("Successfully inserted projects")
  return data
}

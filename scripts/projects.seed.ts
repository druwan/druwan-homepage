import { logger } from "../src/app/lib/serverLogger"
import { supabase } from "../src/app/lib/supabaseClient"
import { projectsSeedData } from "./projects.data"

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

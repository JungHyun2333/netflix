"use server";

// supabase import
import { createServerSupabaseClient } from "utils/supabase/server";

function errorhandler(error) {
  console.error(error);
  throw new Error(error);
}

// searchMovie function
export const searchMovie = async (search: string = "") => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("movies").select("*").ilike("title", `%${search}%`);
  if (error) {
    errorhandler(error);
  }
  return data;
};

// get movie function
export const getMovie = async (id) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("movies").select("*").eq("id", id).maybeSingle();
  if (error) {
    errorhandler(error);
  }
  return data;
};

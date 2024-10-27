"use server";

// supabase import
import { createServerSupabaseClient } from "utils/supabase/server";

function errorhandler(error) {
  console.error(error);
  throw new Error(error);
}

// searchMovie function
export async function searchMovie({ search = "", page, pageSize }) {
  const supabase = await createServerSupabaseClient();
  const { data, error, count } = await supabase
    .from("movies")
    .select("*")
    .ilike("title", `%${search}%`)
    .order("release_date", { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    errorhandler(error);
  }

  const hasNextPage = count > page * pageSize;

  return { data, page, pageSize, hasNextPage };
}

// get movie function
export const getMovie = async (id) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("movies").select("*").eq("id", id).maybeSingle();
  if (error) {
    errorhandler(error);
  }
  return data;
};

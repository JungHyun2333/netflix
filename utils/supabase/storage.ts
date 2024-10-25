export function getImageUrl(imagename: string) {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/minibox/${imagename}`;
}

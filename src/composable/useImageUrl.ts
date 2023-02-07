export const getImageUrl = (name: string) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
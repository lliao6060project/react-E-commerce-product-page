import products from "./products";

export const slides = products.map(({ src, key, width, height, images }: any) => ({
  src,
  key,
  width,
  height,
  srcSet: images?.map((image: { src: string; width: number; height: number; }) => ({
    src: image.src,
    width: image.width,
    height: image.height
  }))
}));

export const advancedSlides = [
  { ...slides[0]},
  {
    ...slides[1],
  },
  {
    ...slides[2],
  },
  {
    ...slides[3],
  },
];

export default slides;

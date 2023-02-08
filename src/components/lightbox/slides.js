import photos from "./photos";

export const slides = photos.map(({ src, key, width, height, images }) => ({
  src,
  key,
  width,
  height,
  srcSet: images?.map((image) => ({
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

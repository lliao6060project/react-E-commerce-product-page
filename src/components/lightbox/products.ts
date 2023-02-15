import { getImageUrl } from '@/composable/useImageUrl'

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const productsList = [
  {
    id: 'image-product-1',
    width: 1000,
    height: 1000
  },
  {
    id: 'image-product-2',
    width: 1000,
    height: 1000
  },
  {
    id: 'image-product-3',
    width: 1000,
    height: 1000
  },
  {
    id: 'image-product-4',
    width: 1000,
    height: 1000
  },
]

const products = productsList.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: getImageUrl(`products/${photo.id}.jpg`),
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      return {
        src: getImageUrl(`products/${photo.id}.jpg`),
      };
    })
  };
});

export default products;

import type { PropsWithChildren } from 'react'

import PhotoGallery from './components/PhotoGallery'
import ProductIntro from './components/ProductIntro'

interface TopBlockProps extends PropsWithChildren {
  count: number
  product: Record<string, string | number>
  onaddProdToCartClick: () => void
}

const TopBlock = ({count, product, onaddProdToCartClick}: TopBlockProps) => {
  return (
    <div className='
      w-full
      mx-auto
      grid
      grid-cols-1
      lg:w-11/12
      lg:grid-cols-2
      lg:gap-20
      lg:mb-24
      xl:gap-24
      xl:w-10/12
    '>
      <PhotoGallery />
      <ProductIntro
        count={count}
        product={product}
        onaddProdToCartClick={onaddProdToCartClick}
      />
    </div>
  )
}

export default TopBlock
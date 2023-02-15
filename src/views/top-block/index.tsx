import type { PropsWithChildren } from 'react'
import type { CartItem } from '@/common/types'

import PhotoGallery from './components/PhotoGallery'
import ProductIntro from './components/ProductIntro'

interface TopBlockProps extends PropsWithChildren {
  count: number
  product: CartItem
  onAddProdToCartClick: () => void
}

const TopBlock = ({count, product, onAddProdToCartClick}: TopBlockProps) => {
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
        onAddProdToCartClick={onAddProdToCartClick}
      />
    </div>
  )
}

export default TopBlock
import type { PropsWithChildren } from 'react'
import type { CartItem } from '@/common/types'
import { forwardRef } from 'react'
import { getImageUrl } from '@/composable/useImageUrl'

interface CartListProps extends PropsWithChildren {
  count: number
  items: Partial<CartItem[]> | unknown
  onRemoveCartItem: () => void
  onClose: () => void
}

const CartList = forwardRef<HTMLDivElement, CartListProps>(({...props}: CartListProps, ref) => {
  const {
    count,
    items,
    onRemoveCartItem,
    onClose
  } = props
  return (
    <>
      <div
        ref={ref}
        className={`
          hidden
          left-2
          top-[110px]
          border
          border-gray-300/50
          rounded-md
          bg-white
          shadow-lg
          shadow-gray-400/50
          w-[95.5vw]
          mt-5
          mb-16
          mx-auto
          md:w-[95vw]
          md:left-5
          lg:w-[81vw]
          lg:left-24
          lg:top-[8%]
          xl:block
          xl:m-0
          xl:group-hover:visible
          xl:invisible
          xl:absolute
          xl:w-96
          xl:-left-[10vw]
          xl:top-28
        `}
      >
        {/* triangles */}
        <div className='
          hidden
          top-[-10px]
          right-[35%]
          border-solid
          border-b-black
          border-b-8
          border-x-transparent
          border-x-8
          border-t-0
          xl:block
          xl:absolute
        '></div>

        {/* cart list */}
        <div className={`
          cart-list-wrapper
          text-gray-400
          xl:max-w-md
          bg-white
          p-2
        `}>
          <div className='cart-list-wrapper__header border-b p-4 flex items-center text-lg text-black font-bold'>
            Cart
          </div>
          <div
            className='close-icon absolute top-4 right-5 z-10 block text-3xl text-black xl:hidden'
            onClick={onClose}
          >&times;</div>
          <div className={`
            relative
            min-h-[34vh]
            xl:min-h-[200px]
            ${(items as CartItem[]).length > 0 ? 'block' : 'hidden'}
          `}
          >
            <ul role='list' className='mx-auto'>
              {
                (items as CartItem[]).map((cartItem, i) => {
                  return (
                    <li
                      className='
                        group/item
                        relative
                        flex
                        items-center
                        justify-between
                        p-2
                        hover:bg-slate-100
                        [&:not(:last-child)]:border-b
                      '
                      key={`${cartItem.name}-${i}`}
                    >
                      <div className='flex gap-4'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-12 w-12 rounded-full'
                            src={cartItem.image_url}
                          />
                        </div>
                        <div className='w-full text-sm leading-6'>
                          <a href='#'>
                            <span
                              className='absolute inset-0 rounded-xl'
                              aria-hidden='true'
                            ></span>
                            {cartItem.name}
                          </a>
                          <div className='text-slate-500'>
                            ${cartItem.price} x {cartItem.amount}
                            <span className='font-bold text-black pl-3'>${ cartItem.price * cartItem.amount }</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href='#'
                        className='
                          group/edit
                          relative
                          visible
                          flex
                          items-center
                          whitespace-nowrap
                          rounded-full
                          py-1
                          pl-4
                          pr-3
                          text-sm
                          text-slate-500
                          transition
                          hover:bg-slate-200
                          xl:invisible
                          xl:group-hover/item:visible
                        '
                        onClick={onRemoveCartItem}
                      >
                        <span className='font-semibold transition group-hover/edit:text-gray-700'>
                          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nGNgIAw4GBgYdBkYGKwZGBhs0bA1VA6khmKgi8UCWzQMUkMxgPmEG4scD5LPSAL6RLieWKyPyxJbGuGBs4juwJZePrEd9hbBALF821GLbEeDjmE0MTCM5qOhlhhsaVWomlPBEnNiLFKggkUgMwgCRqhCcnwG0gPSCzIDBQAAdmVTlC+giPkAAAAASUVORK5CYII=' className='w-4'/>
                        </span>
                        <svg
                        className='
                          mt-px
                          h-5
                          w-5
                          text-slate-400
                          transition
                          group-hover/edit:translate-x-0.5
                          group-hover/edit:text-slate-500
                        '
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path className='evenodd' d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z' clipRule='evenodd'></path>
                        </svg>
                      </a>
                    </li>
                  )
                })
              }
            </ul>

            <div className={`
              absolute
              bottom-0
              left-[50%]
              -translate-x-[50%]
              w-full
              h-14
              text-center
              bg-tritanomaly
              rounded-xl
              flex-center
              hover:opacity-70
              mt-3
            `}
            >
              <div className='text-lg text-white flex justify-around'>
                <span>Checkout</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`min-h-[34vh] xl:min-h-[200px] text-gray-500 ${(items as CartItem[]).length > 0 ? 'hidden' : 'flex-center'}`}>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  )
})

export default CartList
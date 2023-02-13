import Counter from "@/components/Counter"
import { useSelector, useDispatch } from "react-redux";

const ProductIntro = () => {
  const { count, min, max } = useSelector((state: Record<string, number>) => state)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch({type: 'INCREMENT'})
  }

  return (
    <>
      <div className="w-11/12 mx-auto tracking-wider lg:pt-3 xl:pt-8 2xl:pt-20">
        <h3 className="text-sm text-tritanomaly font-bold pb-5">SNEAKER COMPANY</h3>
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl 2xl:text-5xl">Fall Limited Edition Sneakers</h2>
        <p className="
          text-xs
          text-gray-400
          pt-4
          md:text-sm
          lg:text-base
          2xl:pt-10
        ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-1 pt-10 pb-4 xl:pt-6 2xl:pt-10">
          <div className="flex items-center font-bold ">
            <h3 className="text-2xl flex-start mr-4 lg:text-3xl">$125.00</h3>
            <div className="text-xs text-tritanomaly bg-orange-100 / 2 rounded-lg px-3 py-1 lg:text-sm">50%</div>
          </div>
          <div className="
            w-full
            text-xs
            text-gray-400
            line-through
            flex
            items-center
            justify-end
            lg:text-sm
            lg:justify-start
            lg:pt-4
          ">$250.00</div>
        </div>

        <div className="grid grid-cols-1 gap-5 my-3 lg:h-14 lg:grid-cols-5 xl:my-10 xl:mb-0">
          <div className="lg:col-span-2 h-14">
            <Counter />
          </div>

          <div className={`
            h-14
            text-center
            bg-tritanomaly
            rounded-xl
            flex-center
            hover:opacity-70
            lg:col-span-3
            ${count >= max ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
          onClick={() => addToCart()}
          >
            <div className="text-lg text-white flex justify-around">
              <span className="flex items-center justify-end">
                <svg className="w-10 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" className="nonzero"/></svg>
              </span>
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductIntro

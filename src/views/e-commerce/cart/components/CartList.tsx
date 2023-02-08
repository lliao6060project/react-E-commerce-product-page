const CartList = ({...props}) => {
  return (
    <>
      <div className="
        invisible
        w-52
        absolute
        top-24
        -left-28
        border
        border-gray-300/50
        rounded-md
        bg-white
        shadow-lg
        shadow-gray-400/50
        md:-left-44
        md:w-80
        group-hover:visible
      "
      >
        {/* triangles */}
        <div className="
          absolute
          top-[-9px]
          right-[30%]
          border-solid
          border-b-black
          border-b-8
          border-x-transparent
          border-x-8
          border-t-0
        "></div>
        {/* cart list */}
        <div className="cart-list-wrapper">
          <div className="cart-list-wrapper__header border-b p-4 flex items-center">
            Cart
          </div>
          <ul role="list" className="mx-auto max-w-md bg-white p-4">
            <li className="group/item relative flex items-center justify-between p-2 hover:bg-slate-100 [&:not(:last-child)]:border-b">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                </div>
                <div className="w-full text-sm leading-6">
                  <a href="#" className="font-semibold text-slate-900"><span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Leslie Abbott</a>
                  <div className="text-slate-500">Co-Founder / CEO</div>
                </div>
              </div>
              <a href="#" className="group/edit invisible relative flex items-center whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-200 group-hover/item:visible">
                <span className="font-semibold transition group-hover/edit:text-gray-700">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nGNgIAw4GBgYdBkYGKwZGBhs0bA1VA6khmKgi8UCWzQMUkMxgPmEG4scD5LPSAL6RLieWKyPyxJbGuGBs4juwJZePrEd9hbBALF821GLbEeDjmE0MTCM5qOhlhhsaVWomlPBEnNiLFKggkUgMwgCRqhCcnwG0gPSCzIDBQAAdmVTlC+giPkAAAAASUVORK5CYII=" className="w-4"/>
                </span>
                <svg className="mt-px h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CartList
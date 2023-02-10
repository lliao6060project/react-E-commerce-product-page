import type { PropsWithChildren } from 'react'
import { useEffect, useState } from "react";

interface LightboxProps extends PropsWithChildren {
  open: Boolean
  slides: any[]
  active: number
  onClose?: () => void
}

const Lightbox = ({onClose, open = false, ...props}: LightboxProps) => {
  const { slides, active } = props
  const [current, setCurrent] = useState(0)

  const onArrowClick = ({ action = 'prev' }) => {
    if(!slides.length) return
    if(slides.length > 1) {
      const nextImg = action === 'prev' ? slides[current -1] : slides[current +1]
      if(nextImg && nextImg.src) {
        const index = slides.findIndex((item) => item.src === nextImg?.src)
        setCurrent(index)
      } else {
        action === 'prev' ? setCurrent(slides.length-1) : setCurrent(0)
      }
    }
  }

  useEffect(() => {
    if(open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open])

  useEffect(() => {
    setCurrent(active)
  }, [active])

  useEffect(() => {
    console.log('子組件渲染')
  }, [])

  return (
    <>
      <div className={`${open ? 'fixed w-screen top-0 left-0 right-0 bottom-0 bg-black/[.75] z-[999]' : 'hidden'}`}>
        <div className="
          w-11/12
          xl:w-2/3
          absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:-translate-y-[42%]
          py-12
        ">
          <div className="
            relative
            mx-auto
            w-11/12
            h-80
            md:max-w-lg
            md:h-[60vh]
            lg:max-w-2xl
          "
          >
            {/* close icon */}
            <div
              className="absolute -top-10 -right-2 cursor-pointer group"
              onClick={onClose}
            >
              <span className="block group-hover:hidden">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO2WSwqEMBBEvYSi9z9OXI0Lj/NkUJDJwv6kBmHGgqy0eN1tUqbrHv2lgAGYjzU0+IvbD/TAi1MrMAWgOT97pbUWT+VHp+93a5Us2IRfQN3gvhoV1tgcntEER+EyaAQuhzq/22I8Cx/DDxldaTttgOugAbgeGgC7E+4bo9bAyW2uNjh3HCcc4ZCJ10tFEkkGJxGDEjg3/hbnKNQBL9mrizuRmvzslZfQZU3of/Qb2gDIApP3EFwGCQAAAABJRU5ErkJggg==" />
              </span>
              <span className="hidden group-hover:block">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVR4nO2WwQrCMBBE5ycs+pEBcf3LeNKDnzOi6SUoye5mIVA7kEvb4WW3zXSBXX8pChYKbutaBvxZ7WfCgYI7BVzXk2ec1FCvn2WnrNYFD83OP5WWZ2u/IPvACngDqgSnr1ax17au54pjF2yFh0Et8HCo6r29r7fuOY5hpU5VsZUOwOOgBng8VA02JFx8q6Pg9Hxco3DOOE5UhIMnXpuyJFIYnI4YDIFz2m9RZg0C6cfoYkikIT/LsJZNw1qgf9c29AJVV7HHB+D8tAAAAABJRU5ErkJggg==" />
              </span>
            </div>

            {/* pre */}
            <div className="
              absolute
              top-[50%]
              -translate-y-[50%]
              -left-5
              lg:-left-8
              bg-white
              rounded-full
              w-10
              h-10
              lg:w-16
              lg:h-16
              cursor-pointer group
              "
              onClick={() => onArrowClick({action: 'prev'})}
            >
              <span className="align-center">
                <i className="block group-hover:hidden">
                  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" className="evenodd" /></svg>
                </i>
                <i className="hidden group-hover:block">
                  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#ff7300" strokeWidth="3" fill="none" className="evenodd" /></svg>
                </i>
              </span>
            </div>

            {/* next */}
            <div className="
              absolute
              top-[50%]
              -translate-y-[50%]
              -right-5
              lg:-right-8
              bg-white
              rounded-full
              w-10
              h-10
              lg:w-16
              lg:h-16
              cursor-pointer
              group
            "
              onClick={() => onArrowClick({action: 'next'})}
            >
              <span className="align-center">
                <i className="block group-hover:hidden">
                  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" className="evenodd"/></svg>
                </i>
                <i className="hidden group-hover:block">
                  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#ff7300" strokeWidth="3" fill="none" className="evenodd"/></svg>
                </i>
              </span>
            </div>

            {/* main img */}
            <div
              className={`
              h-full
              rounded-xl
              mx-auto
              bg-cover
              bg-no-repeat
            `}
            style={{backgroundImage: `url(${slides[current ? current : 0]?.src})`}}
            ></div>
          </div>

          {/* thumbnails */}
          <div className="
            grid
            grid-cols-4
            mx-auto
            mt-5
            gap-5
            px-4
            md:px-0
            max-w-xs
            md:max-w-md
            lg:max-w-xl
            xl:gap-3
            xl:mt-12
          "
          >
            {
              slides.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`
                      h-12
                      rounded-xl
                      overflow-hidden
                      md:h-20
                      xl:mx-5
                      cursor-pointer
                      hover:opacity-80
                      hover:backdrop-brightness-200
                      ${current === i ? 'border-4 border-tritanomaly' : ''}
                    `}
                    onClick={() => setCurrent(i)}
                  >
                    <img src={item.src} className="block object-cover"/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
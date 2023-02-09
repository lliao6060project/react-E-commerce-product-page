import { PropsWithChildren, useState } from 'react'
import { useEffect, forwardRef } from "react";

interface LightboxProps extends PropsWithChildren {
  open: Boolean
  slides: any[]
  active: number
  onClose?: () => void
}

const Lightbox = forwardRef<HTMLDivElement, LightboxProps>(({onClose, open = false, ...props}: LightboxProps) => {
  const { slides, active } = props
  const [current, setCurrent] = useState(0)

  const onPrevClick = () => {
    if(!slides.length) return
    if(slides.length > 1) {
      const prevImg = slides[current -1] ? slides[current -1] : current
      if(prevImg.src) {
        const index = slides.findIndex((item) => item.src === prevImg?.src)
        setCurrent(index)
      }
    }
  }

  const onNextClick = () => {
    if(!slides.length) return
    if(slides.length > 1) {
      const nextImg = slides[current +1] ? slides[current +1] : current
      if(nextImg.src) {
        const index = slides.findIndex((item) => item.src === nextImg?.src)
        setCurrent(index)
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
  return (
    <>
      <div className={`${open ? 'fixed w-screen top-0 left-0 right-0 bottom-0 bg-black/[.75] z-[999]' : 'hidden'}`}>
        <div className="
          w-11/12
          xl:w-2/3
          align-center
          py-12
        ">
          <div className="
            relative
            mx-auto
            w-11/12
            h-80
            md:w-10/12
            md:h-[600px]
            xl:max-w-2xl
          "
          >
            {/* close icon */}
            <div
              className="absolute -top-10 -right-2 cursor-pointer"
              onClick={onClose}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVR4nO2WwQrCMBBE5ycs+pEBcf3LeNKDnzOi6SUoye5mIVA7kEvb4WW3zXSBXX8pChYKbutaBvxZ7WfCgYI7BVzXk2ec1FCvn2WnrNYFD83OP5WWZ2u/IPvACngDqgSnr1ax17au54pjF2yFh0Et8HCo6r29r7fuOY5hpU5VsZUOwOOgBng8VA02JFx8q6Pg9Hxco3DOOE5UhIMnXpuyJFIYnI4YDIFz2m9RZg0C6cfoYkikIT/LsJZNw1qgf9c29AJVV7HHB+D8tAAAAABJRU5ErkJggg==" />
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
              onClick={() => onPrevClick()}
            >
              <span className="align-center">
                <i className="block group-hover:hidden">
                  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                </i>
                <i className="hidden group-hover:block">
                  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#ff7300" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
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
              onClick={() => onNextClick()}
            >
              <span className="align-center">
                <i className="block group-hover:hidden">
                  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </i>
                <i className="hidden group-hover:block">
                  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#ff7300" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
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
            mt-8
            px-8
            gap-5
            md:px-24
            lg:px-28
            xl:max-w-xl
            xl:gap-3
            xl:mt-12
            xl:px-0
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
});

export default Lightbox;
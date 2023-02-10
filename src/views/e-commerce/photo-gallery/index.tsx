import { useState, } from "react";
import { advancedSlides } from "@/components/lightbox/slides";
import Lightbox from '@/components/Lightbox'
import { mobileDevice } from '@/composable/useUtils'

const PhotoGallery = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1);

  // only used in pc
  const openLightbox = () => {
    if(!mobileDevice) {
      setOpen(true)
      setActive(active !== -1 ? active : 0)
    }
  }

  const onThumbnailsClick = (index: number) => {
    if(!mobileDevice) {
      setActive(index)
      setOpen(true)
    }
  }

  // mobile
  const onArrowClick = ({ action = 'prev' }) => {
    if(!advancedSlides.length) return
    if(advancedSlides.length > 1) {
      const nextImg = action === 'prev' ? advancedSlides[active -1] : advancedSlides[active +1]
      if(nextImg && nextImg.src) {
        const index = advancedSlides.findIndex((item) => item.src === nextImg?.src)
        setActive(index)
      } else {
        action === 'prev' ? setActive(advancedSlides.length-1) : setActive(0)
      }
    }
  }

  return (
    <>
      <div className="photo-album">
        <div
          className="photo-album__main-image flex-center cursor-pointer relative xl:max-w-xl mx-auto"
          onClick={() => openLightbox()}
        >
          <img
            src={active !== -1 ? advancedSlides[active]?.src : advancedSlides[0]?.src}
            className="object-contain w-full md:w-96 mb-5 md:mb-8 lg:rounded-xl xl:object-cover"
          />
          {/* pre */}
          <div className="
            block
            lg:hidden
            absolute
            top-[50%]
            -translate-y-[50%]
            left-3
            lg:left-8
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
            block
            lg:hidden
            absolute
            top-[50%]
            -translate-y-[50%]
            right-3
            lg:right-8
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
        </div>
        <div className="
          photo-album__images
          grid-cols-4
          gap-6
          md:gap-10
          hidden
          lg:grid
          xl:mx-auto
          xl:max-w-xl
        ">
          {
            advancedSlides.map((img: { src: string | undefined; }, index: number) => {
              return (
                <div
                  key={`${img.src}-${index}`}
                  onClick={() => onThumbnailsClick(index)}
                  className={
                  `
                    rounded-xl overflow-hidden
                    cursor-pointer
                    hover:opacity-70
                    ${index === active || active === -1 && index === 0 ? "border-4 border-[#ff7300]" : ''}
                  `}
                >
                  <img
                    src={img.src}
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
              )
            })
          }
        </div>
      </div>

      <Lightbox
        open={open}
        slides={advancedSlides}
        active={active}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default PhotoGallery
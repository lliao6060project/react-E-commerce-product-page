import { useState, } from "react";
import { advancedSlides } from "@/components/lightbox/slides";
import Lightbox from '@/components/Lightbox'

const PhotoGallery = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1);

  const openLightbox = () => {
    setOpen(true)
    setActive(active !== -1 ? active : 0)
  }

  const onThumbnailsClick = (index: number) => {
    setActive(index)
    setOpen(true)
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
        <div className="photo-album__main-image flex-center mx-auto cursor-pointer relative">
          {/* main image */}
          <img
            src={active !== -1 ? advancedSlides[active]?.src : advancedSlides[0]?.src}
            className="
              object-contain
              w-full
              mb-5
              sm:object-cover
              sm:max-h-[450px]
              md:mb-8
              lg:rounded-xl
              lg:h-[60vh]
              2xl:max-h-[50vh]
            "
            onClick={() => openLightbox()}
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

        {/* images */}
        <div className="
          photo-album__images
          grid-cols-4
          gap-6
          md:gap-10
          hidden
          lg:grid
          xl:mx-auto
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
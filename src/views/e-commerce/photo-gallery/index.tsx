import { useEffect, useState } from "react";
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

  const onCloseLightbox = () => {
    setOpen(false)
  }

  // useEffect(() => {
  //   console.log(123)
  // }, [])
  return (
    <>
      <div className="photo-album xl:pr-24">
        <div
          className="photo-album__main-image flex-center overflow-hidden cursor-pointer"
          onClick={() => openLightbox()}
        >
          <img
            src={active !== -1 ? advancedSlides[active]?.src : advancedSlides[0]?.src}
            className="object-contain w-full mb-5 md:mb-8 rounded-xl xl:h-2/3 xl:object-cover"
          />
        </div>
        <div className="photo-album__images grid grid-cols-4 gap-6 md:gap-10">
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
        onClose={() => onCloseLightbox()}
      />
    </>
  )
}

export default PhotoGallery
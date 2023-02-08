import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";

import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/styles.css";
import { slides, advancedSlides } from "./lightbox/slides";

const PhotoGallery = () => {
  const [active, setActive] = React.useState(-1);



  return (
    <>
      <div className="photo-album xl:pr-24">
        {/* <Lightbox
          slides={advancedSlides[active !== -1 ? active : 0]}
          plugins={[Inline]}
          inline={{
            style: {
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "3 / 2"
            }
          }}
        /> */}
        <div className="photo-album__main-image flex-center">
          <img src={active !== -1 ? advancedSlides[active]?.src : advancedSlides[0]?.src} className="object-cover w-96 h-96 mb-4"/>
        </div>
        <div className="photo-album__images grid grid-cols-2 lg:grid-cols-4 gap-5">
          {
            advancedSlides.map((img: { src: string | undefined; }, index: number) => {
              return (
                <div
                  key={`${img.src}-${index}`}
                  onClick={() => setActive(index)}
                  className={
                    `w-full h-full
                    ${index === active || active === -1 && index === 0 ? "border-4 rounded-lg border-[#ff7300]" : ''}
                  `}
                >
                  <img src={img.src} className="object-cover w-full h-48 xl:w-48 xl:h-32"/>
                </div>
              )
            })
          }
        </div>
      </div>

      <Lightbox
        index={active}
        open={active >= 0}
        close={() => setActive(-1)}
        slides={advancedSlides}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default PhotoGallery;
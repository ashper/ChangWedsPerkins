import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "./MoreOfUs.css";
import { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import lgHash from "lightgallery/plugins/hash";

function MoreOfUs() {
  const images = import.meta.glob(
    "../assets/MoreOfUs/*.{png,jpg,jpeg,svg,JPG,PNG}",
    {
      eager: true,
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageList = Object.values(images).map((image: any, index) => (
    <a key={index} className="gallery-item" data-src={image.default}>
      <img
        className="img-responsive"
        src={image.default}
        style={{ width: "380px", height: "100%" }}
        loading="lazy"
      />
    </a>
  ));

  useEffect(() => {
    // Ensure the DOM element exists
    const container = document.querySelector(".masonry-gallery");
    if (container) {
      // Initialize Masonry
      const masonry = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: 380,
        gutter: 10,
        percentPosition: true,
        fitWidth: true,
      });

      // Use imagesLoaded with Masonry
      imagesLoaded(container).on("progress", function () {
        // Layout Masonry after each image loads
        if (masonry.layout) {
          masonry.layout();
        }
      });
    }
  }, []);

  return (
    <LightGallery
      elementClassNames={"masonry-gallery"}
      plugins={[lgZoom, lgHash]}
      speed={500}
    >
      <div className="grid-sizer"></div>
      {imageList}
    </LightGallery>
  );
}

export default MoreOfUs;

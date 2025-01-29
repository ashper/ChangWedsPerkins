import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "./OurStory.css";
import { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import lgHash from "lightgallery/plugins/hash";

function OurStory() {
  const images = import.meta.glob(
    "./assets/OurStory/*.{png,jpg,jpeg,svg,JPG,PNG}",
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
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        efficitur urna justo. Aenean ut sapien nunc. Maecenas rhoncus neque ex,
        sit amet gravida ipsum tempor sed. Donec consequat risus sed mi
        convallis vestibulum. Nullam vitae massa porta tellus commodo
        pellentesque a vitae mi. Nunc ut venenatis ante. Proin posuere tempus
        ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        at dui quis arcu placerat dapibus vel eleifend mi. Nulla ac justo
        rhoncus, gravida arcu non, lacinia lectus. Duis dapibus urna sed arcu
        hendrerit laoreet ac in eros. Curabitur tempor sapien vitae diam
        sagittis iaculis. Ut ultricies arcu ipsum.{" "}
      </p>
      <p>
        Ut sit amet dui maximus, mollis nisl in, lacinia mi. Ut dictum semper
        dui luctus imperdiet. Aenean id justo sed mauris maximus gravida id at
        nisi. Quisque at pharetra neque. Quisque eu ipsum malesuada, dignissim
        enim at, ullamcorper risus. Pellentesque fermentum fermentum massa, ac
        euismod eros condimentum ut. Morbi non feugiat elit, nec accumsan mi. In
        facilisis ex ac laoreet pulvinar. Aliquam mattis arcu id imperdiet
        auctor. Phasellus eu mauris id neque porta finibus non ac nulla.
      </p>
      <p>
        Quisque commodo augue ac ex aliquet placerat. Vivamus vitae pellentesque
        tellus. Fusce diam augue, cursus nec commodo non, feugiat nec sapien.
        Cras ullamcorper velit volutpat eros faucibus, id porta sem venenatis.
        Aenean eu leo viverra, cursus turpis nec, efficitur purus. Aenean sapien
        risus, tempus a iaculis quis, dictum non erat.{" "}
      </p>

      <LightGallery
        elementClassNames={"masonry-gallery"}
        plugins={[lgZoom, lgHash]}
        speed={500}
      >
        <div className="grid-sizer"></div>
        {imageList}
      </LightGallery>
    </>
  );
}

export default OurStory;

function OurStory() {
  const images = import.meta.glob(
    "../assets/OurStory/*.{png,jpg,jpeg,svg,JPG,PNG}",
    {
      eager: true,
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageList = Object.values(images).map((image: any) => (
    <img
      src={image.default}
      style={{ width: "100%", height: "100%" }}
      loading="lazy"
    />
  ));

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

      {imageList}
    </>
  );
}

export default OurStory;

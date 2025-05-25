function MoreOfUs() {
  const images = import.meta.glob(
    "../assets/MoreOfUs/*.{png,jpg,jpeg,svg,JPG,PNG}",
    {
      query: "?url",
      import: "default",
      eager: true,
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageList = Object.values(images).map((image: any, index) => (
    <img
      key={index}
      src={image}
      style={{ width: "100%", height: "100%" }}
      loading="lazy"
    />
  ));

  return <div>{imageList}</div>;
}

export default MoreOfUs;

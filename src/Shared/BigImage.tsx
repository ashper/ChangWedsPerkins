import "./BigImage.css";
import image from "../assets/IMG(57).jpg";

function BigImage() {
  return (
    <img
      className="image"
      src={image}
      alt="Photo"
      style={{ margin: "-20px" }}
    ></img>
  );
}

export default BigImage;

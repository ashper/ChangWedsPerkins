import "./BigImage.css";
import image from "../assets/Example.jpg";

function BigImage() {
  return <img className="image" src={image} alt="Photo" height="300px"></img>;
}

export default BigImage;

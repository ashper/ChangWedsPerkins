import "./Heading.css";
import image from "./assets/Ashley-and-Kai-Proposal-22.jpg";

function Heading() {
  const one_day = 1000 * 60 * 60 * 24;
  const now = new Date();
  const weddingDay = new Date("2025-08-02");
  const days = Math.round((weddingDay.getTime() - now.getTime()) / one_day);
  return (
    <>
      <div className="heading">Chang & Perkins</div>
      <div className="paragraph">2ND AUGUST 2025 • CLAUDINE, SINGAPORE </div>
      <div className="paragraph">{`${days} DAYS TO GO!`}</div>
      <img className="image" src={image} alt="Photo"></img>
    </>
  );
}

export default Heading;

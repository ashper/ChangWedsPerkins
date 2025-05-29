import "./Heading.css";

function Heading() {
  const one_day = 1000 * 60 * 60 * 24;
  const now = new Date();
  const weddingDay = new Date("2025-08-02");
  const days = Math.round((weddingDay.getTime() - now.getTime()) / one_day);
  return (
    <>
      <div className="heading">Kaiqing & Ashley</div>
      <div className="paragraph">
        2ND AUGUST 2025 • CLAUDINE, SINGAPORE • {`${days} DAYS TO GO!`}{" "}
      </div>
    </>
  );
}

export default Heading;

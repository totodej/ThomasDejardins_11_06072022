import "../../style/Home/GridHome.css";
import logements from "../../data.json";
import Card from "../../components/Card";

function GridHome() {
  return (
    <div className="grid-home">
      {logements.map((logement, index) => {
        return <Card key={`${index}`} logement={logement} />;
      })}
    </div>
  );
}

export default GridHome;

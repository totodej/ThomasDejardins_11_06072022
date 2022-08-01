import BackgroundHome from "../components/Home/BackgroundHome";
import GridHome from "../components/Home/GridHome";
import "../style/Home/Home.css";

function Home() {
  console.log("antoine");
  return (
    <div className="home">
      <BackgroundHome />
      <GridHome />
    </div>
  );
}

export default Home;

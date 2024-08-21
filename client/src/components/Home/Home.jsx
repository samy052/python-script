import { Link } from "react-router-dom";
import "./HomeStyles.css";
import Nav from "../Nav/Nav";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="home-body">
          <h1>Python</h1>
          <button>
            <Link to={"/profilePage"}>Start Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

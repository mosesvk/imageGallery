import Navbar from "../../components/navbar.jsx";
import ImageApiSet from "../api/pexelsApiSetPages";

const Food = () => {
  const myTheme = 'food';
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center">Food</h1> */}
      <ImageApiSet theme= { myTheme }/>
    </div>
  );
};

export default Food;

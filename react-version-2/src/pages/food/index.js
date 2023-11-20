import Navbar from "../../components/navbar.jsx";
import ImageApiSet from "../api/pexelsApiSetPages";

const Food = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Food</h1>
      <ImageApiSet theme= { 'food' }/>
    </div>
  );
};

export default Food;

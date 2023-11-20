import Navbar from "../../components/Navbar";
import ImageApiSet from "../api/pexelsApiSetPages";

const Food = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Food</h1>
      <ImageApiSet theme= { ['food','green'] }/>
    </div>
  );
};

export default Food;

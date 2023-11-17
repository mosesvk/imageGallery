import Navbar from "../../components/Navbar";
import ImageApiSet from "../api/pexelsApiSetPages";

const City = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">City</h1>
      <ImageApiSet theme= { 'city' }/>
    </div>
  );
};

export default City;

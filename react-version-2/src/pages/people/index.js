import Navbar from "../../components/Navbar";
import ImageApiSet from "../api/pexelsApiSetPages";
const People = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">People</h1>
      <ImageApiSet theme= { 'people' }/>
    </div>
  );
};

export default People;

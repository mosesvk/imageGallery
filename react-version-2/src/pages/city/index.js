import Navbar from "../../components/navbar.jsx";
import ImageApiSet from "../api/pexelsApiSetPages";

const City = () => {
  const myTheme = 'city';
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center">City</h1> */}
      <ImageApiSet theme= { myTheme }/>
    </div>
  );
};

export default City;

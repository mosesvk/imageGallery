import Navbar from "../../components/navbar.jsx";
import ImageApiSet from "../api/pexelsApiSetPages";
const Country = () => {
  const myTheme = 'country';
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center">Country</h1> */}
      <ImageApiSet theme= { myTheme }/>
    </div>
  );
};

export default Country;

import Navbar from "../../components/navbar.jsx";
import ImageApiSet from "../api/pexelsApiSetPages";
const People = () => {
  const myTheme = 'people';
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center">People</h1> */}
      <ImageApiSet theme= { myTheme }/>
    </div>
  );
};

export default People;

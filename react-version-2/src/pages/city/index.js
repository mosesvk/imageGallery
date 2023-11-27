import { useSearchQueryContext } from "@/components/searchInputStateContext.js";
import Navbar from "../../components/navbar.jsx";
import PexelsApi from "../api/PexlesApi.jsx";

const City = () => {
  const { searchInput, setSearchInput } = useSearchQueryContext();
  setSearchInput('city');
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center">City</h1> */}
      <PexelsApi theme= { searchInput }/>
    </div>
  );
};

export default City;

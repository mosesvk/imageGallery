import { useSearchQueryContext } from "@/components/searchInputStateContext.js";
import Navbar from "../../components/navbar.jsx";
import PexelsApi from "../api/PexlesApi.jsx";

const Food = () => {
  const { searchInput, setSearchInput } = useSearchQueryContext();
  setSearchInput('food');
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center">Food</h1> */}
      <PexelsApi theme= { searchInput }/>
    </div>
  );
};

export default Food;

import { useSearchQueryContext } from "@/components/searchInputStateContext.js";
import Navbar from "../../components/navbar.jsx";
import PexelsApi from "../api/PexlesApi.jsx";
const People = () => {
  const { searchInput, setSearchInput } = useSearchQueryContext();
  setSearchInput('people');
  return (
    <div>
      <Navbar />
      <h1 className="text-center">People</h1>
      <PexelsApi theme= { searchInput }/>
    </div>
  );
};

export default People;

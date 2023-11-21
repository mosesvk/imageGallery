import Navbar from "../../components/navbar.jsx";
import PexelsApi from "../api/PexlesApi.jsx";
import { useSearchQueryContext } from "@/components/searchInputStateContext.js";
const Country = () => {
  const { searchInput, setSearchInput } = useSearchQueryContext();
  console.log(useSearchQueryContext)
  setSearchInput('country')
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Country</h1>
      <PexelsApi theme= { searchInput }/>
    </div>
  );
};

export default Country;

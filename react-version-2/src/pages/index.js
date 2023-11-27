import Navbar from "@/components/navbar";
import PexelsApi from "@/pages/api/PexlesApi";
import SearchBar from "@/components/SearchBarLayout.js";
import { useSearchQueryContext } from "@/components/searchInputStateContext";

export default function Home() {
  const { searchInput } = useSearchQueryContext;
  return (
    <main>
      <Navbar />
      <PexelsApi theme= { searchInput }/>
      <SearchBar />
    </main>
  );
}

import React, { useState, useContext, useEffect} from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SearchQueryContext}  from './searchInputStateContext';
import PexelsApi from '@/pages/api/PexlesApi';
// import handleSendSearch from './searchImagesReRender';
// import SendIcon from '@mui/icons-material/Send';

const SearchBar = () => {
  const { searchInput, setSearchInput }  = useContext(SearchQueryContext);
  const [ localSearchState, setLocalSearchState ] = useState([])
  const generalThemes = [
    'Nature',
    'Technology',
    'Abstract',
    'Travel',
    'Food',
    'Animals',
    'Cityscape',
    'Fitness',
    'Fashion',
    'Music',
    'Art',
    'Space',
    'Sports',
    'Vintage',
    'Film',
    'Books',
    'Architecture',
    'Cars',
    'Health',
    'Business',
    'Education',
    'History',
    'Science',
    'Holiday',
    'People',
    'Party',
    'Family',
    'Love',
    'Friendship',
    'Adventure',
    'Fantasy',
    'Gaming',
    'Hobbies',
    'Spirituality',
    'Weather',
    'Water',
    'Cats',
    'Dogs',
    'Birds',
    'Sunset',
    'Sunrise',
    'Mountains',
    'Beaches',
    'Winter',
    'Summer',
    'Autumn',
    'Spring',
  ];
  const handleSearchInputChange = (event, newValue) => {
    setLocalSearchState( newValue);
  };
const handleSendSearch = () => {
setSearchInput( [...localSearchState])

} 
useEffect(()=> {
setLocalSearchState(searchInput)
},[searchInput])
  return (
    <>
    <Stack spacing={3} sx={{ width: 500 }}>
    <Button variant="contained" onClick={handleSendSearch}> Send</Button>
      <Autocomplete
        multiple
        id="tags-filled"
        options={generalThemes}
        value={localSearchState}
        freeSolo
        onChange={handleSearchInputChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Image Search"
            placeholder="..."
          />
        )}
      />
    </Stack>
    </>
  );
};

export default SearchBar;
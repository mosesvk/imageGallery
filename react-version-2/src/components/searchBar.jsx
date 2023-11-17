'use client';
import React, {  useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// const SearchBar = () => {
//     const [theme, setTheme] = useState(null)
//     useEffect(()=> {
    
//         setTheme(queryList);
//     },{theme})
//     } 
// export default SearchBar; 


export default function Tags () {
    
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
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={generalThemes.map((option) => option)}
        defaultValue={[generalThemes[13].title]}
        freeSolo
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
  );
}

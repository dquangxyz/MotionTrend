import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Navbar() {
    const genresList = ["Action", "Adventure", "Comedy", "Sci-fi", "Thriller", "Horror", "Documentary", "Drama", "History", "Sport", "Crime", "Mystery", "Romance", "Fantasy" ]   
      
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='navbar' sx={{bgcolor: '#070707', color: '#ffffff' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{style: {background:'#D97D54'}}}
            >
                {genresList.map((item) => {
                    return <Tab className='navbar-item' label={item}  />
                })}
            </Tabs>
        </Box>
    );
    }


export default Navbar
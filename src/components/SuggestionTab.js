import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function SuggestionTab() {
    function LinkTab(props) {
        return (
        <Tab
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
        );
    }
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='suggestion' sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange}>
                <LinkTab className='suggestion-tab' label="Motion trend pick" href="" />
                <LinkTab className='suggestion-tab' label="Latest" href="" />
                <LinkTab className='suggestion-tab'  label="Recommended" href="" />
            </Tabs>
        </Box>
    )
}

export default SuggestionTab







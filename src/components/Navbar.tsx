import {Tabs, Tab, Box, Paper} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Drawer from './Drawer';
function Navbar() {
  let [value, setValue] = useState<string>('/');
  let navigate = useNavigate();
  let location = useLocation();
  function handleChange(_: React.SyntheticEvent, value: string) {
    navigate(value);
  }
  useEffect(() => {
    setValue(location.pathname);
    console.log(location.pathname);
  });
  return (
    <Paper>
      <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px 10px 10px'}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Home' value={'/'}></Tab>
          <Tab label='Store' value={'/store'}></Tab>
          <Tab label='About' value={'/about'}></Tab>
        </Tabs>
        <Drawer />
      </Box>
    </Paper>
  );
}
export {Navbar};

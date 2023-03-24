import {Tabs, Tab, Box, Paper, IconButton, Tooltip, Badge} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  let [value, setValue] = useState<string>('/');
  let navigate = useNavigate();

  function handleChange(_: React.SyntheticEvent, value: string) {
    setValue(value);
    navigate(value);
  }
  return (
    <Paper>
      <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px 10px 10px'}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Home' value={'/'}></Tab>
          <Tab label='Store' value={'store'}></Tab>
          <Tab label='About' value={'about'}></Tab>
        </Tabs>
        <Tooltip title='Open shopping cart'>
          <IconButton sx={{color: '#55AAFF', border: '1px solid #55AAFF'}} aria-label='Open shopping cart' size='large'>
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={2}
              color='error'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
}
export {Navbar};

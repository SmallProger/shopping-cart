import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import dataStoreItems from '../data/ShopItems.json';
import MediaCard from '../components/StoreItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Store() {
  return (
    <Paper sx={{padding: '40px'}}>
      <List>
        {dataStoreItems.map((itemData) => (
          <ListItem>{MediaCard(itemData)}</ListItem>
        ))}
      </List>
    </Paper>
  );
}

export {Store};

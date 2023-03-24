import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import dataStoreItems from '../data/items.json';
import MediaCard from '../components/StoreItem';
function Store() {
  return (
    <Paper sx={{padding: '40px'}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {dataStoreItems.map((itemData) => (
          <Grid item xs={2} sm={4} md={4} key={itemData.id}>
            {MediaCard(itemData)}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export {Store};

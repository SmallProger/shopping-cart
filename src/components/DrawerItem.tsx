import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CartItem} from '../store/reducers/cart';
import Container from '@mui/material/Container';
import {Box, List, ListItem} from '@mui/material';
import {Typography} from '@mui/material';

export default function DrawerItem(props: CartItem) {
  let {id, price, amount, name, imgUrl} = props;
  return (
    <Card sx={{display: 'flex', height: '100px', width: '100%'}}>
      <CardMedia sx={{height: 100, width: '40%', backgroundSize: 'contain !important'}} image={imgUrl} title={name} />
      <CardContent sx={{padding: 0}}>
        <Container>
          <Box sx={{padding: '5px'}}>
            <Typography variant='subtitle1' sx={{padding: 0, paddingBottom: '10px'}}>
              {name}
            </Typography>
            <List>
              <ListItem sx={{padding: 0}}>Price: {price}pуб</ListItem>
              <ListItem sx={{padding: 0}}>Amount: {amount}</ListItem>
            </List>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
}

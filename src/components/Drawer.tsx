import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {DrawerItem} from './DrawerItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconButton, Tooltip, Badge, Typography} from '@mui/material';
import {useAppSelector} from '../store/hooks/hooks';
import CloseIcon from '@mui/icons-material/Close';

export default function TemporaryDrawer() {
  const [isOpened, setIsOpened] = React.useState(false);
  const [amountItemsInCart, setAmountItemsInCart] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const cartItems = useAppSelector((state) => state.cart);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpened(open);
  };

  React.useEffect(() => {
    setAmountItemsInCart(cartItems.reduce((prev, next) => prev + next.amount, 0));
    setTotalPrice(Math.floor(cartItems.reduce((prev, next) => prev + next.amount * next.price, 0)));
  }, [cartItems]);

  const list = () => (
    <Box
      sx={{width: '370px', overflowY: 'scroll', maxHeight: '800px'}}
      className='drawer-box'
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      {cartItems.length != 0 ? (
        <List>
          {cartItems.map((item) => {
            return <ListItem key={item.id}>{DrawerItem(item)}</ListItem>;
          })}
        </List>
      ) : (
        <Typography sx={{padding: '10px'}} variant='h6'>
          Empty. Add the items you want to your shopping cart
        </Typography>
      )}
    </Box>
  );

  return (
    <div>
      <Tooltip title='Open shopping cart'>
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{color: '#55AAFF', border: '1px solid #55AAFF'}}
          aria-label='Open shopping cart'
          size='large'>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={amountItemsInCart}
            color='error'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Drawer anchor={'right'} open={isOpened} onClose={toggleDrawer(false)}>
        <CloseIcon
          sx={{alignSelf: 'flex-end', margin: '10px', cursor: 'pointer'}}
          fontSize='large'
          onClick={toggleDrawer(false)}
        />
        {list()}
        <Typography sx={{margin: 'auto', marginBottom: '30px'}} variant='h6'>
          Total Price: {totalPrice}$
        </Typography>
      </Drawer>
    </div>
  );
}

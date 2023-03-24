import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, Container} from '@mui/system';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {addToCart, removeFromCart} from '../store/reducers/cart';
import ButtonGroup from '@mui/material/ButtonGroup';

type MediaCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const ButtonAddToCart = (handleClickAdd: () => void) => (
  <Button size='small' onClick={handleClickAdd}>
    Add to cart
  </Button>
);

export default function MediaCard({id, name, price, imgUrl}: MediaCardProps) {
  let [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  let amountInCard = useAppSelector<number>((state) => {
    let cardInStore = state.cart.find((elem) => elem.id == id);
    if (cardInStore) {
      return cardInStore.amount;
    }
    return 0;
  });
  function handleClickAdd() {
    setIsAddedToCart(true);
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  }
  function handleClickRemove() {
    if (amountInCard == 1) {
      setIsAddedToCart(false);
    }
    dispatch(removeFromCart(name));
  }
  return (
    <Card sx={{maxWidth: 285}}>
      <CardMedia sx={{height: 140}} image={imgUrl} title={name} />
      <CardContent>
        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='subtitle1'>{price}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Container sx={{display: 'flex', justifyContent: 'center', height: '40px'}}>
          {!isAddedToCart ? (
            ButtonAddToCart(handleClickAdd)
          ) : (
            <ButtonGroup variant='contained' aria-label='outlined primary button group'>
              <Button onClick={handleClickAdd}>+</Button>
              <Typography
                variant='body2'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '5px 20px',
                }}>
                {amountInCard}
              </Typography>
              <Button onClick={handleClickRemove}>-</Button>
            </ButtonGroup>
          )}
        </Container>
      </CardActions>
    </Card>
  );
}

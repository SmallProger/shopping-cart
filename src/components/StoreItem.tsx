import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, Container} from '@mui/system';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {addToCart, removeFromCart} from '../store/reducers/cart';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

type MediaCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  screen: string;
  videocard: string;
  CPU: string;
};

const ButtonAddToCart = (handleClickAdd: () => void) => (
  <Container sx={{height: 36}}>
    <Button size='small' onClick={handleClickAdd}>
      Add to cart
    </Button>
  </Container>
);

export default function StoreItem({id, name, price, imgUrl, screen, videocard, CPU}: MediaCardProps) {
  let [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let amountInCard = useAppSelector<number>((state) => {
    let cardInStore = state.cart.find((elem) => elem.id == id);
    if (cardInStore) {
      return cardInStore.amount;
    }
    return 0;
  });

  useEffect(() => {
    if (amountInCard > 0) {
      setIsAddedToCart(true);
    }
  }, []);

  function handleClickCardMedia() {
    navigate('/about/' + id);
  }

  function handleClickAdd() {
    setIsAddedToCart(true);
    dispatch(
      addToCart({
        id,
        name,
        price,
        imgUrl,
      })
    );
  }

  function handleClickRemove() {
    if (amountInCard == 1) {
      setIsAddedToCart(false);
    }
    dispatch(removeFromCart(id));
  }

  return (
    <Card sx={{width: '100%', height: '300px', display: 'flex', justifyContent: 'space-between'}}>
      <CardMedia
        sx={{height: '100%', maxWidth: 400, cursor: 'pointer', flexGrow: 1, backgroundSize: 'contain'}}
        image={imgUrl}
        title={name}
        onClick={() => handleClickCardMedia()}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        }}>
        <Typography gutterBottom variant='h6' component='div'>
          {name}
        </Typography>
        <List sx={{gap: '5px'}}>
          <ListItem>Процессор:{CPU}</ListItem>
          <ListItem>Видеокарта:{videocard}</ListItem>
          <ListItem>Экран:{screen}</ListItem>
        </List>
      </CardContent>
      <CardActions sx={{width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>
        <Typography variant='body1'>{price} руб</Typography>
        {!isAddedToCart ? (
          ButtonAddToCart(handleClickAdd)
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '20px',
              height: '36px',
            }}>
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
          </Box>
        )}
      </CardActions>
    </Card>
  );
}

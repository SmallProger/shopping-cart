import {Container, Box, Typography} from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

type NewsCardProps = {
  name: string;
  description: string;
  imgUrl: string;
  id: number;
};

const cardContentStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: '1000',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const boxShadowStyle = {
  zIndex: '999',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  left: '50%',
  top: '50%',
  width: '100%',
  background: '#fff',
  height: '100%',
  opacity: '0.5',
};

export default function NewsCard({name, description, imgUrl, id}: NewsCardProps, indexList: number) {
  if (!(indexList % 4 == 0 || indexList % 4 == 3)) {
    return (
      <Card sx={{width: '100%', height: '100%', position: 'relative'}}>
        <Box sx={boxShadowStyle}></Box>
        <CardContent sx={cardContentStyle}>
          <Typography variant='h6'>{name}</Typography>
        </CardContent>
        <CardMedia title={name} sx={{width: '100%', height: '100%'}} image={imgUrl} />
      </Card>
    );
  }
  return (
    <Card sx={{display: 'flex', justifyContent: 'space-between'}}>
      <CardMedia title={name} sx={{width: 250, height: 300}} image={imgUrl} />
      <CardContent>
        <Typography>
          {description}
          {id}
        </Typography>
      </CardContent>
    </Card>
  );
}

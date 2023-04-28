import NewsCard from '../components/NewsCard';
import news from '../data/News.json';
import type NewsCardProps from '../components/NewsCard';
import Container from '@mui/material/Container/Container';
import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import {ReactNode} from 'react';
import Divider from '@mui/material/Divider/Divider';
const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function News() {
  return (
    <Paper sx={{padding: '40px'}}>
      <Grid container spacing={2} sx={{width: '100%'}} columns={3} rowSpacing={5}>
        {news.map((elem, index) => (
          <Grid item xs={index % 4 === 0 || index % 4 === 3 ? 2 : 1}>
            {NewsCard(elem, index)}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export {News};

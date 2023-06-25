import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './CategoryCard.css'

export default function CategoryCard(props) {
  return (
    <div className='card-div'>
    <p className='card-title'>{props.title.toUpperCase()}</p>
    <Card sx={{ maxWidth: 350, width: 500 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.img}
        />
    </Card>
    </div>
  );
}
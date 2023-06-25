import * as React from 'react';
import { Grid } from '@mui/material';
import CategoryCard from '../CategoryCard/CategoryCard';
import "./Categories.css"

export default function Categories() {

  const cardInfo = [{
    title: "Kids",
    description: ["Check out the latest shoes for your kid"],
    img: "https://www.rei.com/dam/van_dragt_092518_0150_kids_shoes_hero_lg.jpg?t=ea16by9lg"
  },
  {
    title: "Men",
    description: ["Never get out of fashion with this new drop"],
    img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/mens-shoes-v2-tcc_tcm221-909628.png"
  },
  {
    title: "Women",
    description: ["You'll just love those, trust me"],
    img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/womens-shoes-tcc_tcm221-909483.png"
  }
  ]

  return (
    <Grid container className='categories-div'
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={1}
      sx={{
        mt: -2,
        borderRadius: 2,
      }}>
      {cardInfo.map((card, idx) => {
        return (
          <Grid item>
            <CategoryCard
              key={idx}
              title={card.title}
              desc={card.description}
              img={card.img}
            />
          </Grid>
        )
      })}
    </Grid>
  );
}
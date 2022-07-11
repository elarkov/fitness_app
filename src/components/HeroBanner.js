import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';



const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="25px">
        FitnessClub
      </Typography>
      <Typography fontWeight={700}
        sx={{
          fontSize: {lg: '44px', xs: '40px'}
        }}
        mb="23px"
        mt="30px"
      >
        Потей, Улыбайся<br/> и Повторяй
      </Typography>
      <Typography 
        fontSize="22px" 
        lineHeight="35px" 
        mb={4}
      >
        Попробуй большинство эффективных упражнений
      </Typography>
      <Button 
      href="#exercises" 
      variant="contained" 
      color="error"
      sx={{backgroundColor: '#ff2625', padding: '10px'}}
      >Изучить упражнения</Button>
      <Typography 
      fontWeight={600} 
      color="#ff2625"
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      mt={11}
      fontSize="200px"
      >
        Тренируйся
      </Typography>
      <img src={HeroBannerImage} alt="" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
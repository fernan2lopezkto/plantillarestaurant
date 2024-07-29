import { Container, Typography, Grid } from "@mui/material"

//import bgImage from '../assets/bg1.webp';
import background from '../assets/bg1.webp';

import useTheme from "@mui/material/styles/useTheme"

function Footer() {

  const theme = useTheme();

  return (
    <Container pt={2}
    sx={{
      minHeight: '20vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }} >
        <Grid container justifyContent="center" alignItems='center' spacing={6} >
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h2" component="h1" textAlign="center">
              Bienbenidos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="p" textAlign="center">
              A El Rincón del Sabor
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="p" component="p" textAlign="center">
            Un lugar donde la pasión por la gastronomía se encuentra con el mejor servicio. Desde [año de fundación], hemos sido el destino favorito para los amantes de la buena comida, ofreciendo una experiencia culinaria inolvidable en un ambiente acogedor
            </Typography>
          </Grid>
        </Grid>
    </Container>
  )
}
export default Footer
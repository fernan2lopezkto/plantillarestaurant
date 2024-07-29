import { Container, Typography, Grid } from "@mui/material"

//import bgImage from '../assets/bg1.webp';
import background from '../assets/bg1.webp';

function Home() {

  return (

    <Container 
    sx={{
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#222222'
    }} >
        <Grid container justifyContent="center" alignItems='center' spacing={4} >
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" textAlign="center">
              Bienbenidos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="p" textAlign="center">
              A El Rincón del Sabor
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" component="p" textAlign="center">
            Un lugar donde la pasión por la gastronomía se encuentra con el mejor servicio. Desde [año de fundación], hemos sido el destino favorito para los amantes de la buena comida, ofreciendo una experiencia culinaria inolvidable en un ambiente acogedor
            </Typography>
          </Grid>
        </Grid>
    </Container>

  )
}
export default Home
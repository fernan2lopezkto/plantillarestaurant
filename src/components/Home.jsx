import { Container, Typography, Grid } from "@mui/material"


function Home() {
  return (
    <Container 
    sx={{
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
        <Grid container justifyContent="center" alignItems='center' spacing={4} >
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" textAlign="center">
              Bienbenidos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="p" textAlign="center">
              A El Rincón del Sabor
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography Variant="p" Componennt="p" textAlign="center">
            Un lugar donde la pasión por la gastronomía se encuentra con el mejor servicio. Desde [año de fundación], hemos sido el destino favorito para los amantes de la buena comida, ofreciendo una experiencia culinaria inolvidable en un ambiente acogedor
            </Typography>
          </Grid>
        </Grid>
    </Container>
  )
}
export default Home
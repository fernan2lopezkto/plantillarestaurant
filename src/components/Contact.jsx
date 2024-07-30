import { Container, Typography, Grid, Box, Button } from "@mui/material"

import AndroidIcon from "@mui/icons-material/Android";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";

import useTheme from "@mui/material/styles/useTheme"

import logoPrincipal from '../assets/restIcon.svg';





function Contact() {

  const theme = useTheme();

  return (
    <Container pt={2} id="contacto"
    sx={{
      minHeight: '10vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }} >
        <Grid container justifyContent="center" alignItems='center' spacing={6} pt={6} >
          <Grid item xs={12} sm={6} md={4} sx={{textAlign: 'center'}}>
            <Typography mb={2}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }} >
            <AndroidIcon sx={{ display: { xs: 'flex' }, fontSize: 50, mr: 1 }} />
            <Instagram sx={{ display: { xs: 'flex' }, fontSize: 50, mr: 1 }} />
            <Facebook sx={{ display: { xs: 'flex' }, fontSize: 50, mr: 1 }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Box justifyContent="center" sx={{ display: { xs: 'flex' }, height: 200, mr: 1 }}>
                <img src={logoPrincipal} className="logo" alt="Vite logo" />
              </Box>
            <Typography variant="h6" component="p" textAlign="center">
              El Rincón del Sabor
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="p" component="p" textAlign="center">
              njuy
            </Typography>
          </Grid>
        </Grid>
    </Container>
  )
}
export default Contact
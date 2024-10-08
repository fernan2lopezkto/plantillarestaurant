import { Container, Typography, Grid } from "@mui/material";

import { motion } from "framer-motion";


import fondo from "../assets/img/fondos/fondo1.webp";
import Stack from "@mui/material/Stack";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#222444",
      }}
    >
      <Stack sx={{ width: "100%" }} spacing={2}>
      </Stack>
      <div style={{ backgroundColor: "rgba(200, 240, 200, 0.5)" }}>
        <Container
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //backgroundColor: 'rgba(200,200,200,0.8)'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
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
                  Un lugar donde la pasión por la gastronomía se encuentra con
                  el mejor servicio. Desde [año de fundación], hemos sido el
                  destino favorito para los amantes de la buena comida,
                  ofreciendo una experiencia culinaria inolvidable en un
                  ambiente acogedor
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
export default Home;

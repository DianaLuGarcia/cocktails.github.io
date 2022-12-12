import logo from "./logo.svg";
import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  ThemeProvider,
} from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import MoodIcon from "@mui/icons-material/Mood";
import Link from "@mui/material/Link";
import { ClassNames } from "@emotion/react";
import useStyles from "./components/styles";
import { createTheme, makeStyles } from "@material-ui/core/styles";

import Footer from "./components/Footer";
import CocktailGrid from "./components/CocktailGrid";

const theme = createTheme();

function App() {
  const classes = useStyles(theme);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {" "}
        <AppBar color='info' position='relative'>
          <Toolbar>
            <LocalBarIcon className={classes.icon} />
            <Link underline='hover' color='inherit' href='#'>
              Home
            </Link>
            <Link
              underline='hover'
              color='inherit'
              to='/Browse'
              variant='H6'
              margin='10px'
            >
              Browse
            </Link>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm' style={{ marginTop: "100px" }}>
              <Typography
                variant='h2'
                align='center'
                color='textPrimary'
                id='heading'
                gutterBottom
              >
                Happy Hour
              </Typography>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                id='headingParagraph'
                paragraph
              >
                The best hour is always happy hour. Find easy and unique recipes
                to create your favorite cocktails!{" "}
              </Typography>
              <div className={classes.button}>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      Popular Cocktails
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<MoodIcon />}
                    >
                      I'm feeling lucky
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <Container></Container>
              <CocktailGrid />
              <Footer />
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

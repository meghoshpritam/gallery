import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Viewer from 'react-viewer';
import Card, { CardI } from '../components/Card';

import img1 from '../assets/images/1.jpg';
import img4 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img2 from '../assets/images/4.jpg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [
  {
    id: 0,
    img: img1,
    title: '3D effect editing . Done for social media .',
    description:
      'The breakpoints are used internally in various components to make them responsive, but you can also take ',
  },
  {
    id: 1,
    img: img2,
    title: 'Change the background into something that looks professional',
    description:
      'The breakpoints are used internally in various components to make them responsive, but you can also take ',
  },
  {
    id: 2,
    img: img3,
    title: 'Highlight the important things.(Things I learned at start)',
    description:
      'The breakpoints are used internally in various components to make them responsive, but you can also take ',
  },
  {
    id: 3,
    img: img4,
    title: 'Though unnatural but looks magical',
    description:
      'The breakpoints are used internally in various components to make them responsive, but you can also take ',
  },
];

const images = [
  { src: img1, alt: '3D effect editing . Done for social media .', downloadUrl: '' },
  {
    src: img2,
    alt: 'Change the background into something that looks professional',
    downloadUrl: '',
  },
  { src: img3, alt: 'Highlight the important things.(Things I learned at start)', downloadUrl: '' },
  { src: img4, alt: 'Though unnatural but looks magical', downloadUrl: '' },
];

export default () => {
  const classes = useStyles();

  const [state, setState] = useState<{ view: boolean; id: number | undefined }>({
    view: false,
    id: undefined,
  });

  const clickHandler = (id: number) => {
    setState({ view: true, id });
  };

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My works
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Phots are awesome, they tell us thousands of lines within a fraction of second. Images
              with an editors touch make it more beautiful, that why I give a try to improve the
              inner beauty of the photos
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/#photos">
                    Check them out
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="/">
                    Contact me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <div id="photos">
            <Grid container spacing={4}>
              {cards.map((card: CardI) => (
                <Grid item key={card.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card
                    id={card.id}
                    img={card.img}
                    title={card.title}
                    description={card.description}
                    clickHandler={clickHandler}
                  />
                </Grid>
              ))}
            </Grid>
            {state.view && (
              <div>
                <Viewer
                  visible={state.view}
                  images={images}
                  onClose={() => {
                    setState({ ...state, view: false });
                  }}
                  activeIndex={state.id}
                />
              </div>
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export interface CardI {
  id: number;
  img: string;
  title: string;
  description?: string;
}

interface CardInput extends CardI {
  clickHandler: (id: number) => void;
}

export default ({ img, title, description, id, clickHandler }: CardInput) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={() => clickHandler(id)}>
      <CardMedia className={classes.cardMedia} image={img} title={title} />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="body1" component="h3">
          {title}
        </Typography>
        {/* <Typography>{description}</Typography> */}
      </CardContent>
    </Card>
  );
};

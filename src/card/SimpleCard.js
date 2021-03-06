import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(prueba) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log("<<<" , prueba)
  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h1">
          {prueba.prueba.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {prueba.prueba.status} - {new Date(prueba.prueba.dueDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {prueba.prueba.responsible.name}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export const accordionsTestId = 'accordionsTestId'

export const AccordionList = ({data}: {
  data: any[]
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} data-testid="accordionsTestId">
     {data.map((item: any) =>  <Accordion  onChange={handleChange(item.url)}
     style={{padding: 10}}
     >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} color="primary">{item.title}</Typography>
          {/* <Typography className={classes.secondaryHeading}>{item.gender}</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
       <Container >
       <Typography variant="body2" color="textSecondary" component="p">
         Title: {item.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Genre: {item.genre}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        CreatedAt: {item.createdAt}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Shelf: {item.shelf.name}
        </Typography>
       </Container>
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
}
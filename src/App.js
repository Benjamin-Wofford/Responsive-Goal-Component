import React from "react";
import "./styles.css";
import {
  Container,
  Typography,
  Paper,
  makeStyles,
  Avatar,
  Grid
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ChatIcon from "@material-ui/icons/Chat";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "auto"
  },
  actionButtons: {
    marginTop: "3vh"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container>
      <Paper>
        <Grid
          className={classes.paper}
          spacing={1}
          container
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <Avatar />
            <Typography variant="caption">Benjamin World</Typography>
          </Grid>
          <Grid container item direction="column" xs={9}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              quam lorem, malesuada sed sapien non.
            </Typography>
            <Grid item className={classes.actionButtons}>
              <ThumbUpAltIcon />
              <ThumbDownAltIcon />
              <ChatIcon />
              <DoneIcon />
              <DeleteIcon />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

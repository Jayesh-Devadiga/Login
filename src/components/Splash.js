import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action";
import { LOGOUT } from "../redux/action/types";

const useStyles = makeStyles((theme) => ({
  splash: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Splash = ({ username, logout }) => {
  const user = useSelector((state) => state.users.user);
  console.log(user);
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.splash}>
      <Typography style={{ marginBottom: "20px" }} variant="h3">
        Welcome
      </Typography>
      <Typography style={{ marginBottom: "40px" }} variant="h4">
        {username}
      </Typography>
      <Button onClick={logout} fullWidth variant="contained" color="secondary">
        Logout
        <ExitToApp color="primary" />
      </Button>
    </Container>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    username: users.user.username,
  };
};

export default connect(mapStateToProps, { logout })(Splash);

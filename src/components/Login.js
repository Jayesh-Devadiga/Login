import { Avatar, Button, Container, CssBaseline, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1, 0),
    background: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
  submit: {
    margin: theme.spacing(5, 0),
  },
}));

const Login = ({ users, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.filter((u) => u.username === username);
    console.log(user);
    if (user.length === 0) {
      setErrors({ usernameError: "Username not found" });
    } else {
      if (user[0].password !== password) {
        setErrors({ passwordError: "Password is incorrect" });
      } else {
        login(user[0]);
        setErrors({});
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            error={!!errors.usernameError}
            variant="outlined"
            margin="normal"
            required
            label="Email Address"
            fullWidth
            name="username"
            autoFocus
            autoComplete=""
            value={username}
            helperText={errors.usernameError && `${errors.usernameError}`}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            error={!!errors.passwordError}
            helperText={errors.passwordError && `${errors.passwordError}`}
            variant="outlined"
            margin="normal"
            required
            label="Password"
            fullWidth
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: users.users,
  };
};

export default connect(mapStateToProps, { login })(Login);

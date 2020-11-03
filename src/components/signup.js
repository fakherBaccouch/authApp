import React, {  useRef, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import L from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
    const history = useHistory()

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signup } = useAuth()

  const [error, setError] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
    

      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/orders")

    } catch {
      setError("Failed to create an account")
    }


  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={(event) => handleSubmit(event)} className={classes.form} noValidate>
         
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={passwordRef}
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                label="passwordConfirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="passwordConfirmation"
                inputRef={passwordConfirmationRef}
              />
            </Grid>
            
    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up &amp; Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <L href="#" variant="body2">
              <Link to='/signin'> Already have an account? Sign in</Link> 
              </L>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
  
      </Box>
    </Container>
  );
}

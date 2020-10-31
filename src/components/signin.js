import React, { useEffect, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import  L from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuth } from "../context/AuthContext"
import LinearIndeterminate from '../spinner.js'


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  const {login} =useAuth()
  const [Loading,setLoading] = useState(Boolean)
   
  useEffect(() => {
    setLoading(!Loading)
  }, [])
  const  handleSubmit=async (e)=> {
    e.preventDefault()
    
    try {
      await login(emailRef.current.value, passwordRef.current.value)
     history.push("/orders")
   
    } catch {
     
     
    }
  }

  const classes = useStyles();

  if(!Loading ){
    return <div><LinearIndeterminate/></div>
}
else{return <div><Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
  <Avatar className={classes.avatar}>
    <LockOutlinedIcon />
  </Avatar>
  <Typography component="h1" variant="h5">
    Sign in
  </Typography>
  <form  onSubmit={handleSubmit} className={classes.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      inputRef={emailRef}
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    ></TextField>
  <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      inputRef={passwordRef}
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Sign In
    </Button>
    <Grid container>
      
      <Grid item>
        <L href="#" variant="body2">
         <Link to='/signup'>"Don't have an account? Sign Up"</Link>
        </L>
      </Grid>
    </Grid>
  </form>
</div>
<Box mt={8}>
  
</Box>
</Container></div>}
}







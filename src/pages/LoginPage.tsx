// import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";


// function LoginPage() {
//     const history = useHistory();

//     const [inputs, setInputs] = useState({
//         username: '',
//         password: '' 
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const { username, password } = inputs;




//     function handleChange(e:any) {
//         const { name, value } = e.target;
//         setInputs(inputs => ({ ...inputs, [name]: value }));
//     }

//     function handleSubmit(e: any) {
//         e.preventDefault();

//         setSubmitted(true);
//         if (username == "admin" && password == "admin") {
//             console.log('login success');
//             history.push("/home");
//         } else {
//             alert('invalid credentials')
//         }
//     }

//     return (
//         <div className="dis-flx">
//             <div className="test">
//                 <img src="data:image/png;base64,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" alt="logo" />
//             </div>
//             <h2>Login</h2>
//             <form name="form" className="login-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Username : </label>
//                     <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
//                     {submitted && !username &&
//                         <div className="invalid-feedback">Username is required</div>
//                     }
//                 </div>
//                 <div className="form-group">
//                     <label>Password : </label>
//                     <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
//                     {submitted && !password &&
//                         <div className="invalid-feedback">Password is required</div>
//                     }
//                 </div>
//                 <div className="form-group">
//                     <button className="btn my-btn btn-primary">
//                         Login
//                     </button>
//                     {/* <Link to="/register" className="btn btn-link">Register</Link> */}
//                 </div>
//             </form>
//             <div className="login-info"> 
//                 <p> Username : admin </p>
//                 <p> Password : admin </p>
//             </div>
//         </div>
//     );
// }

// export {LoginPage}


import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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

export function LoginPage() {
    const history = useHistory();
    const classes = useStyles();
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const handleLogin = () => {
                    if (email == "admin" && pwd == "admin") {
                        history.push("/dashboard");
                    } else {
                        alert('invalid credentials')
                    }
    }
    return (
        <Grid container component="main" className={classes.root + " login"}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            autoComplete="email"
                            autoFocus
                            onChange={e=>setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={pwd}
                            onChange={e=>setPwd(e.target.value)}

                            
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                            className={classes.submit}
                        >
                             Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField, IconButton, InputAdornment
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;
  const [showSnackBar, setShowSnackBar] = useState(false)
  const classes = useStyles();
  const [values, setValues] = useState({
    fname: "",
    lname: '',
    email: '',
    pwd: '',
    id: ''
  });
  let usr: any;
  useEffect(() => {
    usr = localStorage.getItem('loggedinUser')
    usr = JSON.parse(usr)
    setValues({
      fname: usr.fname,
      lname: usr.lname,
      email: usr.email,
      pwd: usr.pwd,
      id: usr.id
    });
  }, [])
  // const [loggedinUser, setLoggedinUser] = useState<any>()

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const updateUserInfo = () => {
    // console.log(values);
    let allUsrs: any = JSON.parse(localStorage.getItem('users'));
    // console.log(allUsrs);
    let usrIndex = allUsrs.findIndex(user => user.id === values.id)
    // console.log(usrIndex);
    allUsrs[usrIndex] = { ...values }
    localStorage.setItem("loggedinUser",JSON.stringify(values))
    localStorage.setItem('users', JSON.stringify(allUsrs))
    // alert('Details Updated succefully')
    setShowSnackBar(true)
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={e => (setShowSnackBar(false))}
        message="User Details Updated Successfully!!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={e => (setShowSnackBar(false))}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />


      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="fname"
                onChange={handleChange}
                required
                value={values.fname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lname"
                onChange={handleChange}
                required
                value={values.lname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                // onChange={handleChange}
                required
                disabled
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Password"
                margin="dense"
                name="pwd"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                value={values.pwd}
                variant="outlined"
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                margin="dense"
                name="state"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={updateUserInfo}
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

// AccountDetails.propTypes = {
//   className: PropTypes.string
// };

export default AccountDetails;
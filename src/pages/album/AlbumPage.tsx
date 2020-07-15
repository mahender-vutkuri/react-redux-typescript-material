import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        position: 'relative',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
    const classes = useStyles();
    const [users,setUsers] = useState<any[]>([]);
   

    useEffect(() => {
        let localUsers: any = localStorage.getItem('users')
        localUsers = JSON.parse(localUsers)
        setUsers(localUsers)
    }, []);

    const deleteUser = (u, i) => {
        console.log(u);
        console.log(i);
        if (window.confirm("Are you sure, you want to delete the user?")) {
            let tempUsers = [...users]
            tempUsers.splice(i,1)
            setUsers(tempUsers)
            localStorage.setItem("users", JSON.stringify(tempUsers))
            alert('User deleted succesfully.')
        }
    }
    return (
        <React.Fragment>
            <main className="auto-height all-users">
                {/* <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
                            This is the registered users list with some random profile images from <a href="https://source.unsplash.com/" target="_blank" >here</a>
                        </Typography>
                    </Container>
                </div> */}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {users.map((user:any,index) => (
                            <Grid item key={user.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title">
                                        <div className="user-avatar">
                                        <span className="user-avatar-inner">
                                        {user.fname.substring(0,1)}  {user.lname.substring(0,1)}
                                        </span>
                                        </div>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                           {user.fname}  {user.lname}
                                        </Typography>
                                        <Typography className="ellipsis" title={user.email}>
                                            {user.email}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View User
                                        </Button>
                                        <Button onClick={e=>deleteUser(user,index)} size="small" color="primary">
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
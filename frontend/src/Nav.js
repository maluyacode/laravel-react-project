import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Backdrop,
    CircularProgress,
} from '@mui/material'
import axios from 'axios'

const Nav = () => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setCredentials({ ...credentials, [name]: event.target.value })
    }

    const { email, password } = credentials;

    const handelSubmit = () => {
        handleClose()
        setLoading(true)
        axios.post('http://localhost:8000/api/login', { email, password })
            .then(response => {
                setCredentials({ ...credentials, email: '', password: '' })
                setLoading(false)
                navigate('/')
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-info sticky-top'>
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText" style={{ justifyContent: 'space-between', marginRight: '20px' }}>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link d-flex' to="/"> <span className='h5 font-weight-normal'>Home</span> </Link>
                        </li>
                        <li className='nav-item d-flex'>
                            <Link className='nav-link' to="/create"><span className='h5 font-weight-normal'>Create</span></Link>
                        </li>
                        {/* <li className='nav-item d-flex justify-content-center'>

                        </li> */}
                    </ul>
                    <Button color='secondary' onClick={handleClickOpen}>
                        Login
                    </Button>
                </div>
            </nav>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* Login to login */}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleChange('email')}
                        value={email}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={handleChange('password')}
                        value={password}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handelSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Nav
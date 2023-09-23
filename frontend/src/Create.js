import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'
import axios from 'axios';


const Create = () => {

    const navigate = useNavigate();

    const styles = {
        width: "50%",
        // minWidth: "400px"
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, content, user)

        axios
            .post('http://localhost:8000/api/post', state)
            .then((res) => {
                console.log(res.data);
                setState({
                    title: '',
                    content: '',
                    user: '',
                    slug: "",
                })
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [state, setState] = useState({
        title: '',
        content: '',
        user: '',
        slug: '',
    });

    const { title, content, user, slug } = state;

    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    }


    return (
        <>
            <Nav />
            <div className="container p-xxl-5 p-sm-5" style={styles}>
                <h1 style={{ textAlign: "center" }}> Create</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='text-muted'>Title</label>
                        <input type='text'
                            className='form-control'
                            value={title}
                            onChange={handleChange('title')}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Content</label>
                        <textarea type='text' rows={5}
                            className='form-control'
                            value={content}
                            onChange={handleChange('content')}
                        > </textarea>
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Slug</label>
                        <input type='text'
                            className='form-control'
                            value={slug}
                            onChange={handleChange('slug')}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>User</label>
                        <input type='text'
                            className='form-control'
                            value={user}
                            onChange={handleChange('user')}
                        />
                    </div>
                    <button style={{ marginTop: "20px" }} type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div >
            <Footer />
        </>
    )
}

export default Create
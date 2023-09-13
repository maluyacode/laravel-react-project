import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useParams } from 'react-router'
import axios from 'axios'

const Edit = () => {

    const { id } = useParams()

    const styles = {
        width: "50%",
        // minWidth: "400px"
    }

    const [state, setState] = useState({
        title: '',
        content: '',
        user: '',
        slug: '',
    });

    const { title, content, user, slug } = state;

    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/post/${id}/edit`)
            .then((res) => {
                console.log(res.data);
                setState({
                    title: res.data.post.title,
                    content: res.data.post.content,
                    user: res.data.post.user_id,
                    slug: res.data.post.slug,
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/post/${id}`, state)
            .then((res) => {
                console.log(res.data);
                setState({
                    title: '',
                    content: '',
                    user: '',
                    slug: "",
                })
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }

    return (
        <>
            <Nav />
            <div className="container p-xxl-5 p-sm-5" style={styles}>
                <h1 style={{ textAlign: "center" }}>Edit</h1>
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

export default Edit
import React, { useState } from 'react'
import Nav from './Nav';
const Create = () => {

    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''
    });
    const { title, content, user } = state;
    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    }
    return (
        <>
            <Nav />
            < div className="container-fluid">
                <div>Create</div>
                <form>
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
                        <textarea type='text'
                            className='form-control'
                            value={content}
                            onChange={handleChange('content')}
                        > </textarea>
                    </div>
                    <div className='form-group'>
                        <label className='text-mute'>User</label>
                        <input type='text'
                            className='form-control'
                            value={user}
                            onChange={handleChange('user')}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create
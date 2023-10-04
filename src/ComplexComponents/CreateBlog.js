import React, { useState } from 'react';

export default function CreateBlog() {
    const [description, setDescription] = useState("")
    const [Title, setTitle] = useState("")
    const createBlog = () => {

    }

    const handleChange = (e) => {

    }
    return (
        <div>
            <h2>Create Blog</h2>
            <div>
                <input value={description} onChange={(e) => handleChange(e)} placeholder='Enter title' type="text" id="title" name="title" /><br />
                <textarea value={Title} onChange={(e) => handleChange(e)} placeholder='Enter description' id="description" name="description" /><br />
                <select name="category" id="category">
                    <option value="select">select category</option>
                    <option value="news">news</option>
                    <option value="sports">sports</option>
                    <option value="blog">blog</option>
                    <option value="technology">technology</option>
                </select><br />
                <button onClick={() => createBlog()}>Create</button>
            </div>
        </div>
    );
}
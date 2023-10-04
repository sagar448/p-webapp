import React from 'react';
import BlogList from "../Components/BlogList"
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
    let nav = useNavigate()

    const blogs = [
        {
            id: 1,
            title: "new blog",
            description: "test blog",
            category: "post"
        },
        {
            id: 2,
            title: "new blog 1",
            description: "test blog 1",
            category: "news"
        },
        {
            id: 1,
            title: "new blog 2",
            description: "test blog 2",
            category: "sports"
        }
    ]
    const goToCreate = () => {
        nav(`/add`)
    }
    return (
        <div>
            <h1>Blogs</h1>
            <button style={{ textAlign: "left" }} onClick={() => goToCreate()}>Create Blog</button>
            <div style={{ textAlign: "center" }}>
                <BlogList blogs={blogs} />
            </div>

        </div>
    )
}
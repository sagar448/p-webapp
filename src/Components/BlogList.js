import React from "react"
import { useNavigate } from 'react-router-dom';
import {
    useQuery,
    gql
} from "@apollo/client";
export default function BlogList(props) {
    let { blogs } = props;
    const Blogs = gql`
    query blogs {
        id
        description
        category
    }
  `

    const Blog = gql`
    query blog($id: Int!) {
        blog (id: $id){
            id
            description
            category
        }
    }
  `
    const { loading, error, data } = useQuery(Blogs);
    let nav = useNavigate()

    const goToDetails = (id) => {
        nav(`/${id}`)
    }

    // if (loading) return <p>Loading Blogs..</p>;
    // if (error) return <p>Error loading Blogs!</p>;

    return (
        <>
            {
                blogs.map((each, index) => {
                    return (
                        <div style={{
                            border: ".5px solid #ccc", padding: "20px", textAlign: "left", width: "70%", margin: "10px", cursor: "pointer"
                        }} key={`${index + each.id}`} onClick={() => goToDetails(each.id)}>
                            <h5>{each.title}</h5 >
                            <p>{each.description}</p>
                            <p style={{ color: "#000", backgroundColor: "#ddd", padding: "10px", width: "40px" }}>{each.category}</p>
                        </div >
                    )

                })
            }
        </>
    )
}
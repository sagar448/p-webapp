import React from "react"
import { useParams } from "react-router-dom";
import mydata from "../data.json"

export default function BlogDetails(props) {
    const params = useParams();
    let { id } = params;
    let details = mydata.data.filter(r => r.id == id)

    return (
        <div style={{
            border: ".5px solid #ccc", padding: "20px", textAlign: "left", width: "70%", margin: "10px"
        }}>
            <h5>{details[0].title}</h5>
            <p>{details[0].description}</p>
            <p style={{ color: "#000", backgroundColor: "#ddd", padding: "10px", width: "40px" }}>{details[0].category}</p>
        </div>
    )

}
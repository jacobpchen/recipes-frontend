import React, { useState } from "react";
import styled from 'styled-components'

import "./Post.css";
import Query from "../components/Query";
import CATEGORIES_QUERY from "../Queries/categories";

let arr = []

const Post = () => {

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [file, setFile] = useState(null)

    console.log("file", file)
    console.log("arr", arr)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('data', JSON.stringify({ title, ingredients, instructions, categories: arr }))
        formData.append('files.image', file)
        const response = await fetch("http://localhost:1337/recipes", {
            method: 'POST',
            body: formData

        })
        const data = await response.json()
        console.log("data", data)
    }

    return (
        <div className="post uk-container uk-align-center">
            <Pheading>Post a new recipe</Pheading>
            <br></br>

            <form>
                <div className="post-subheaders">Title:</div>
                <input value={title} onChange={(event) => {
                    setTitle(event.target.value)
                }} />
                <br></br>
                <input type="file" onChange={(event) => setFile(event.target.files[0])} />
                <br></br>
                <label>Category: </label>
                <Query query={CATEGORIES_QUERY} id={null} >
                    {({ data: { categories } }) => {
                        return (
                            categories.map((category, i) => {

                                return (
                                    <div>
                                        <input type="checkbox" id="categories" value={category.id}
                                            onChange={(event) => {
                                                console.log(event.target.value)
                                                console.log(arr)
                                                if (event.target.checked) {
                                                    for (let i = 0; i < categories.length; i++) {
                                                        if (event.target.value === categories[i].id) {
                                                            arr.push(categories[i])
                                                        }
                                                    }
                                                } else {
                                                    for (let i = 0; i < arr.length; i++) {
                                                        if (event.target.value === arr[i].id) {
                                                            arr.splice(i, 1);
                                                        }
                                                    }
                                                }
                                            }}
                                        />
                                        <label htmlFor="categories" >{category.name} </label>
                                    </div>
                                )
                            })
                        )
                    }}
                </Query>
                <br></br>
                <div className="post-subheaders">Instructions:</div>
                <textarea className="recipe-textbox" value={instructions} onChange={(event) => {
                    setInstructions(event.target.value)
                }} />
                <div className="post-subheaders">Ingredients:</div>
                <textarea className="recipe-textbox" value={ingredients} onChange={(event) => {
                    setIngredients(event.target.value)
                }} />

                <br></br>
                <button onClick={handleSubmit}>Share</button>
            </form>

            <form className="ukform"></form>








        </div>
    );
};

const Pheading = styled.p`
font-family: Staatliches;
    font-size: 50px;
`

export default Post;
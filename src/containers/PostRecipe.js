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
        alert("Successfully submitted recipe!")
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
            <form className="ukform">
                <div>
                    <p className="uk-margin-large-right uk-flex-center uk-text-large">
                        <Label>Title</Label></p>
                    <input
                        value={title}
                        className="uk-form-width-large textbox"
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }} />
                </div>
                <div>
                    <input type="file"
                        onChange={(event) => setFile(event.target.files[0])}
                        className="uk-margin-top"
                    />
                </div>
                <Label>Category</Label>
                <Query query={CATEGORIES_QUERY} id={null} >
                    {({ data: { categories } }) => {
                        return (
                            categories.map((category, i) => {
                                return (
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="categories"
                                            value={category.id}
                                            className="uk-checkbox uk-margin-small-right"
                                            onChange={(event) => {
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
                <Label>Ingredients:</Label>
                <textarea
                    className="uk-textarea recipe-textbox"
                    value={ingredients}
                    onChange={(event) => {
                        setIngredients(event.target.value)
                    }} />
                <div>
                    <Label>Instructions:</Label>
                    <textarea
                        className="uk-textarea recipe-textbox"
                        rows="5"
                        value={instructions}
                        onChange={(event) => {
                            setInstructions(event.target.value)
                        }} />
                </div>
                <button
                    className="submit-button uk-button-large uk-margin-bottom"
                    onClick={handleSubmit}>Share</button>
            </form>

        </div>
    );
};

const Pheading = styled.p`
font-family: Staatliches;
    font-size: 50px;
`

const Label = styled.p`
font-family: Staatliches;
    font-size: 20px;
`

export default Post;
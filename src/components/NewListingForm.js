import React, { useState } from 'react';

function NewListingForm({ addNewListing }) {
    const [formData, setFormData] = useState({
        "description": "",
        "image": "",
        "location": ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:6001/listings', configObj)
            .then(response => response.json())
            .then(data => addNewListing(data))
            .catch(error => console.log(error))
        setFormData({
            "description": "",
            "image": "",
            "location": ""
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Item description"></input>
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL"></input>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location"></input>
            <button type="submit">Add Listing</button>
        </form>
    )
}

export default NewListingForm
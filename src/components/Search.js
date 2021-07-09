import React, { useState } from "react";

function Search({ search, onSearch, submittedSearch, onSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(search)
        console.log(submittedSearch)
    }

    function handleChange(e) {
        onSearch(e.target.value) 
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search free stuff"
                value={search}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">🔍</button>
        </form>
    );
}

export default Search;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
    const [listings, setListings] = useState([]);
    const [search, setSearch] = useState("");
    const [submittedSearch, setSubmittedSearch] = useState("");
    const [sort, setSort] = useState("--")

    useEffect(() => {
        fetch('http://localhost:6001/listings')
            .then(response => response.json())
            .then(data => setListings(data))
            .catch(error => console.log(error))
    }, [])

    function deleteListing(id) {
        const newListingArray = listings.filter(listing => listing.id !== id);
        setListings(newListingArray);
    }

    function handleSearch(value) {
        setSearch(value)
    }

    function handleSearchSubmit(value) {
        setSubmittedSearch(value)
    }

    function handleSort(value) {
        setSort(value);
    }

    function addNewListing(value) {
        const newListingArray = [...listings, value];
        setListings(newListingArray);
    }

    return (
        <div className="app">
            <Header
                search={search}
                onSearch={handleSearch}
                submittedSearch={submittedSearch}
                onSubmit={handleSearchSubmit}
                sort={sort}
                onSort={handleSort}
            />
            <ListingsContainer
                listings={listings}
                searchTerm={submittedSearch}
                onDelete={deleteListing}
                sortedLocations={sort}
                addNewListing={addNewListing}
            />
        </div>
    );
}

export default App;

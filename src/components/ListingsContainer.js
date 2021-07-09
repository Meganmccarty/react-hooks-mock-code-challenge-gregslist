import React from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm";

function ListingsContainer({ listings, onDelete, searchTerm, sortedLocations, addNewListing }) {
    const listingsToDisplay = listings.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortedLocations === 'Sort Locations A-Z') {
                return a.location.toLowerCase().localeCompare(b.location.toLowerCase())
            } else if (sortedLocations === 'Sort Locations Z-A') {
                return b.location.toLowerCase().localeCompare(a.location.toLowerCase())
            } else {
                return listings
            }
        })
        .map((listing) => {
            return (
                <ListingCard
                    key={listing.id}
                    id={listing.id}
                    description={listing.description}
                    image={listing.image}
                    location={listing.location}
                    onDelete={onDelete}
                />
            )
        })

    return (
        <main>
            <NewListingForm addNewListing={addNewListing} />
            <ul className="cards">
                {listingsToDisplay}
            </ul>
        </main>
    );
}

export default ListingsContainer;

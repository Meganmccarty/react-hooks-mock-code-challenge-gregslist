import React from 'react';

function Filter({ sort, onSort }) {
    return (
        <select value={sort} onChange={(e) => onSort(e.target.value)}>
            <option>--</option>
            <option>Sort Locations A-Z</option>
            <option>Sort Locations Z-A</option>
        </select>
    )
}

export default Filter;
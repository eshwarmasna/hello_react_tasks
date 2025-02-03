import React, { useState } from 'react';
import dummy from './SrchClk'; // Assuming this is your data array

function SearchClick() {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(dummy);

    // Function to handle the search logic
    const handleSearch = () => {
        const res = dummy.filter((maps) =>
            maps.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(res);
    };

    return (
        <div className='Hello'>
            <main style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                <input
                    type="text"
                    style={{ width: "180px", padding: "10px", height: "30px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    type='button'
                    style={{ width: "200px", height: "30px" }}
                    onClick={handleSearch} // Corrected to call the function
                >
                    Search
                </button>
            </main>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {filteredData.map((item, index) => ( // Using filteredData to show results
                    <div
                        key={index}
                        style={{
                            border: "2px solid black",
                            width: "350px",
                            height: "350px",
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            padding: "10px"
                        }}
                    >
                        <div>{item.id}</div>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                        <div>{item.category}</div>
                        <div>{item.rating?.count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchClick;

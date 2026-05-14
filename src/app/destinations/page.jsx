import React from 'react';

const DestinationsPage = async () => {

    const res = await fetch("http://localhost:5000/destinations");
    const destinations = await res.json();
    console.log("Destinations:", destinations);
    return (
        <div>
            Destinations Page - List of all travel destinations will be displayed here.
        </div>
    );
};

export default DestinationsPage;
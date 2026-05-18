import React from 'react';

const DoctorsCard = ({ data }) => {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default DoctorsCard;
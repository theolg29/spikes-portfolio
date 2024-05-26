import React from 'react';

const Card = ({ title, description, className }) => {
    return (
        <div className={`card p-4 rounded-3xl ${className}`}>
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    );
};

export default Card;

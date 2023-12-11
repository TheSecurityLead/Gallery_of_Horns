/* eslint-disable react/prop-types */

import React, { useState } from 'react';

function Hornedbeast(props) {
    const [favorites, setFavorites] = useState(0);

    const handleFavorite = () => {
        setFavorites(favorites + 1);
    };

    return (
        <>
            <h2>{props.beast.title}</h2>
            <img src={props.beast.image_url} alt={props.beast.title} onClick={handleFavorite}></img>
            <p>{props.beast.description}</p>
            <p>
                <span onClick={handleFavorite} style={{cursor: 'pointer'}}>
                    ❤ {favorites}
                </span> Favorites
            </p>
        </>
    );
}

export default Hornedbeast;

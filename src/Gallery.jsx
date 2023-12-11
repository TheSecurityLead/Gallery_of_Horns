// import React from 'react';
import Hornedbeast from "./Hornedbeast";
import jsonData from "./data.json";

function Gallery() {
    const hornedBeasts = jsonData.map((beast) => (
        <Hornedbeast 
            key={beast._id} 
            beast={{ 
                title: beast.title, 
                image_url: beast.image_url, 
                description: beast.description 
            }} 
        />
    ));

    return (
        <div>
            {hornedBeasts}
        </div>
    );
}

export default Gallery;


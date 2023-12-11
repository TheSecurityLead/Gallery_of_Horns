import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; // Import PropTypes
import Hornedbeast from './Hornedbeast';


function Gallery({ beasts, onBeastClick }) {
    return (
        <div className="gallery">
            {beasts.map(beast => (
                <Hornedbeast 
                    key={beast._id}
                    beast={beast}
                    onClick={() => onBeastClick(beast)}
                />
            ))}
        </div>
    );
}


Gallery.propTypes = {
    beasts: PropTypes.array.isRequired, 
    onBeastClick: PropTypes.func.isRequired, 
};

export default Gallery;

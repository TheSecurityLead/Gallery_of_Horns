import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

function Hornedbeast({ beast, onClick }) {
    return (
        <div className="hornedbeast" onClick={onClick}>
            <h2>{beast.title}</h2>
            <img src={beast.image_url} alt={beast.title} />
            <p>{beast.description}</p>
            
        </div>
    );
}

// Define propTypes for Hornedbeast
Hornedbeast.propTypes = {
    beast: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
};

export default Hornedbeast;
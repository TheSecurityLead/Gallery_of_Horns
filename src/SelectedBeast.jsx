import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

function SelectedBeast({ beast, onClose }) {
  // Ensure beast is not null before rendering Modal
  if (!beast) return null;

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast.image_url} alt={beast.title} style={{ width: '100%' }} />
        <p>{beast.description}</p>
      </Modal.Body>
    </Modal>
  );
}

// Define propTypes for SelectedBeast
SelectedBeast.propTypes = {
  beast: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    description: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired
};

export default SelectedBeast;

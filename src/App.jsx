import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { Form } from 'react-bootstrap';
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeast';
import jsonData from './data.json';

function App() {
  const [selectedHorns, setSelectedHorns] = useState('all');
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleHornSelection = (event) => {
    setSelectedHorns(event.target.value);
  };

  const handleBeastSelection = (beast) => {
    setSelectedBeast(beast);
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  const filteredBeasts = selectedHorns === 'all'
    ? jsonData
    : jsonData.filter(beast => beast.horns === parseInt(selectedHorns, 10));

  return (
    <>
      <Form>
        <Form.Group controlId="hornFilter">
          <Form.Label>Filter by Number of Horns</Form.Label>
          <Form.Control as="select" onChange={handleHornSelection}>
            <option value="all">All</option>
            {/* Add other options based on the number of horns */}
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            {/* ... and so on */}
          </Form.Control>
        </Form.Group>
      </Form>
      <Gallery beasts={filteredBeasts} onBeastClick={handleBeastSelection} />
      <SelectedBeast beast={selectedBeast} onClose={handleCloseModal} />
    </>
  );
}

export default App;

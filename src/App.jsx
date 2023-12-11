import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeast';
import jsonData from './data.json'; // Import the JSON data

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelection = (beast) => {
    setSelectedBeast(beast);
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  return (
    <>
      <Gallery beasts={jsonData} onBeastClick={handleBeastSelection} />
      <SelectedBeast beast={selectedBeast} onClose={handleCloseModal} />
    </>
  );
}

export default App;
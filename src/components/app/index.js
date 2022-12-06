import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { getData } from '../../utils';
import { useParams } from 'react-router-dom';
import ArtistList from '../ArtistList';

function App() {

  const [rawData, setRawData] = useState([])

  const { id } = useParams();


  useEffect(() => {
    getData(id)
      .then(data => setRawData(data))
  }, [])


  return (
    <div className="App">
      { rawData.length > 0 ? <ArtistList data={rawData}/> : 'no data' }
    </div>
  );
}

export default App;

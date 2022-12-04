import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { getData } from '../../utils';
import { useParams } from 'react-router-dom';

function App() {

  const [rawData, setRawData] = useState([])

  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(id);
      console.log(data)
      setRawData(data);
   }
 
   fetchData();
  }, [])


  return (
    <div className="App">
     list here
    </div>
  );
}

export default App;

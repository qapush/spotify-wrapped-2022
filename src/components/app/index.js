import './App.css';
import data from '../../history.json';
import { useMemo, useState } from 'react';

function App() {
  
    const getDataArtists = (data) => {
    
    const dataArtists = [];
  
      for (let i = 0; i < data.length; i++) {

      if(data[i].msPlayed < 60000) continue;
      
      if (!dataArtists.some( artist => artist.artistName === data[i].artistName )) {
        
        const minutes = data[i].msPlayed / 60000;
        
        dataArtists.push({
          artistName: data[i].artistName,
          songs: [data[i].trackName],
          minPlayed: minutes
        });
      } else if (dataArtists.some( artist => artist.artistName === data[i].artistName )) {
        
        const index = dataArtists.findIndex(elem => {
          return elem.artistName === data[i].artistName;
        })

        const minutes = data[i].msPlayed / 60000;

        dataArtists[index].songs.push(data[i].trackName);
        dataArtists[index].minPlayed += minutes;
      }
    }
  
    dataArtists.sort((a, b) => {
        return b.minPlayed - a.minPlayed;
    })
    
    console.log(dataArtists);
      
    return dataArtists;
  }

  const dataArtists = useMemo(() => getDataArtists(data), [data])
  const list = dataArtists.map((item, index) => {
    return (
      <li key={ index }>
        { `${item.artistName} : ${item.minPlayed.toFixed(0)} minutes / ${item.songs.length} songs`}
      </li>
    )
  })


  return (
    <div className="App">
      <ol>
        {list}
      </ol>
    </div>
  );
}

export default App;

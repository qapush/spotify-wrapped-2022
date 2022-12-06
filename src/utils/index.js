const getData = (id) => {

  const filename = id ? id : 'history';

  return fetch(`${process.env.PUBLIC_URL}/${filename}.json`)
      .then(res => res.json())
    .then(data => {
      const result = uniqueArtists(data);
      return result;
      })
      .catch(err => console.log(err))
}

const uniqueArtists = (data) => {
    let result = [];
        
        // Iterate trought raw data and create array of unique artists only
        for (let i = 0; i < data.length; i++) { 

          // Skip if listened less then one minute
          if (data[i].msPlayed < 60000) continue;
          // Add to results if appears for the first time
          if (!result.some(entry => entry.artistName === data[i].artistName)) {
            result.push({
              artistName: data[i].artistName,
              songs: [{
                songName: data[i].trackName,
                dateTime: data[i].endTime
              }]
            })
          }
          // Add to results if appears again
          else {
            // Find index of this artist entry in results array
            const index = result.findIndex(element => element.artistName === data[i].artistName);

            result[index].songs.push({
              songName: data[i].trackName,
              dateTime: data[i].endTime
            })
            
          }
          
        }
  return result;
}

export { getData };
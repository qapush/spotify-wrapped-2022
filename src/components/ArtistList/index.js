import { Chart as ChartJS, ArcElement, Colors, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './ArtistList.css';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export default function ArtistList({data}){

    const top200 = data.sort( (a,b) => {
        return b.songs.length - a.songs.length
    }).slice(0,200);

    const top10 = top200.slice(0,10);



    const listData = top200.map( (item, index) => {
        return <li key={index}>{item.artistName}</li>
    })

    const chartDataLabels = top10.map(item => item.artistName); 
    const chartData = top10.map(item => item.songs.length); 

    console.log(chartDataLabels)
    console.log(chartData)

    return(
        <>

<div className="chart">
            <Pie
                data={{
                    labels: [...chartDataLabels],
                    datasets: [
                        {
                            label: '# of songs',
                            data: [...chartData]    
                        }
                    ]
                }}
                options={{
                    aspectRatio: 1,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            maxWidth: 99999,
                            maxHeight: 99999,
                        } 
                    }
                }}
                />
        </div>


        <ol>
            {listData}
        </ol>

       
        </>
    )
}
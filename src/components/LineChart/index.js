import { useParams } from "react-router"

  export default function LineChart(){
    let { artist } = useParams();
    return(
       <h2>{artist}</h2>
    )
  }

import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import PieChart from "../PieChart";
import LineChart from "../LineChart";
import "./ArtistList.css";



export default function ArtistList({ data }) {
  let { path, url } = useRouteMatch();

  console.log(useRouteMatch())


  const top200 = data
    .sort((a, b) => {
      return b.songs.length - a.songs.length;
    })
    .slice(0, 200);

  const top10 = top200.slice(0, 10);

  const listData = top200.map((item, index) => {
    return (
      <li key={index}>
        <Link to={`${url}/${item.artistName}`}>{item.artistName}</Link>
      </li>
    );
  });

  

  return (
    <>
      <Switch>
        <Route path={`${path}/:artist`}>
          <LineChart/>
        </Route>
      </Switch>
      <PieChart top10={top10}/>
      <ol>{listData}</ol>
    </>
  );
}

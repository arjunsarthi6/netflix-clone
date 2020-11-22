import './App.css';
import './styles/Row.css';
import Row from "./components/Row";
import requests from "./requests/requests";

function App() {
  return (
    <div className="App">
      <h1>Lets build Netflix clone</h1>
      <Row title="NETFLIX originals" fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

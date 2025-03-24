import Card from "./NewCard.jsx";
import Comics from "./ComicsList.jsx";

export default function Main() {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="mainBackgroundTop">
        <div className="mainContainer d-flex">
          <div className="rowCards d-flex">
            <button className="btnCurrentSeries">CURRENT SERIES</button>

            {Comics.map((comic) => (
              <Card key={comic.id} content={comic.series} img={comic.thumb} />
            ))}

            <button className="btnLoadMore">LOAD MORE</button>
          </div>
        </div>
      </div>
    </main>
  );
}

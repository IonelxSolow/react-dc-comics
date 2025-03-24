import Card from "./NewCard.jsx";

export default function Main({ comics }) {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="mainBackgroundTop">
        <div className="mainContainer d-flex">
          <div className="rowCards d-flex">
            <button className="btnCurrentSeries">CURRENT SERIES</button>

            {comics.map((comic) => (
              <Card key={comic.id} content={comic.series} img={comic.thumb} />
            ))}

            <button className="btnLoadMore">LOAD MORE</button>
          </div>
        </div>
      </div>
    </main>
  );
}

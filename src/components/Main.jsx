export default function Main() {
  return (
    <main>
      <div className="mainBackgroundTop">
        <div className="mainContainer d-flex">
          <h2>--&gt; Content goes here &lt;--</h2>
        </div>
      </div>
      <div className="mainBackgroundBottom">
        <div className="rowMain d-flex">
          <div className="cardMain d-flex">
            <img src="/img/buy-comics-digital-comics.png" alt="" height="55" />
            <span>DIGITAL COMICS</span>
          </div>
          <div className="cardMain d-flex">
            <img src="/img/buy-comics-merchandise.png" alt="" height="55" />
            <span>DC MERCHANDISE</span>
          </div>
          <div className="cardMain d-flex">
            <img src="/img/buy-comics-subscriptions.png" alt="" height="55" />
            <span>SUBSCRIPTION</span>
          </div>
          <div className="cardMain d-flex">
            <img src="/img/buy-comics-shop-locator.png" alt="" height="55" />
            <span>COMIC SHOP LOCATOR</span>
          </div>
          <div className="cardMain d-flex">
            <img src="/img/buy-dc-power-visa.svg" alt="" width="55" />
            <span>DC POWER VISA</span>
          </div>
        </div>
      </div>
    </main>
  );
}

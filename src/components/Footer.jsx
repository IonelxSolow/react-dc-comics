export default function Footer() {
  return (
    <footer>
      <div className="footerContainer d-flex">
        <div className="row d-flex">
          <div className="card">
            <h3>DC COMICS</h3>
            <ul>
              <li>
                <a href="#">Characters</a>
              </li>
              <li>
                <a href="#">Comics</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>

            <h3>SHOP</h3>
            <ul>
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop DC Collectibles</a>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>DC</h3>
            <ul>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Privacy policy (New)</a>
              </li>
              <li>
                <a href="#">Ad Choices</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Subscriptions</a>
              </li>
              <li>
                <a href="#">Talent Workshops</a>
              </li>
              <li>
                <a href="#">CPSC Certificates</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
              <li>
                <a href="#">Shop Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>SITES</h3>
            <ul>
              <li>
                <a href="#">DC</a>
              </li>
              <li>
                <a href="#">MAD Magazine</a>
              </li>
              <li>
                <a href="#">DC Kids</a>
              </li>
              <li>
                <a href="#">DC Universe</a>
              </li>
              <li>
                <a href="#">DC Power Visa</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dc-bg-logo"></div>
      </div>

      <div className="footerBottomBg">
        <div className="footerBottom d-flex">
          <button className="btnFooterBottom">SING-UP NOW!</button>
          <div className="followUs d-flex">
            <h4>FOLLOW US</h4>
            <ul className="iconBottom d-flex">
              <li>
                <a href="#">
                  <img src="/img/footer-facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/footer-twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/footer-youtube.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/footer-pinterest.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/img/footer-periscope.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

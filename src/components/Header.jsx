export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navContainer d-flex">
          <a href="/">
            <img src="/img/dc-logo.png" alt="dc logo" height="80" />
          </a>
          <ul className="navMenu d-flex">
            <li>
              <a href="/">CHARACTERS</a>
            </li>
            <li>
              <a href="/" className="active">
                COMICS
              </a>
            </li>
            <li>
              <a href="/">MOVIES</a>
            </li>
            <li>
              <a href="/">TV</a>
            </li>
            <li>
              <a href="/">GAMES</a>
            </li>
            <li>
              <a href="/">COLLECTIBLES</a>
            </li>
            <li>
              <a href="/">VIDEOS</a>
            </li>
            <li>
              <a href="/">FANS</a>
            </li>
            <li>
              <a href="/">NEWS</a>
            </li>
            <li>
              <a href="/">SHOP</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

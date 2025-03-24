export default function Header() {
  const linksArr = [
    { id: 1, name: "CHARACTER", url: "#" },
    { id: 2, name: "COMICS", url: "#" },
    { id: 3, name: "MOVIES", url: "#" },
    { id: 4, name: "TV", url: "#" },
    { id: 5, name: "GAMES", url: "#" },
    { id: 6, name: "COLLECTIBLES", url: "#" },
    { id: 7, name: "VIDEOS", url: "#" },
    { id: 8, name: "FANS", url: "#" },
    { id: 9, name: "NEWS", url: "#" },
    { id: 10, name: "SHOP", url: "#" },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="navContainer d-flex">
          <a href="/">
            <img src="/img/dc-logo.png" alt="dc logo" height="80" />
          </a>
          <ul className="navMenu d-flex">
            {linksArr.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

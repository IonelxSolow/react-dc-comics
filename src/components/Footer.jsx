export default function Footer() {
  const footerLinks = [
    {
      title: "DC COMICS",
      links: [
        { name: "Characters", url: "#" },
        { name: "Comics", url: "#" },
        { name: "Movies", url: "#" },
        { name: "TV", url: "#" },
        { name: "Games", url: "#" },
        { name: "Videos", url: "#" },
        { name: "News", url: "#" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { name: "Shop DC", url: "#" },
        { name: "Shop DC Collectibles", url: "#" },
      ],
    },
    {
      title: "DC",
      links: [
        { name: "Terms Of Use", url: "#" },
        { name: "Privacy policy (New)", url: "#" },
        { name: "Ad Choices", url: "#" },
        { name: "Advertising", url: "#" },
        { name: "Jobs", url: "#" },
        { name: "Subscriptions", url: "#" },
        { name: "Talent Workshops", url: "#" },
        { name: "CPSC Certificates", url: "#" },
        { name: "Ratings", url: "#" },
        { name: "Shop Help", url: "#" },
        { name: "Contact Us", url: "#" },
      ],
    },
    {
      title: "SITES",
      links: [
        { name: "DC", url: "#" },
        { name: "MAD Magazine", url: "#" },
        { name: "DC Kids", url: "#" },
        { name: "DC Universe", url: "#" },
        { name: "DC Power Visa", url: "#" },
      ],
    },
  ];

  const socialLinks = [
    { img: "/img/footer-facebook.png", alt: "Facebook", url: "#" },
    { img: "/img/footer-twitter.png", alt: "Twitter", url: "#" },
    { img: "/img/footer-youtube.png", alt: "YouTube", url: "#" },
    { img: "/img/footer-pinterest.png", alt: "Pinterest", url: "#" },
    { img: "/img/footer-periscope.png", alt: "Periscope", url: "#" },
  ];

  return (
    <footer>
      <div className="footerContainer d-flex">
        <div className="row d-flex">
          {footerLinks.map((section, index) => (
            <div className="card" key={index}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="dc-bg-logo"></div>
      </div>

      <div className="footerBottomBg">
        <div className="footerBottom d-flex">
          <button className="btnFooterBottom">SING-UP NOW!</button>
          <div className="followUs d-flex">
            <h4>FOLLOW US</h4>
            <ul className="iconBottom d-flex">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url}>
                    <img src={social.img} alt={social.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

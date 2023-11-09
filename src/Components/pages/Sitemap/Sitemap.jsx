import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./Sitemap.css";

const pages = [
  { title: "Home", link: "/" },
  {
    title: "Services",
    link: "/services",
    sub: [
      { title: "Carpet Cleaning", link: "/services/carpet-cleaning-melbourne" },
      { title: "Rug Cleaning", link: "/services/rug-cleaning-melbourne" },
      {
        title: "Upholstery Cleaning",
        link: "/services/upholstery-cleaning-melbourne",
      },
    ],
  },
  {
    title: "Gallery",
    link: "/gallery",
    sub: [
      {
        title: "Carpet Cleaning Gallery Album",
        link: "/gallery/carpet-cleaning-gallery",
      },
      {
        title: "rug Cleaning Gallery Album",
        link: "/gallery/rug-cleaning-gallery",
      },
      {
        title: "upholstery Cleaning Gallery Album",
        link: "/gallery/upholstery-cleaning-gallery",
      },
      {
        title: "leather Cleaning Gallery Album",
        link: "/gallery/leather-cleaning-gallery",
      },
      {
        title: "Tile and Grout Cleaning Gallery Album",
        link: "/gallery/tile-grout-cleaning-gallery",
      },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
    sub: [
      {
        title: "Sheep Skin Rug Cleaning",
        link: "/blog/sheep-skin-rug-cleaning",
      },
      {
        title: "How to use baking soda for rug cleaning",
        link: "/blog/how-to-use-baking-soda-for-rug-cleaning",
      },
      {
        title: "Rug cleaning vs Carpet cleaning",
        link: "/blog/rug-cleaning-vs-carpet-cleaning",
      },
      {
        title: "Why do I need a professional rug cleaner?",
        link: "/blog/why-do-I-need-a-professional-rug-cleaner",
      },
      {
        title: "TIPS for cleaning cowhide Rug",
        link: "/blog/tips-for-cleaning-cowhide-rug",
      },
      {
        title: "How to Wash Rugs for Best Results?",
        link: "/blog/how-to-wash-rugs-for-best-results",
      },
      {
        title:
          "Why You Should Prefer Carpet Steam Cleaning Over DIY Cleaning Methods?",
        link: "/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods",
      },
      {
        title: "Why Do You Need Rug Cleaning Experts?",
        link: "/blog/why-do-you-need-rug-cleaning-experts",
      },
      {
        title:
          "What is Best for You? Rug Steam, Dry or Traditional Hand Cleaning?",
        link: "/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning",
      },
    ],
  },
  { title: "Why Us?", link: "/why-us" },
  { title: "Contact", link: "/contact-us" },
  { title: "FAQ", link: "/faq" },
  { title: "Specials", link: "/special-deals" },
  { title: "NDIS House Cleaning", link: "/ndis-house-cleaning-australia" },
  { title: "Locations", link: "/locations" },
  { title: "Terms and Conditions", link: "/terms-and-conditions" },
];

const Sitemap = () => {
  return (
    <>
      <NavMain />
      <Navbar />
      <Banner sublink="sitemap" title="Sitemap" />
      <div className="sitemap">
        <div className="heading">
          <h2>Pages</h2>
        </div>
        <div className="content">
          <ul className="main">
            {pages.map((item) => {
              return (
                <div>
                  <Link to={item.link}>
                    <li>{item.title}</li>
                    {item.sub ? (
                      <>
                        <ul className="sub">
                          {item.sub.map((sub) => {
                            return (
                              <div>
                                <Link to={sub.link}>
                                  <li> {sub.title}</li>
                                </Link>
                              </div>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sitemap;

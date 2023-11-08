import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./BlogPage.css";

const items = [
  {
    title: "Sheep Skin Rug Cleaning",
    img: require("../../../Assets/Images/Blogs/steps-to-clean-sheepskin-rug.png"),
    link: "/blog/sheep-skin-rug-cleaning",
    desc: "The sheepskin rug that lies in your home, whether it is in the living, in",
  },
  {
    title: "How to use baking soda for rug cleaning",
    img: require("../../../Assets/Images/Blogs/baking-soda-rug-cleaning-melbourne.png"),
    link: "/blog/how-to-use-baking-soda-for-rug-cleaning",
    desc: "Professional rug cleaners have their own set of tools and techniques to",
  },
  {
    title: "Rug cleaning vs Carpet cleaning",
    img: require("../../../Assets/Images/Blogs/cold, smooth & tasty..png"),
    link: "/blog/rug-cleaning-vs-carpet-cleaning",
    desc: "Many people think that Rugs and carpets are the same thing and wash",
  },
  {
    title: "Why do I need a professional rug cleaner?",
    img: require("../../../Assets/Images/Blogs/cold, smooth & tasty. (1).png"),
    link: "/blog/why-do-I-need-a-professional-rug-cleaner",
    desc: "If your rug is dirt and unclean, Hire a professional rug cleaner in Melbourne to",
  },
  {
    title: "TIPS for cleaning cowhide Rug",
    img: require("../../../Assets/Images/Blogs/Pro vs Diy (4).png"),
    link: "/blog/tips-for-cleaning-cowhide-rug",
    desc: "A Cowhide Rug is the complete skin and hair of a cow, cured using either",
  },
  {
    title: "How to Wash Rugs for Best Results?",
    img: require("../../../Assets/Images/Blogs/how-to-wash-rugs-for-best-results.png"),
    link: "/blog/how-to-wash-rugs-for-best-results",
    desc: "Making up a home being a household is the worst part that can ever found.",
  },
  {
    title:
      "Why You Should Prefer Carpet Steam Cleaning Over DIY Cleaning Methods?",
    img: require("../../../Assets/Images/Blogs/Pro vs Diy.png"),
    link: "/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods",
    desc: "Carpets are one of the expensive investments people make for their decor. But we also",
  },
  {
    title: "Why Do You Need Rug Cleaning Experts?",
    img: require("../../../Assets/Images/Blogs/Pro vs Diy (1).png"),
    link: "/blog/why-do-you-need-rug-cleaning-experts",
    desc: "A trendy addition to any apartment can be a nice looking area rug. By giving",
  },
  {
    title: "What is Best for You? Rug Steam, Dry or Traditional Hand Cleaning?",
    img: require("../../../Assets/Images/Blogs/Pro vs Diy (2).png"),
    link: "/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning",
    desc: "Despite the best efforts and maintenance regimes, the carpets and rugs are prone to stains,",
  },
  // <BlogComp
  //   title="How to Clean a Rug?"
  //   img={require("../../../Assets/Images/Blogs/clean.jpg")}
  //   link={"/blog/how-to-clean-a-rug?"}
  //   desc="Rugs are expensive and delicate. Cleaning a rug is very different from cleaning any other"
  // />,
];

const BlogPage = (props) => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/blog-sub-banner.jpg")}
        sublink="Blog"
        sublink2={props.title}
      />
      <div className="blog-page-wrapper">
        <div className="blog-page">
          <div className="blog-page-img">
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
          </div>
          <div className="blog-page-info">{props.content}</div>
        </div>
        <div className="recent-posts">
          <div className="heading">
            <h2>Recent Posts</h2>
          </div>
          <div className="recent-wrapper">
            {items.map((item) => {
              return pathname === item.link ? null : (
                <div className="recent-content">
                  <div className="img">
                    <Link to={item.link}>
                      <img src={item.img} alt="" />
                    </Link>
                  </div>
                  <div className="info">
                    <h4>{item.title}</h4>
                    <Link to={item.link}>
                      <span>
                        READ MORE <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default BlogPage;

import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import ContactComp from "../../common/Contact/ContactComponent";
import "./Blog.css";
import BlogComp from "./BlogComp";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Blog" slogan="Make your Floor Comfort and Cozy" />

      <div className="blogs">
        <div className="blog heading">{/* <h2>Blogs</h2> */}</div>
        <div className="blog content">
          <BlogComp
            title="Sheep Skin Rug Cleaning"
            img={require("../../../Assets/Images/Blogs/Sheep.png")}
            link={"/blog/sheep-skin-rug-cleaning"}
          />
          <BlogComp
            title="How to use baking soda for rug cleaning"
            img={require("../../../Assets/Images/Blogs/soda.jpg")}
            link={"/blog/how-to-use-baking-soda-for-rug-cleaning"}
          />
          <BlogComp
            title="Rug cleaning vs Carpet cleaning"
            img={require("../../../Assets/Images/Blogs/versus.jpg")}
            link={"/blog/rug-cleaning-vs-carpet-cleaning"}
          />
          <BlogComp
            title="Why do I need a professional rug cleaner?"
            img={require("../../../Assets/Images/Blogs/professional.jpg")}
            link={"/blog/why-do-I-need-a-professional-rug-cleaner"}
          />
          <BlogComp
            title="TIPS for cleaning cowhide Rug"
            img={require("../../../Assets/Images/Blogs/tips.jpg")}
            link={"/blog/tips-for-cleaning-cowhide-rug"}
          />
          <BlogComp
            title="How to Wash Rugs for Best Results?"
            img={require("../../../Assets/Images/Blogs/wash.jpg")}
            link={"/blog/how-to-wash-rugs-for-best-results"}
          />
          <BlogComp
            title="Why You Should Prefer Carpet Steam Cleaning Over DIY Cleaning Methods?"
            img={require("../../../Assets/Images/Blogs/steam.jpg")}
            link={
              "/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods"
            }
          />
          <BlogComp
            title="Why Do You Need Rug Cleaning Experts?"
            img={require("../../../Assets/Images/Blogs/experts.jpg")}
            link={"/blog/why-do-you-need-rug-cleaning-experts"}
          />
          <BlogComp
            title="What is Best for You? Rug Steam, Dry or Traditional Hand Cleaning?"
            img={require("../../../Assets/Images/Blogs/traditional.jpg")}
            link={
              "/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning"
            }
          />
          <BlogComp
            title="How to Clean a Rug?"
            img={require("../../../Assets/Images/Blogs/clean.jpg")}
            link={"/blog/how-to-clean-a-rug?"}
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Blog;

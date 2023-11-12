import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import ContactComp from "../../common/Contact/ContactComponent";
import "./Blog.css";
import BlogComp from "./BlogComp";
import NavMain from "../../common/navbar/NavMain";
import ReactPaginate from "react-paginate";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Helmet } from "react-helmet";

const items = [
  <BlogComp
    title="Sheep Skin Rug Cleaning"
    img={require("../../../Assets/Images/Blogs/steps-to-clean-sheepskin-rug.png")}
    link={"/blog/sheep-skin-rug-cleaning"}
    desc="The sheepskin rug that lies in your home, whether it is in the living, in"
  />,
  <BlogComp
    title="How to use baking soda for rug cleaning"
    img={require("../../../Assets/Images/Blogs/baking-soda-rug-cleaning-melbourne.png")}
    link={"/blog/how-to-use-baking-soda-for-rug-cleaning"}
    desc="Professional rug cleaners have their own set of tools and techniques to"
  />,
  <BlogComp
    title="Rug cleaning vs Carpet cleaning"
    img={require("../../../Assets/Images/Blogs/cold, smooth & tasty..png")}
    link={"/blog/rug-cleaning-vs-carpet-cleaning"}
    desc="Many people think that Rugs and carpets are the same thing and wash"
  />,
  <BlogComp
    title="Why do I need a professional rug cleaner?"
    img={require("../../../Assets/Images/Blogs/cold, smooth & tasty. (1).png")}
    link={"/blog/why-do-I-need-a-professional-rug-cleaner"}
    desc="If your rug is dirt and unclean, Hire a professional rug cleaner in Melbourne to"
  />,
  <BlogComp
    title="TIPS for cleaning cowhide Rug"
    img={require("../../../Assets/Images/Blogs/Pro vs Diy (4).png")}
    link={"/blog/tips-for-cleaning-cowhide-rug"}
    desc="A Cowhide Rug is the complete skin and hair of a cow, cured using either"
  />,
  <BlogComp
    title="How to Wash Rugs for Best Results?"
    img={require("../../../Assets/Images/Blogs/how-to-wash-rugs-for-best-results.png")}
    link={"/blog/how-to-wash-rugs-for-best-results"}
    desc="Making up a home being a household is the worst part that can ever found."
  />,
  <BlogComp
    title="Why You Should Prefer Carpet Steam Cleaning Over DIY Cleaning Methods?"
    img={require("../../../Assets/Images/Blogs/Pro vs Diy.png")}
    link={
      "/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods"
    }
    desc="Carpets are one of the expensive investments people make for their decor. But we also"
  />,
  <BlogComp
    title="Why Do You Need Rug Cleaning Experts?"
    img={require("../../../Assets/Images/Blogs/Pro vs Diy (1).png")}
    link={"/blog/why-do-you-need-rug-cleaning-experts"}
    desc="A trendy addition to any apartment can be a nice looking area rug. By giving"
  />,
  <BlogComp
    title="What is Best for You? Rug Steam, Dry or Traditional Hand Cleaning?"
    img={require("../../../Assets/Images/Blogs/Pro vs Diy (2).png")}
    link={
      "/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning"
    }
    desc="Despite the best efforts and maintenance regimes, the carpets and rugs are prone to stains,"
  />,
  // <BlogComp
  //   title="How to Clean a Rug?"
  //   img={require("../../../Assets/Images/Blogs/clean.jpg")}
  //   link={"/blog/how-to-clean-a-rug?"}
  //   desc="Rugs are expensive and delicate. Cleaning a rug is very different from cleaning any other"
  // />,
];

function Items({ currentItems }) {
  return (
    <>
      <div className="blog content">
        {currentItems && currentItems.map((item) => <div>{item}</div>)}
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const Blog = () => {
  document.getElementById("container");
  document.title = "Rug Cleaning Melbourne";
  return (
    <>
      <Helmet>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/blog-banner.png")}
        sublink="Blog"
        slogan="Make your Floor Comfort and Cozy"
      />

      <div className="blogs">
        <div className="blog heading"></div>
        <PaginatedItems itemsPerPage={3} />
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Blog;

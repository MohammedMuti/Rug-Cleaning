import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./BlogPage.css";

const BlogPage = (props) => {
  return (
    <>
      <Navbar />
      <NavMain />
      <Banner
        img={require("../../../Assets/Images/Banner/blog-sub-banner.jpg")}
        sublink="Blog"
        sublink2={props.title}
      />
      <div className="blog-page">
        <div className="blog-page-img">
          <img src={props.img} alt="" />
          <h2>{props.title}</h2>
        </div>
        <div className="blog-page-info">{props.content}</div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default BlogPage;

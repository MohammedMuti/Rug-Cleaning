import Home from "./Components/pages/Home/Home";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Contact from "./Components/pages/Contact/Contact";
import FAQ from "./Components/pages/FAQ/FAQ";
import Blog from "./Components/pages/Blog/Blog";
import Terms from "./Components/pages/Terms/Terms";
import Thank from "./Components/pages/Thankyou/Thank";
import WhyUs from "./Components/pages/WhyUs/WhyUs";
import Services from "./Components/pages/Services/Services";
import CarpetService from "./Components/pages/Services/CarpetService";
import BlogPageComp from "./Components/pages/Blog/BlogPageComp";
import Gallery from "./Components/pages/Gallery/Gallery";
import CarpetGallery from "./Components/pages/Gallery/CarpetGallery";
import RugGallery from "./Components/pages/Gallery/RugGallery";
import UpholsteryGallery from "./Components/pages/Gallery/UpholsteryGallery";
import LeatherGallery from "./Components/pages/Gallery/LeatherGallery";
import TilesGallery from "./Components/pages/Gallery/TilesGallery";
import RugService from "./Components/pages/Services/RugService";
import RugRepair from "./Components/pages/Services/RugRepair";
import UpholsteryService from "./Components/pages/Services/UpholsteryService";
import Specials from "./Components/pages/Specials/Specials";
import Location from "./Components/pages/Location/Location";
import ScrollToTop from "./Components/common/Scroll/ScrollToTop";
import Sitemap from "./Components/pages/Sitemap/Sitemap";
import NotFound from "./Components/pages/404/NotFound";
import NDIS from "./Components/pages/NDIS/NDIS";
import MattressGallery from "./Components/pages/Gallery/Mattress";
import LocationComp from "./Components/pages/Location/LocationComp";
import Dandenong from "./Components/pages/Location/Dandenong";
import Pakenham from "./Components/pages/Location/Pakenham";
import Truganina from "./Components/pages/Location/Truganina";
import Lynbrook from "./Components/pages/Location/Lynbrook";
import Cranbourne from "./Components/pages/Location/Cranbourne";
import Narre from "./Components/pages/Location/Narre";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* Contact Us */}
          <Route exact path="/contact-us" element={<Contact />} />

          {/* Specials */}
          <Route exact path="/special-deals" element={<Specials />} />

          {/* Location */}
          <Route exact path="/locations" element={<Location />} />
          {/* Dandenong */}
          <Route
            exact
            path="/locations/carpet-cleaning-dandenong"
            element={<Dandenong />}
          />
          {/* Pakenham */}
          <Route
            exact
            path="/locations/carpet-cleaning-pakenham"
            element={<Pakenham />}
          />
          {/* Truganina */}
          <Route
            exact
            path="/locations/carpet-cleaning-truganina"
            element={<Truganina />}
          />
          {/* Lynbrook */}
          <Route
            exact
            path="/locations/carpet-cleaning-lynbrook"
            element={<Lynbrook />}
          />
          {/* Cranbourne */}
          <Route
            exact
            path="/locations/carpet-cleaning-cranbourne"
            element={<Cranbourne />}
          />
          {/* Narre Warren */}
          <Route
            exact
            path="/locations/carpet-cleaning-narre-warren"
            element={<Narre />}
          />

          {/* SiteMap */}
          <Route exact path="/sitemap" element={<Sitemap />} />

          {/* Gallery */}
          <Route exact path="/gallery" element={<Gallery />} />
          {/* carpet gallery */}
          <Route
            exact
            path="/gallery/carpet-cleaning-gallery"
            element={<CarpetGallery />}
          />
          {/* rug gallery */}
          <Route
            exact
            path="/gallery/rug-cleaning-gallery"
            element={<RugGallery />}
          />
          {/* upholstery gallery */}
          <Route
            exact
            path="/gallery/upholstery-cleaning-gallery"
            element={<UpholsteryGallery />}
          />
          {/* leather gallery */}
          <Route
            exact
            path="/gallery/leather-cleaning-gallery"
            element={<LeatherGallery />}
          />
          {/* tile gallery */}
          <Route
            exact
            path="/gallery/tile-grout-cleaning-gallery"
            element={<TilesGallery />}
          />
          {/* Mattress gallery */}
          <Route
            exact
            path="/gallery/mattress-cleaning-gallery"
            element={<MattressGallery />}
          />

          {/* Services */}
          <Route exact path="/services" element={<Services />} />
          {/* Carpet Service */}
          <Route
            exact
            path="/services/carpet-cleaning-melbourne"
            element={<CarpetService />}
          />
          {/* Rug Service */}
          <Route
            exact
            path="/services/rug-cleaning-melbourne"
            element={<RugService />}
          />
          {/* Upholstery Service */}
          <Route
            exact
            path="/services/upholstery-cleaning-melbourne"
            element={<UpholsteryService />}
          />
          {/* Rug Service */}
          <Route
            exact
            path="/services/rug-repair-melbourne"
            element={<RugRepair />}
          />
          {/* NDIS */}
          <Route
            exact
            path="/services/ndis-house-cleaning-australia"
            element={<NDIS />}
          />

          {/* Thank You */}
          <Route exact path="/thank-you" element={<Thank />} />

          {/* Why Us */}
          <Route exact path="/why-us" element={<WhyUs />} />

          {/* Blog  */}
          <Route exact path="/blog" element={<Blog />} />
          <Route
            exact
            path="/category/rug-cleaning"
            element={<Navigate to={"/blog"} />}
          />

          <Route
            exact
            path="/blog/sheep-skin-rug-cleaning"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/how-to-use-baking-soda-for-rug-cleaning"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/rug-cleaning-vs-carpet-cleaning"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/why-do-I-need-a-professional-rug-cleaner"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/tips-for-cleaning-cowhide-rug"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/how-to-wash-rugs-for-best-results"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/why-do-you-need-rug-cleaning-experts"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning"
            element={<BlogPageComp />}
          />

          <Route
            exact
            path="/blog/how-to-clean-a-rug"
            element={<BlogPageComp />}
          />

          <Route exact path="/faq" element={<FAQ />} />

          {/* Terms and Conditions */}
          <Route exact path="/terms-and-conditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

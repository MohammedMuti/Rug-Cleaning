import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import NavMain from "../../common/navbar/NavMain";
import "./Location.css";

let data = [
  "ARMADALE",
  "BAXTER",
  "BERWICK",
  "BOX HILL",
  "BURWOOD",
  "CAROLINE SPRINGS",
  "CHADSTONE",
  "CLAYTON",
  "DANDENONG",
  "DROMANA",
  "FOREST HILL",
  "GLEN HUNTLY",
  "HALLAM",
  "HEATHERTON",
  "KANANOOK",
  "KNOXFIELD",
  "LYNBROOK",
  "MCKINNON",
  "MONT ALBERT",
  "MORDIALLOC",
  "MOUNT MARTHA",
  "NARRE WARREN",
  "OFFICER",
  "PATTERSON LAKES",
  "SAFETY BEACH",
  "SOMERVILLE",
  "TEMPLESTOWE",
  "WANTIRNA",
  "ASHBURTON",
  "BAYSWATER",
  "BLACKBURN",
  "BRAESIDE",
  "CAMBERWELL",
  "CARRUM",
  "CHELSEA",
  "CLYDE",
  "DINGLEY VILLAGE",
  "EDITHVALE",
  "FRANKSTON",
  "GLEN IRIS",
  "HAMPTON PARK",
  "HEATHMONT",
  "KEW",
  "KOOYONG",
  "LYNDHURST",
  "MENTONE",
  "MONTROSE",
  "MORNINGTON",
  "MOUNT WAVERLEY",
  "NOBLE PARK",
  "ORMOND",
  "POINT COOK",
  "SCORESBY",
  "SOUTH YARRA",
  "THE BASIN",
  "WARRANDYTE",
  "ASHWOOD",
  "BELGRAVE",
  "BONBEACH",
  "BRIGHTON",
  "CANTERBURY",
  "CARRUM DOWNS",
  "CHELTENHAM",
  "CRANBOURNE",
  "DONCASTER",
  "ELSTERNWICK",
  "FRANKSTON NORTH",
  "GLEN WAVERLEY",
  "HAWTHORN",
  "HIGHETT",
  "KEYSBOROUGH",
  "LANGWARRIN",
  "LYSTERFIELD",
  "MITCHAM",
  "MOORABBIN",
  "MOUNT ELIZA",
  "MULGRAVE",
  "NUNAWADING",
  "PAKENHAM",
  "PRAHRAN",
  "SEAFORD",
  "SPRINGVALE",
  "TOORAK",
  "WHEELERS HILL",
  "BALWYN",
  "BENTLEIGH",
  "BORONIA",
  "BULLEEN",
  "CARNEGIE",
  "CAULFIELD",
  "CLARINDA",
  "CROYDON",
  "DONVALE",
  "FERNTREE GULLY",
  "FRANKSTON SOUTH",
  "GLENFERRIE",
  "HEATHERDALE",
  "HUNTINGDALE",
  "KILSYTH",
  "LILYDALE",
  "MALVERN",
  "MONBULK",
  "MOOROOLBARK",
  "MOUNT MARTH",
  "MURRUMBEENA",
  "OAKLEIGH",
  "PARKDALE",
  "ROWVILLE",
  "SKYE",
  "SURREY HILLS",
  "TRUGANINA",
];

const Location = () => {
  return (
    <>
      <Navbar />
      <NavMain />
      <Banner sublink="locations" />

      <div className="locations">
        <div className="heading">
          <h2>Locations</h2>
        </div>
        <div className="content">
          {data.map((item) => {
            return (
              <div key={data.indexOf(item)} className="container">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Location;
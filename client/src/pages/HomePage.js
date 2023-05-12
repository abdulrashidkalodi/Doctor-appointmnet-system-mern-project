// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "./../components/Layout";
// import { Row } from "antd";
// import DoctorList from "../components/DoctorList";
// import Footer from "./Footer";
// const HomePage = () => {
//   const [doctors, setDoctors] = useState([]);
//   // login user data
//   const getUserData = async () => {
//     try {
//       const res = await axios.get(
//         "/api/v1/user/getAllDoctors",

//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);
//   return (
//     <div>
//       <Layout>
//         <h1 className="text-center">Home Page</h1>
//         <Row>
//           {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
//         </Row>
//       <Footer />
//       </Layout>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import Footer from "./Footer";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <Layout>
        <div id="carousels" className="carousel">
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div id="carousel-items" className="carousel-item active ">
                <img
                  src="https://dims.healthgrades.com/dims3/MMH/68bfb76/2147483647/strip/true/crop/5616x3138+0+303/resize/800x447!/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2F24%2F9d%2F5655408743ca94d39a59d91c6e95%2Fimage-senior-male-laughing-in-hospital-bed.jpg"
                  className="d-block w-100  "
                  alt="notavble"
                />
              </div>
              <div id="carousel-items" className="carousel-item">
                <img
                  src="https://www.aryavaidyasala.com/webadmin/uploads/o_1b234katiegv7881d76n0d1ras7h.jpg"
                  className="d-block w-100 "
                  alt="notavble"
                />
              </div>
              <div id="carousel-items" className="carousel-item">
                <img
                  src="https://www.aryavaidyasala.com/webadmin/uploads/o_1b234gn7f14dplodk8h1fiaqfk2a.jpg"
                  className="d-block w-100 "
                  alt="notavble"
                />
                {/* start */}
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="sub-title mb-0">WELCOME TO ARYAVAIDYASALA</h4>
                  <h1 className="title mt-0 bannertext">
                    {" "}
                    Our Legency Will Live Internationally
                  </h1>
                  <div className="btn-wrapper">
                    <a href="/About" className="btn btn-outline-light mr-10">
                      Read More
                    </a>
                    <a href="/About" className="btn btn-theme-color d2">
                      About Us
                    </a>
                  </div>
                </div>
                {/* end */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </Layout>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
      <Footer />
    </div>
  );
};

export default HomePage;

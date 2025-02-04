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
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";

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
        <h1>Available Doctors</h1>
        <Row>
          {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
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
                  src={banner1}
                  className="d-block w-100"
                  alt="not_available"
                />
                <div className="carousel-caption d-none d-md-block text-black">
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
              </div>
              <div id="carousel-items" className="carousel-item">
                <img
                  src={banner2}
                  className="d-block w-100"
                  alt="not_available"
                />
                <div className="carousel-caption d-none d-md-block text-black">
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
              </div>
              <div id="carousel-items" className="carousel-item">
                <img
                  src={banner3}
                  className="d-block w-100"
                  alt="not_available"
                />
                {/* start */}
                <div className="carousel-caption d-none d-md-block text-black">
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
      {/* <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row> */}
      <Footer />
    </div>
  );
};

export default HomePage;

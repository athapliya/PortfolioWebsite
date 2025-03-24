// import React from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import { dataportfolio, meta } from "../../content_option";

// export const Portfolio = () => {
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> Portfolio | {meta.title} </title>{" "}
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <div className="mb-5 po_items_ho">
//           {dataportfolio.map((data, i) => {
//             return (
//               <div key={i} className="po_item">
//                 <img src={data.img} alt="" />
//                 <div className="content">
//                   <p>{data.description}</p>
//                   <a href={data.link} target="_blank" rel="noopener noreferrer">view project</a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </HelmetProvider>
//   );
// };

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1 className="display-4 portfolio-title">Projects</h1>
        <hr className="t_border my-4" />

        <div className="timeline">
          {dataportfolio.map((data, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <img src={data.img} alt="" className="project-image" />
                <div className="text-container">
                  <p style={{ fontWeight: 'bold' }}>{data.title}</p>
                  <p>{data.description}</p>
                  {/* <a href={data.link} target="_blank" rel="noopener noreferrer">Learn More</a> */}
                </div> {/* Close text-container */}
              </div> {/* Close timeline-content */}
            </div> //{/* Close timeline-item */}
          ))}
        </div> {/* Close timeline */}
      </Container>
    </HelmetProvider>
  );
};

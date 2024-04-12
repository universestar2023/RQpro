import React from "react";
import "./story.css";
import Navbar1 from "../Home/navbar1";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function VideoSection() {
  return (
    <div>
      <Navbar1 />

      <div className="container-wrapper">
        <div className="video-row">
          <Container className="video-container">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/CwzoUnj0Cxc?si=1cu2mfnuK0I_Ka_8"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>

          <Container className="video-container">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/vdMPP47nLhc?si=j_8God2zIpCYcCWu"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
        </div>

        <div className="video-row">
          <Container className="video-container">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/RtoD5B1dfIc?si=_iumNFYC8QIsSnOn"
                title="YouTube video play"
                allowFullScreen
              ></iframe>
            </div>
          </Container>

          <Container className="video-container">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/domCDwp5u3I?si=m-THSMMtruiGv-cB"
                title="YouTube video playe"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

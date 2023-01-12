import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { FaMailBulk, FaPhoneSquare } from "react-icons/fa";
import { Button } from "@mui/material";

function Contact() {
  return (
    <div className="container">
      <div className="mt-28">
        <h1 className="text-5xl font-bold mb-8 text-center">Conatct</h1>
        <p className="text-center my-8 px-3">
          If you have any questions, please feel free to drop me a line. If you
          don't get an answer immediately, I might just be travelling through
          the middle of nowhere. TIl get back to you as soon as I can. That's a
          promise!
        </p>
        <div className="row mb-16">
          <div className="col-lg-6 mb-3">
            <div className="flex items-center">
              <a href="tel:+2348148615957" className="nav-link">
                <Button
                  startIcon={<FaPhoneSquare size={30} />}
                  variant="contained"
                  color="info"
                >
                  <span className="ml-3 text-lg">+234 814 861 5957</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="flex items-center">
              <a href="mailto:Info@taiwomadewriter.com" className="nav-link">
                <Button
                  startIcon={<FaMailBulk size={30} />}
                  variant="contained"
                  color="info"
                >
                  <span className="ml-3">Info@taiwomadewriter.com</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-8">
            <h4 className="mb-8 text-2xl">Send a message</h4>
            <Form>
              <FloatingLabel label="Full Name" className="mb-8">
                <Form.Control type="text" placeholder="Full Name" />
              </FloatingLabel>
              <Form.Group as={Col} controlId="formGridEmail" className="mb-8">
                <FloatingLabel label="Email address">
                  <Form.Control type="email" placeholder="Enter email" />
                </FloatingLabel>
              </Form.Group>

              <Row className="mb-8">
                <Form.Group as={Col} controlId="formGridMessage">
                  <FloatingLabel label="Message">
                    <Form.Control
                      type="text"
                      as="textarea"
                      style={{ height: "100px" }}
                      placeholder="Message"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  size="large"
                >
                  Send
                </Button>
              </div>
            </Form>
          </div>
          <div className="col-lg-6 mb-8 css-uejpwu">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_eroqjb7w.json"
              background="transparent"
              speed="1"
              style={{ width: "100%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

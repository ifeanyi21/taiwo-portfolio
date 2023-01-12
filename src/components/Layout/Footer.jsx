import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container my-16">
      <div className="row">
        <div className="col-lg-4 mb-8">
          <h3 className="mb-8">Taiwo Oyelumade</h3>
          <p className="text-muted text-sm">
            © Taiwo, Writer {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="col-lg-4 mb-8">
          <h3 className="mb-8">Recent Articles</h3>
          <div className="text-muted text-base">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://taiwomadewriter-com.preview-domain.com/2022/11/julie-jean-evans-new-released-book-system-exposed-a-brave-book-by-an-inspiring-woman/"
              className="text-black no-underline"
            >
              A Perfect Mess by Zoe Dawson
            </a>
          </div>
          <div className="text-muted text-base my-8">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://taiwomadewriter-com.preview-domain.com/2022/08/redemption-by-carolyn-p-hartley/"
              className="text-black no-underline"
            >
              Redemption by Carolyn P Hartley
            </a>
          </div>
          <div className="text-muted text-base">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://taiwomadewriter-com.preview-domain.com/2022/02/book-press-release/"
              className="text-black no-underline"
            >
              Book Press Release
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-8">
          <h3 className="mb-8">Quick Links</h3>
          <div>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
          <div className="my-8">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
          <div>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="/https://taiwomadewriter-com.preview-domain.com/"
              className="nav-link"
            >
              My Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

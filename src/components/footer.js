import React from "react"
import logo from "../images/logo.png"
import Socials from "../components/socials"
import { animateScroll as scroll } from "react-scroll"

const scrollToTop = () => {
  scroll.scrollToTop()
}

const Footer = () => (
  <div className="footer-div">
    <img alt="logo" src={logo} className="footer-logo" onClick={scrollToTop} />
    <div className="footer-info">
      <Socials />
      <span className="footer-credits">
        © 2020 Rae V. | Authored by Bored Me
      </span>
    </div>
  </div>
)

export default Footer
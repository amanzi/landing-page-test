/** @jsx jsx */
import { jsx, Flex, Container, Link } from "theme-ui"
import PropTypes from "prop-types"
import Image from "gatsby-theme-flex/src/components/image"
import "./footer-style.css"

const Footer = ({ copyright, footerLinks, laur }) => {
  return (
    <footer className="footer no-select background--black">
      <div className="container row">
        <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-3 col-sm-12 col-xs-12">
            <div className="footer--icon">
                <Image src="logo.png"/>
            </div>
            <p className="footer--disclaimer">{copyright}<br/><br/>{laur}</p>
        </div>
        <div className="col-md-offset-0 col-lg-2 col-md-offset-1 col-md-2 col-sm-4 col-xs-6">
            <p className="footer--headline">Overview</p>
            <ul className="footer--links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/references">References</a></li>
                <li><a href="/downloads">Downloads</a></li>
            </ul>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <p className="footer--headline">Amanzi</p>
            <ul className="footer--links">
                <li><a href="https://github.com/amanzi/amanzi">GitHub</a></li>
                <li><a href="https://amanzi.github.io/amanzi">Documentation</a></li>
                <li><a href="https://amanzi.github.io/amanzi">User Guide</a></li>
            </ul>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-12">
            <p className="footer--headline">ATS</p>
            <ul className="footer--links">
                <li><a href="https://github.com/amanzi/ats">GitHub</a></li>
                <li><a href="https://amanzi.github.io/ats">Documentation</a></li>
                <li><a href="https://amanzi.github.io/ats">User Guide</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string,
  laur: PropTypes.string,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

export default Footer
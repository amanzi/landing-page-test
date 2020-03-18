/** @jsx jsx */
import { jsx, Flex, Container, Link } from "theme-ui"
import PropTypes from "prop-types"
import FooterNav from "gatsby-theme-flex/src/layout/footer-nav.js"

const Footer = ({ copyright, footerLinks }) => {
  return (
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        p: 2,
        variant: 'footer',
      }}>
      <div sx={{ p: 2, color: 'white', variant: `text.small` }}>{copyright}</div>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

export default Footer
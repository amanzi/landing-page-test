/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import PropTypes from "prop-types"
import Branding from "gatsby-theme-flex/src/misc/branding"
import HeaderNav from "gatsby-theme-flex/src/layout/header-nav"
import ColorModeSelector from "gatsby-theme-flex/src/misc/color-mode-selector"
import { useState } from "react"
import Button from "gatsby-theme-flex/src/components/button"

const Header = ({ logo, siteName, headerLinks }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <Container>
        <Flex
          sx={{
            flexDirection: [`column`, `row`],
            justifyContent: `space-between`,
            py: [4],
          }}
        >
          <Flex
            sx={{
              justifyContent: `space-between`,
              alignItems: `center`,
            }}
          >
            <Branding name={siteName} logo={logo} />
            <Button
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Toggle menu"
              sx={{
                display: [`flex`, `none`],
                alignItems: `center`,
                justifyContent: `center`,
                p: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                {showMenu ? (
                  <path
                    fillRule="evenodd"
                    d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </Button>
          </Flex>

          <div
            sx={{
              flexDirection: [`column`, `row`],
              alignItems: `center`,
              display: [showMenu ? `flex` : `none`, `flex`],
            }}
          >
            <HeaderNav links={headerLinks} />
          </div>
        </Flex>
      </Container>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string,
  siteName: PropTypes.string,
  headerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

export default Header
/** @jsx jsx */
import React from "react"
import { jsx, Container } from "theme-ui"
import PropTypes from "prop-types"
import BlockHeader from "gatsby-theme-flex/src/layout/block-header"
import BlockLinks from "gatsby-theme-flex/src/layout/block-links"

const Section = React.forwardRef(
  ({ style, heading, defaultPadding, subHeading, lead, links, children, ...props }, ref) => {

    var sOverride = {};

    if (!defaultPadding) {
      sOverride.paddingTop = "10px";
    }

    return (
      <section
        ref={ref}
        style={{...sOverride}}
        sx={{
          py: [6, 8, 10],
          ...style,
        }}
        {...props}
      >
        <Container>
          <BlockHeader subHeading={subHeading} heading={heading} lead={lead} />

          {children && (
            <div
              sx={{
                display: `flex`,
                justifyContent: `center`,
              }}
            >
              {children}
            </div>
          )}

          <BlockLinks>{links}</BlockLinks>
        </Container>
      </section>
    );
  }
)

Section.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.node,
}

export default Section
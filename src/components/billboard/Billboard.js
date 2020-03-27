/** @jsx jsx */
import React from "react"
import { jsx, Container, Styled } from "theme-ui"
import PropTypes from "prop-types"
import Section from "gatsby-theme-flex/src/blocks/section"
import Image from "gatsby-theme-flex/src/components/image"
import "./style.css"
import "./circle.css"

const Billboard = ({heading, subHeading, lead}) => {

  let images = [
    "images/billboard/dfn.png",
    "images/billboard/farea.png",
    "images/billboard/nnss.png",
    "images/billboard/coweeta.png",
    "images/billboard/barrow.png",
    "images/billboard/dfn2.png"
  ];
  
  let children = []

  for (let i = 0; i < 6; i++) {
    children.push(
      <li>
        <Image 
          src={images[i]} 
          style={{width: "120px", height: "120px"}}
        />
      </li>
    );
  }

  return (
    <div className='cn gradient shadow' style={{width: "100%", height: "600px",  overflow:"hidden"}}>
      <div style={{position: "absolute", zIndex: "2", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden", maxWidth: "100vw"}}>
        <ul className="circle-container" style={{margin: "3em"}}>
          {children}
        </ul>
      </div>
      <div style={{zIndex: "1", position: "absolute",width: "100%"}}>
        <Section heading={heading} subHeading={subHeading} lead={lead} style={{width: "100%"}}>
        </Section>
      </div>
    </div>
  );
}

export default Billboard;
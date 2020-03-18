import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.min.css";
import "./styles.css";

let groupID = 0;

const PhotoItem = ({ image, group, caption }) => (
  <div className="justified-gallery">
    <LightgalleryItem group={group} src={image} subHtml={"<h3>"+caption+"</h3>"} style={{width: "192px", height: "129.8802681992337px", top: "6px", left: "6px", opacity: "1" }}>
        <img className="gallery-img" src={image} alt="myimage" style={{ width: "199px", height: "135px", cursor: "pointer" }} />
    </LightgalleryItem>
  </div>
);

const PhotoGallery = ({heading, photos}) => {

  groupID++;
  const groupStr = "group" + groupID;

  return (
    <LightgalleryProvider
      onAfterSlide={() => {
        console.log("onAfterSlide");
      }}
      lightGallerySettings={{
        getCaptionFromTitleOrAlt: true,
        thumbnail: true,
        subHtmlSelectorRelative: true
      }}
      plugins={["lg-thumbnail.js"]}
    >
      <h1 style={{ }}>{heading}</h1>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {
        Object.keys(photos).map((p, idx) => ( 
          <div>
            <PhotoItem key={idx} image={p} group={groupStr} caption={photos[p]} />
          </div>
        ))
      }
      </div>
    </LightgalleryProvider>
  );
}

export default PhotoGallery;
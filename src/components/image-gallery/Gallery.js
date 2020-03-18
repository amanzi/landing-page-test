import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.min.css";
import "./styles.css";

const PhotoItem = ({ image, group, caption }) => (
  <div className="justified-gallery">
    <LightgalleryItem group={group} src={image} subHtml={"<h3>"+caption+"</h3>"} style={{width: "192px", height: "129.8802681992337px", top: "6px", left: "6px", opacity: "1" }}>
        <img className="gallery-img" src={image} alt="myimage" style={{ width: "199px", height: "135px", cursor: "pointer" }} />
    </LightgalleryItem>
  </div>
);

const PhotoGallery = ({heading, photos}) => {
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
      <div style={{ display: "flex", alignItems: "center" }}>
      {
        Object.keys(photos).map((p, idx) => ( 
          <PhotoItem key={idx} image={p} group="group2" caption={photos[p]} />
        ))
      }
      </div>
    </LightgalleryProvider>
  );
}

export default PhotoGallery;
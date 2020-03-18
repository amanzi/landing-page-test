import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.min.css";
import "./styles.css";

let groupID = 0;

const PhotoItem = ({ image, group, caption, thumb }) => (
  <div className="justified-gallery">
    <LightgalleryItem group={group} src={image} subHtml={"<h3>"+caption+"</h3>"} style={{width: "192px", height: "129.8802681992337px", top: "6px", left: "6px", opacity: "1" }}>
        <img className="gallery-img" src={thumb} alt="myimage" style={{ width: "199px", height: "135px", cursor: "pointer" }} />
    </LightgalleryItem>
  </div>
);

const PhotoGallery = ({photos}) => {

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
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {
        Object.keys(photos).map((key, idx) => ( 
          <div>
            <PhotoItem key={idx} image={key} group={groupStr} caption={photos[key][0]} thumb={photos[key][1]} />
          </div>
        ))
      }
      </div>
    </LightgalleryProvider>
  );
}

export default PhotoGallery;
import React from "react";
import "./styles.css";
const Cite = require('citation-js');

// Citation.js template may be one of:
//   - apa
//   - vancouver
//   - harvard1

const BibTex = ({bibInput, template = "apa" }) => {

  const citation = new Cite();
  citation.add(bibInput);

  // Convert to HTML
  let html_out = citation.format('bibliography', {
    format: 'html',
    template: template,
    land: 'en-US'
  });

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html_out}} />
    </div>
  );
}

export default BibTex;
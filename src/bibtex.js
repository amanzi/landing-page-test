import { jsx } from "theme-ui";
import React from "react";
import txt from '!!raw-loader!../static/test.txt';

// See: https://github.com/CitationGecko/gecko-react/blob/master/src/import-modules/bibtex/index.js

const Cite = require('citation-js');

function BibTex () {

  const citation = new Cite();
  citation.add(txt);

  // Convert to HTML
  let html_out = citation.format('bibliography', {
    format: 'html',
    template: 'apa',
    land: 'en-US'
  })

  return (
      <div dangerouslySetInnerHTML={{ __html: html_out}} />
  )
}

export default ({tex}) => (
  <BibTex />
)
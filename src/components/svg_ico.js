import React from 'react';
import './svg_ico.scss';


const SgvIco = ({type}) => <span
  dangerouslySetInnerHTML={{
    __html: `<svg class="ico" aria-hidden="true"><use xlink:href="#icon-${type}"></use></svg>`,
  }}
                           />;

export default SgvIco;


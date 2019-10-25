import React from 'react';
import {Image} from 'react-bootstrap';

import {randAdImage} from '../utils/banner-ads'

import './ad-window.css';

export default function AdWindow (props) {
  let {name: imgName, category: imgCategory, image: imgSRC} = randAdImage()
  let adThe

  if(imgName.startsWith('The ')) {
    adThe = "The"
    imgName = imgName.slice(4, imgName.length);
  }

  return (
    <div id="ad-window">
      <div id="ad-container">
        <div className="ad-img-container border bordre-dark mx-auto">
          <Image src={imgSRC} fluid/>
        </div>
        <div className="ad-title">
          <div className="ad-the">{adThe}</div>
          <div className="ad-name">{imgName}</div>
          <div className="ad-category">{imgCategory}</div>
        </div>
      </div>
    </div>
  )
}
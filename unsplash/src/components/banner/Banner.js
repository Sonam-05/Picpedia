import React, { Fragment, useEffect, useState } from 'react'
import "./Banner.css"
import axios from "axios"
import DateInfo from '../dateInfo/DateInfo';
import bannerImg from '../images/bannerImg.jpg'

const Banner = () => {

  const randomPhotoWithData = "https://api.unsplash.com/photos/random?client_id=E3pB90xvd0oyFTi08BIYe9d6GJFFxbGiSNBVXXGImLg&orientation=landscape";

  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    axios.get(randomPhotoWithData).then(res => {
      setBannerImage(res.data.urls.regular)
    }).catch((error) => {
      console.log(error);
    })
  }, [randomPhotoWithData])


  return <Fragment>
    <div className='bannerImage' id='banner' style={{ backgroundImage: `url(${bannerImage ? bannerImage : bannerImg})` }}>
      <DateInfo />
      <div className="bannerText">
        <h1 className='bannerHeading'>Grab your <span> Wallpapers / Pics</span> </h1>
        <p>Best place to find your wallpapers and pics.
          <br></br>  Come and grab the pics!!!
        </p>
      </div>
    </div>

  </Fragment>
}

export default Banner


// https://api.unsplash.com/photos/random?client_id=0tm0T_WDxyE-sSODkIPAmucPfR3D99hRHsUjh_TEi_Y

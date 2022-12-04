import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import PhotoItem from './PhotoItem'
import "./Photos.css"



const Photos = () => {

    const [page, setPage] = useState(1);

    const prevPageFunc = () => {
        document.getElementById('photoHeading').scrollIntoView()
        setPage(page - 1);
    }

    const nextPageFunc = () => {
        document.getElementById('photoHeading').scrollIntoView()
        setPage(page + 1);
    }

    const photosApiUrl = `https://api.unsplash.com/photos?page=${page}&client_id=0tm0T_WDxyE-sSODkIPAmucPfR3D99hRHsUjh_TEi_Y`

    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        axios.get(photosApiUrl).then((res) => {
            setAllPhotos(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [photosApiUrl])

    return <Fragment >
        <h1 className='photoHeading' id='photoHeading'>Random Wallpapers</h1>
        <div className='allPhotosContainer' id="about">
            {allPhotos?allPhotos.map((photo) => {
                return <PhotoItem key={photo.id} photo={photo} />
            }):<Loading/>}
        </div>

        <div className="btn" id='pages'>
            <input type="submit" value="Prev" id='prevBtn' onClick={prevPageFunc} disabled={page === 1 ? true : false} />
            <input type="submit" value="Next" id='nextBtn' onClick={nextPageFunc} />
        </div>


    </Fragment>
}

export default Photos

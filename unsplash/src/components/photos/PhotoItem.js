import React, { Fragment } from 'react'
import "./PhotoItem.css";


const PhotoItem = ({ photo }) => {
    return <Fragment>
        <a href={photo.links.download} target='_blank'>
            <div className="photoContainer" style={{ backgroundImage: `url(${photo.urls.regular})` }}>
                <div className="details">
                    <div className="userImage">
                        <img src={photo.user.profile_image.small} alt="" />
                    </div>
                    <div className="userDetails">
                        <span>{photo.user.name}</span>
                        <br></br><span>@{photo.user.username}</span>
                    </div>
                </div>

                <div className="userLikes">
                    <span>💖 {photo.likes}</span>
                </div>
            </div>
        </a>
    </Fragment>
}

export default PhotoItem

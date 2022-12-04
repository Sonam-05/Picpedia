import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import PhotoItem from '../photos/PhotoItem';
import "./Search.css";

const Search = (props) => {

    const [page, setPage] = useState(1);

    const prevFunc = () => {
        document.getElementById('searchHeading').scrollIntoView()
        setPage(page - 1);
    }

    const nextFunc = () => {
        document.getElementById('searchHeading').scrollIntoView()
        setPage(page + 1);
    }

    const searchUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${props.searchValue}&client_id=0tm0T_WDxyE-sSODkIPAmucPfR3D99hRHsUjh_TEi_Y`;
    console.log(searchUrl);
    console.log(props.searchValue);

    const [searchItems, setSearchItems] = useState([]);

    useEffect(() => {
        axios.get(searchUrl).then((res) => {
            // console.log(res);
            setSearchItems(res.data.results);
            console.log(res.data.results);
        }).catch(err => console.log(err))
    }, [searchUrl]);

    return <Fragment>
        <h1 className='searchHeading' id='searchHeading'>{props.searchValue}</h1>
        <div className='allPhotosContainer' id='about'>
            {searchItems.map((Items) => {
                return <PhotoItem key={Items.id} photo={Items} />
            })}
        </div>
        <div className="btn" id='pages'>
            <input type="submit" value="Prev" id='prevBtn' onClick={prevFunc} disabled={page === 1 ? true : false} />
            <input type="submit" value="Next" id='nextBtn' onClick={nextFunc} />
        </div>
    </Fragment>
}

export default Search

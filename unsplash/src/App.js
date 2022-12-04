import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner.js'
import Photos from './components/photos/Photos';
import Search from './components/search/Search';
import { useState } from 'react';



function App() {

  const [searchValue,setSearchValue] = useState("");

  const searchFunc = (e) => {
    e.preventDefault()
     setSearchValue(document.getElementById("searchInput").value);
     console.log(searchValue);
     document.getElementById("searchInput").value="";
    document.getElementById('banner').scrollIntoView()
  }

  return (
   <div>
     <Navbar searchFunc={searchFunc}/>
     <Banner />
     {!searchValue && <Photos />}
   {
    searchValue && <Search searchValue = {searchValue}/>
   } 
     <Footer />
   </div>    
  );
}

export default App;

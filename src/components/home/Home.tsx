import React from "react"
import DormCarousel from "./DormCarousel"
import DormSuggest from "./DormSuggest"
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"
import NavTest from "./NavTest"
import SearchBar from "./SearchBar"

function Home() {
    return (
        <div style={{textAlign:"center"}}>
            <Navbar />
            <Navbar2 />
            <SearchBar />
            <DormCarousel />
            <DormSuggest />
        </div>
    )
}
export default Home;
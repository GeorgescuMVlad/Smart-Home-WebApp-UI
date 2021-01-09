import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../choose-category/ChooseCategory.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../../../../Footer";

export default function FashionAssistantCategory() {

    const [showGif, setShowGif] = useState<boolean>(true);

    const [activeShoes, setactiveShoes] = useState<boolean>(false);
    const [activeT_shirts, setactiveT_shirts] = useState<boolean>(false);
    const [activeJeans, setactiveJeans] = useState<boolean>(false);
    const [activeJackets, setactiveJackets] = useState<boolean>(false);
    const [activeDresses, setactiveDresses] = useState<boolean>(false);
    const [activeSkirts, setactiveSkirts] = useState<boolean>(false);

    function handleLoadingGif() {
        setTimeout(() => {
            setShowGif(false);
        }, 1000);
    }

    useEffect(() => {
        handleLoadingGif();
    }, [showGif]);

    function toggleShoes() {
        setactiveShoes( !activeShoes );

        if(!activeShoes) {
           setactiveT_shirts(false);
           setactiveJeans(false);
           setactiveJackets(false);
           setactiveDresses(false);
           setactiveSkirts(false);
        }
    }

    function toggleT_shirts() {
        setactiveT_shirts( !activeT_shirts );

        if(!activeT_shirts) {
           setactiveShoes(false);
           setactiveJeans(false);
           setactiveJackets(false);
           setactiveDresses(false);
           setactiveSkirts(false);
        }
    }

    function toggleJeans() {
        setactiveJeans( !activeJeans );

        if(!activeJeans) {
           setactiveShoes(false);
           setactiveT_shirts(false);
           setactiveJackets(false);
           setactiveDresses(false);
           setactiveSkirts(false);
        }
    }

    function toggleJackets() {
        setactiveJackets( !activeJackets );

        if(!activeJackets) {
           setactiveShoes(false);
           setactiveT_shirts(false);
           setactiveJeans(false);
           setactiveDresses(false);
           setactiveSkirts(false);
        }
    }

    function toggleDresses() {
        setactiveDresses( !activeDresses );

        if(!activeDresses) {
           setactiveShoes(false);
           setactiveT_shirts(false);
           setactiveJeans(false);
           setactiveJackets(false);
           setactiveSkirts(false);
        }
    }

    function toggleSkirts() {
        setactiveSkirts( !activeSkirts );

        if(!activeSkirts) {
           setactiveShoes(false);
           setactiveT_shirts(false);
           setactiveJeans(false);
           setactiveJackets(false);
           setactiveDresses(false);
        }
    }

    return (
        <div>
            <Header headerText="Fashion Assistant" backArrowEnabled={true} backArrowPath={"/masterbedroom/smartmirror"}/>
            {showGif === true ?
                    <div className="loading-container">
                        <p className="loading-text">Please stay still until the scanning is over!</p>
                        <img src={loadingGif} alt="Loading Gif" className="smart-mirror-loading-gif" />
                    </div>
                    :
                    <div className="choose-category-container">

                       <p>Choose a category:</p>

                       <div className="categories">

                           <div className={activeShoes? 'active' : ''} onClick={toggleShoes}><span>Shoes</span></div>
                           <div className={activeT_shirts? 'active' : ''} onClick={toggleT_shirts}><span>T-shirts</span></div>
                           <div className={activeJeans? 'active' : ''} onClick={toggleJeans}><span>Jeans</span></div>
                           <div className={activeJackets? 'active' : ''} onClick={toggleJackets}><span>Jackets</span></div>
                           <div className={activeDresses? 'active' : ''} onClick={toggleDresses}><span>Dresses</span></div>
                           <div className={activeSkirts? 'active' : ''} onClick={toggleSkirts}><span>Skirts</span></div>

                       </div>

                       
                       <Link to={`/masterbedroom/smartmirror/fashionhassistantbrands`}>
                            <button className="smarttub-buttons">Next</button>
                       </Link>

                        
                    </div>
            }
            <Footer/>
        </div>
    );

}
import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../choose-brand/ChooseBrand.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../../../../Footer";

export default function FashionAssistantBrand() {

    const [showGif, setShowGif] = useState<boolean>(true);

    const [activeZara, setactiveZara] = useState<boolean>(false);
    const [activeVersace, setactiveVersace] = useState<boolean>(false);
    const [activeGucci, setactiveGucci] = useState<boolean>(false);
    const [activeAdidas, setactiveAdidas] = useState<boolean>(false);
    const [activePuma, setactivePuma] = useState<boolean>(false);
    const [activeLacoste, setactiveLacoste] = useState<boolean>(false);

    function handleLoadingGif() {
        setTimeout(() => {
            setShowGif(false);
        }, 1000);
    }

    useEffect(() => {
        handleLoadingGif();
    }, [showGif]);

    function toggleZara() {
        setactiveZara( !activeZara );

        if(!activeZara) {
           setactiveVersace(false);
           setactiveGucci(false);
           setactiveAdidas(false);
           setactivePuma(false);
           setactiveLacoste(false);
        }
    }

    function toggleVersace() {
        setactiveVersace( !activeVersace );

        if(!activeVersace) {
           setactiveZara(false);
           setactiveGucci(false);
           setactiveAdidas(false);
           setactivePuma(false);
           setactiveLacoste(false);
        }
    }

    function toggleGucci() {
        setactiveGucci( !activeGucci );

        if(!activeGucci) {
           setactiveZara(false);
           setactiveVersace(false);
           setactiveAdidas(false);
           setactivePuma(false);
           setactiveLacoste(false);
        }
    }

    function toggleAdidas() {
        setactiveAdidas( !activeAdidas );

        if(!activeAdidas) {
           setactiveZara(false);
           setactiveVersace(false);
           setactiveGucci(false);
           setactivePuma(false);
           setactiveLacoste(false);
        }
    }

    function togglePuma() {
        setactivePuma( !activePuma );

        if(!activePuma) {
           setactiveZara(false);
           setactiveVersace(false);
           setactiveGucci(false);
           setactiveAdidas(false);
           setactiveLacoste(false);
        }
    }

    function toggleLacoste() {
        setactiveLacoste( !activeLacoste );

        if(!activeLacoste) {
           setactiveZara(false);
           setactiveVersace(false);
           setactiveGucci(false);
           setactiveAdidas(false);
           setactivePuma(false);
        }
    }

    return (
        <div>
            <Header headerText="Fashion Assistant" backArrowEnabled={true}/>
            {showGif === true ?
                    <div className="loading-container">
                        <p className="loading-text">Searching Brands...</p>
                        <img src={loadingGif} alt="Loading Gif" className="smart-mirror-loading-gif" />
                    </div>
                    :
                    <div className="choose-category-container">

                       <p>Choose a category:</p>

                       <div className="categories">

                           <div className={activeZara? 'active' : ''} onClick={toggleZara}><span>Zara</span></div>
                           <div className={activeVersace? 'active' : ''} onClick={toggleVersace}><span>Versace</span></div>
                           <div className={activeGucci? 'active' : ''} onClick={toggleGucci}><span>Gucci</span></div>
                           <div className={activeAdidas? 'active' : ''} onClick={toggleAdidas}><span>Adidas</span></div>
                           <div className={activePuma? 'active' : ''} onClick={togglePuma}><span>Puma</span></div>
                           <div className={activeLacoste? 'active' : ''} onClick={toggleLacoste}><span>Lacoste</span></div>

                       </div>

                       
                       <Link to={`/masterbedroom/smartmirror/fashionhassistantproducts`}>
                            <button className="smarttub-buttons">Next</button>
                       </Link>

                        
                    </div>
            }
            <Footer/>
        </div>
    );

}
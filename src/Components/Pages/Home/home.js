import styles from './home.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            <section className={styles.home}>
                <section id="top" className={styles.hero}>
                    <video
                        autoPlay 
                        muted 
                        loop
                    >
                        <source src="./luxuryBackground.mov" type="video/mp4"></source>
                    </video>
                    <h2>Billionaires Vault</h2>
                </section>

                <section id="artwork" className={styles.artwork}>
                    <div className={styles.artworkContainer}>
                        <ul className={styles.artworkList}>
                            
                            <li className={styles.card}><Link to="salvatorMundi"><img src="./artImages/salvatorMundi.jpg" height="100%" width="100%"/></Link></li>
                            <li className={styles.card}><img src="./artImages/adelPortrait.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/cardPlayers.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/femmesAlger.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/interchange.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/marryMe.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/masterpiece.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/no6.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/nuCouche.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/number17a.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/rembrandtBearer.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/serpents2.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/shotSage.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/theScream.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./artImages/threeStudies.avif" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>

                <section id="collectables" className={styles.collectables}>
                    <div className={styles.collectablesContainer}>
                        <ul className={styles.collectablesList}>
                            <li className={styles.card}><img src="./tradingCard/pikachu.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/babeRuth53.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/blackLotus.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/bowmanMickeyMantle1951.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/curryRookiePatch.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/lebronRookiePatch.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/wagnerPSA2.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/lukaRookieLogoman.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/mahomesRookie.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/mantlePSA9.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/mikeTrout2009Bowman.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/OhtaniJudgeLogoman.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/ohtaniTopps.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./tradingCard/wagner725.jpg" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>

                <section id="locations" className={styles.locations}>
                     <div className={styles.locationsContainer}>
                        <ul className={styles.locationsList}>
                            <li className={styles.card}><img src="./locations/monaco1.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/aspen.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/como.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/dubai.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/geneva.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/hamptons.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/hongKong.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/london.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/mantlePSA9" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/nyc.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/paris.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/singapore.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/tokyo.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/tropez.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./locations/zurich.jpg" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="jewlery" className={styles.jewlery}>
                     <div className={styles.jewleryContainer}>
                        <ul className={styles.jewleryList}>
                            <li className={styles.card}><img src="./jewelry/hopeDiamond.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/autumnPair.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/BMjosephine.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/DBblue.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/Gpink.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/huttoJadeite.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/Ldiamond.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/marieAntoinette.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/OPblue.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/orangeDiamond.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/peacockBrooch.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/pinkStarDiamond.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/princie.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/WGdiamond.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./jewelry/WpinkStar.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="food" className={styles.food}>
                     <div className={styles.foodContainer}>
                        <ul className={styles.foodList}>
                            <li className={styles.card}><img src="./food/almasCaviar.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/birdSoup.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/bluefin.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/casuMarzu.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/fleureBurger.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/fugu.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/iberico.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/pule.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/saffron.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/vanilla.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/wagyu.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/whiteTruffle.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/yabariKing.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./food/" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="salary" className={styles.salary}>
                     <div className={styles.salaryContainer}>
                        <ul className={styles.salaryList}>
                            <li className={styles.card}><img src="./salary/messi.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Cook.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Cristiano.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Curry.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Federer.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Kylie.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Lebron.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Mahomes.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Musk.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Nadella.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Pichai.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/rock.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Swift.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./salary/Tiger.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="properties" className={styles.properties}>
                     <div className={styles.propertiesContainer}>
                        <ul className={styles.propertiesList}>
                            <li className={styles.card}><img src="./properties/antilaMumbai.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/432park.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/bulles.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/chateauxXIV.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/ellison.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/fairfield.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/hearst.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/laFleur.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/oneHyde.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/ordeon.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/theOne.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/villaLeopolda.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/witanhurst.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./properties/" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="projects" className={styles.projects}>
                     <div className={styles.projectsContainer}>
                        <ul className={styles.projectsList}>
                            <li className={styles.card}><img src="./projects/iss.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/alBait.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/alMaktoum.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/baySands.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/cosmopolitan.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/dubailand.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/economicCity.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/eurotunnel.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/gorgesDam.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/itaipu.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/kingPark.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/palmJumerah.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/songdo.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/worldtrade.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./projects/zhihaiBridge.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="social" className={styles.social}>
                     <div className={styles.socialContainer}>
                        <ul className={styles.socialList}>
                            <li className={styles.card}><img src="./VIP/LIV.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/bootsy.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/cavalli.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/drais.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/hakkasan.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/laVie.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/mansionDubai.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/marquee.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/omnia.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/pacha.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/surrender.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/theIvy.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/white.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./VIP/xs.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="transport" className={styles.transport}>
                     <div className={styles.transportContainer}>
                        <ul className={styles.transportList}>
                            <li className={styles.card}><img src="./transport/airbusA380.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/7478VIP.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/azzam.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/boatTail.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/bombardier.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/dragon.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/eclipseYacht.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/gulfStream.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/historySupreme.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/indiaexpress.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/noire.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/orientExpress.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/topaz.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/virgin.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img src="./transport/zonda.jpg" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
};

export default Home;
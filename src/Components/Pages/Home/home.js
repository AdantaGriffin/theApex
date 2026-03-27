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
                            
                            <li className={styles.card}><Link to="salvatorMundi"><img alt="" src="./artImages/salvatorMundi.jpg" height="100%" width="100%"/></Link></li>
                            <li className={styles.card}><img alt="" src="./artImages/adelPortrait.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/cardPlayers.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/femmesAlger.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/interchange.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/marryMe.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/masterpiece.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/no6.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/nuCouche.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/number17a.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/rembrandtBearer.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/serpents2.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/shotSage.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/theScream.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./artImages/threeStudies.avif" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>

                <section id="collectables" className={styles.collectables}>
                    <div className={styles.collectablesContainer}>
                        <ul className={styles.collectablesList}>
                            <li className={styles.card}><img alt="" src="./tradingCard/pikachu.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/babeRuth53.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/blackLotus.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/bowmanMickeyMantle1951.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/curryRookiePatch.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/lebronRookiePatch.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/wagnerPSA2.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/lukaRookieLogoman.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/mahomesRookie.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/mantlePSA9.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/mikeTrout2009Bowman.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/OhtaniJudgeLogoman.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/ohtaniTopps.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./tradingCard/wagner725.jpg" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>

                <section id="locations" className={styles.locations}>
                     <div className={styles.locationsContainer}>
                        <ul className={styles.locationsList}>
                            <li className={styles.card}><img alt="" src="./locations/monaco1.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/aspen.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/como.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/dubai.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/geneva.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/hamptons.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/hongKong.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/london.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/mantlePSA9" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/nyc.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/paris.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/singapore.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/tokyo.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/tropez.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./locations/zurich.jpg" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="jewlery" className={styles.jewlery}>
                     <div className={styles.jewleryContainer}>
                        <ul className={styles.jewleryList}>
                            <li className={styles.card}><img alt="" src="./jewelry/hopeDiamond.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/autumnPair.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/BMjosephine.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/DBblue.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/Gpink.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/huttoJadeite.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/Ldiamond.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/marieAntoinette.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/OPblue.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/orangeDiamond.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/peacockBrooch.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/pinkStarDiamond.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/princie.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/WGdiamond.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./jewelry/WpinkStar.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="food" className={styles.food}>
                     <div className={styles.foodContainer}>
                        <ul className={styles.foodList}>
                            <li className={styles.card}><img alt="" src="./food/almasCaviar.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/birdSoup.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/bluefin.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/casuMarzu.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/fleureBurger.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/fugu.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/iberico.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/pule.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/saffron.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/vanilla.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/wagyu.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/whiteTruffle.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/yabariKing.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./food/" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="salary" className={styles.salary}>
                     <div className={styles.salaryContainer}>
                        <ul className={styles.salaryList}>
                            <li className={styles.card}><img alt="" src="./salary/messi.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Cook.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Cristiano.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Curry.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Federer.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Kylie.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Lebron.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Mahomes.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Musk.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Nadella.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Pichai.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/rock.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Swift.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./salary/Tiger.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="properties" className={styles.properties}>
                     <div className={styles.propertiesContainer}>
                        <ul className={styles.propertiesList}>
                            <li className={styles.card}><img alt="" src="./properties/antilaMumbai.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/432park.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/bulles.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/chateauxXIV.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/ellison.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/fairfield.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/hearst.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/laFleur.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/oneHyde.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/ordeon.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/theOne.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/villaLeopolda.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/witanhurst.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./properties/" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="projects" className={styles.projects}>
                     <div className={styles.projectsContainer}>
                        <ul className={styles.projectsList}>
                            <li className={styles.card}><img alt="" src="./projects/iss.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/alBait.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/alMaktoum.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/baySands.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/cosmopolitan.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/dubailand.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/economicCity.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/eurotunnel.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/gorgesDam.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/itaipu.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/kingPark.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/palmJumerah.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/songdo.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/worldtrade.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./projects/zhihaiBridge.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="social" className={styles.social}>
                     <div className={styles.socialContainer}>
                        <ul className={styles.socialList}>
                            <li className={styles.card}><img alt="" src="./VIP/LIV.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/bootsy.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/cavalli.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/drais.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/hakkasan.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/laVie.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/mansionDubai.avif" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/marquee.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/omnia.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/pacha.png" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/surrender.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/theIvy.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/white.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./VIP/xs.webp" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
                <section id="transport" className={styles.transport}>
                     <div className={styles.transportContainer}>
                        <ul className={styles.transportList}>
                            <li className={styles.card}><img alt="" src="./transport/airbusA380.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/7478VIP.jpeg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/azzam.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/boatTail.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/bombardier.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/dragon.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/eclipseYacht.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/gulfStream.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/historySupreme.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/indiaexpress.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/noire.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/orientExpress.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/topaz.jpg" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/virgin.webp" height="100%" width="100%"/></li>
                            <li className={styles.card}><img alt="" src="./transport/zonda.jpg" height="100%" width="100%"/></li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
};

export default Home;
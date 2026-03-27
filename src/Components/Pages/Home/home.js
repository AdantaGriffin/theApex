import styles from './home.module.scss';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [paint, setPaint] = useState([]);
    useEffect(() => {
        async function getPaint(){
        const response = await fetch('./data.json');
        const result = await response.json();
        //console.log(result.paint)
        setPaint(result.paint)
    }
    getPaint()
    }, []);


    const [sculptures, setSculptures] = useState([]);
    useEffect(() => {
        async function getSculptures(){
            const response = await fetch('./data.json');
            const result = await response.json();
            setSculptures(result.sculptures)
            //console.log(result.sculptures)
        }
        getSculptures()
    }, []);

    const [sportCards, setSportCards] = useState([]);
    useEffect(() => {
        async function getSportCards(){
            const response = await fetch('./data.json');
            const result = await response.json();
            setSportCards(result.sportTrading)
        }
        getSportCards()
    }, []);

    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        async function getPokemon(){
            const response = await fetch('./data.json');
            const result = await response.json();
            setPokemon(result.pokemon)
        }
        getPokemon()
    }, []);

    const [coins, setCoins] = useState([]);
    useEffect(() => {
        async function getCoins(){
            const response = await fetch('./data.json');
            const result = await response.json();
            setCoins(result.coins)
        }
        getCoins()
    }, [])
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
                            {paint?.map(x => (
                                <li key={x.id} className={styles.card}>
                                    <Link to={x.id}><img alt={x.title} src={x.image} height="100%" width="100%"/></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="sculptures" className={styles.sculptures}>
                    <div className={styles.sculpturesContainer}>
                        <ul className={styles.sculpturesList}>
                            {sculptures?.map(x => (
                                <li key={x.id} className={styles.card}>
                                    <Link to={x.id}><img alt={x.title} src={x.image} height="100%" width="100%"/></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="sportCards" className={styles.sportCards}>
                     <div className={styles.sportCardsContainer}>
                        <ul className={styles.sportCardsList}>
                            {sportCards?.map(x => (
                                <li key={x.id} className={styles.card}>
                                    <Link to={x.id}><img alt={x.title} src={x.image} height="100%" width="100%"/></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="pokemon" className={styles.pokemon}>
                     <div className={styles.pokemonContainer}>
                        <ul className={styles.pokemonList}>
                            {pokemon?.map(x => (
                                <li key={x.id} className={styles.card}>
                                    <Link to={x.id}><img alt={x.title} src={x.image} height="100%" width="100%"/></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section id="coins" className={styles.coins}>
                     <div className={styles.coinsContainer}>
                        <ul className={styles.coinsList}>
                            {coins?.map(x => (
                                <li key={x.id} className={styles.card}>
                                    <Link to={x.id}><img alt={x.title} src={x.image} height="100%" width="100%"/></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
};

export default Home;
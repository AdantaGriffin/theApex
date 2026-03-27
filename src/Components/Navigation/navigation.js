
import styles from './navigation.module.scss';
import React from 'react';
import {HashLink} from 'react-router-hash-link';

function Navigation(){
    return(
        <>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li><HashLink to="/#artwork">artwork</HashLink></li>
                    <li><HashLink to="/#collectables">collectables</HashLink></li>
                    <li><HashLink to="/#locations">locations</HashLink></li>
                    <li><HashLink to="/#jewlery">jewelry</HashLink></li>
                    <li><HashLink to="/#food">food</HashLink></li>
                    <li><HashLink to="/#salary">salary</HashLink></li>
                    <li><HashLink to="/#properties">properties</HashLink></li>
                    <li><HashLink to="/#projects">projects</HashLink></li>
                    <li><HashLink to="/#social">social</HashLink></li>
                    <li><HashLink to="/#transport">transport</HashLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;
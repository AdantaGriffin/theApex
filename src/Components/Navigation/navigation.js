
import styles from './navigation.module.scss';
import React from 'react';
import {HashLink} from 'react-router-hash-link';

function Navigation(){
    return(
        <>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li><HashLink to="/#artwork">artwork</HashLink></li>
                    <li><HashLink to="/#sculptures">sculptures</HashLink></li>
                    <li><HashLink to="/#sportCards">sport trading</HashLink></li>
                    <li><HashLink to="/#pokemon">pokemon</HashLink></li>
                    <li><HashLink to="/#coins">coins</HashLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;
import styles from './header.module.scss';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.headerLogo}>
                    <HashLink to="/#top">
                        <h1>The Apex</h1>
                    </HashLink>
                </div>
            </header>
        </>
    )
};

export default Header
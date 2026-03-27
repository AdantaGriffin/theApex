import styles from './details.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';

function Details(){
    const {id} = useParams();
    return(
        <>
            <section className={styles.details}>{id}</section>
        </>
    )
};

export default Details;
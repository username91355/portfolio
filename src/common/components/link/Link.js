import React from 'react';
import styles from './Link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Link = ({title,link,linkIcon}) => {

    return (
        <div className={styles.link_wrapper}>
            <a className={styles.link_element} href={link}>{title}</a>
            {
                linkIcon && <FontAwesomeIcon className={styles.link_icon}
                                             icon={faLink}
                                             size={"sm"}/>
            }
        </div>
    );
};

export default Link;
import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = ({fullName}) => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={`${styleContainer.container} ${styles.footer_container}`}>
                <h2 className={styles.footer_name}>{fullName}</h2>
                <div className={styles.footer_boxs}>
                    <a className={styles.footer_box} href={'#'}>
                        <FontAwesomeIcon icon={faTelegram} size={"2x"}/>
                    </a>
                    <a className={styles.footer_box} href={'#'}>
                        <FontAwesomeIcon icon={faWhatsapp} size={"2x"}/>
                    </a>
                    <a className={styles.footer_box} href={'#'}>
                        <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    </a>
                    <a className={styles.footer_box} href={'#'}>
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
                    </a>
                </div>
                <div className={styles.footer_copyright}>
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                    <span>All rights reserved 2021</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
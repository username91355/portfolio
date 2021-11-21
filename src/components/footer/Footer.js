import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import styles from "./Footer.module.css";

const Footer = ({fullName}) => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={`${styleContainer.container} ${styles.footer_container}`}>
                <h2 className={styles.footer_name}>{fullName}</h2>
                <div className={styles.footer_boxs}>
                    <div className={styles.footer_box}></div>
                    <div className={styles.footer_box}></div>
                    <div className={styles.footer_box}></div>
                    <div className={styles.footer_box}></div>
                </div>
                <div className={styles.footer_copyright}>
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                    <span>All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
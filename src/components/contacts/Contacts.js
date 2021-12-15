import React from 'react';
import styles from './Contacts.module.scss'
import Tilte from "../../common/components/title/Tilte";

const Contacts = () => {
    return (
        <div className={styles.contacts_wrapper}>
            <div className={styles.contacts_container}>
                <Tilte title={'Contacts'}/>
                <form className={styles.contacts_form}
                      action="#">
                    <input placeholder={'Name *'} type="text"/>
                    <input placeholder={'Email *'} type="text"/>
                    <textarea placeholder={'Your message *'}
                              cols="30"
                              rows="10"/>
                    <input className={styles.contacts_button} type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
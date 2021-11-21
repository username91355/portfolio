import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts_wrapper}>
            <div className={styles.contacts_container}>
                <h2 className={styles.contacts_title}>Contacts</h2>
                <form className={styles.contacts_form}
                      action="#">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea cols="30" rows="10"></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
import React, {useState} from 'react';
import styles from './Contacts.module.scss'
import Tilte from "../../common/components/title/Tilte";

const Contacts = () => {
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div id={'contacts'} className={styles.contacts_wrapper}>
            <div className={styles.contacts_container}>
                <Tilte title={'Contacts'}/>
                <form className={styles.contacts_form}
                      action={`mailto:balyaevds@gmail.com?subject=${subject} Contact email: ${email}&body=${message}`}
                      method="post">
                    <input placeholder={'Name *'}
                           value={subject}
                           onChange={(e) => setSubject(e.currentTarget.value)}
                           type="text"
                           name={'subject'}/>
                    <input placeholder={'Email *'}
                           value={email}
                           onChange={(e) => setEmail(e.currentTarget.value)}
                           type="text"
                           name={'email'}/>
                    <textarea placeholder={'Your message *'}
                              value={message}
                              onChange={(e) => setMessage(e.currentTarget.value)}
                              name={'message'}
                              cols="30"
                              rows="10"/>
                    <input className={styles.contacts_button} type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
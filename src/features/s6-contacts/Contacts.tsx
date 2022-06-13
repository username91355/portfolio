import React from 'react';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
	return (
		<section className={styles.contacts}>
			<h2>Заголовок</h2>
			<form className={styles.form}>
				<input type='text'/>
				<input type='email'/>
				<input type='text'/>
				<textarea>

				</textarea>
				<button>Submit</button>
			</form>
		</section>
	);
};

export default Contacts;
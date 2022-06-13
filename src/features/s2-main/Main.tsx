import React from 'react';
import styles from './Main.module.scss';
import avatar from './../../assets/images/i2png.png';
import ReactTypingEffect from 'react-typing-effect';
import {FaLinkedin, FaTelegram, FaWhatsapp} from 'react-icons/fa';

const Main: React.FC = () => {
	return (
		<section className={styles.main}>
			<article className={styles.main__header}>
				<h1 className={styles.main__header_text}>
					Balyaev Dmitriy
				</h1>
				<ReactTypingEffect
					className={styles.main__header_typing}
					text={['Frontend developer']}
				/>
				<ul className={styles.main__contacts}>
					<li><FaWhatsapp size={'2rem'}/></li>
					<li><FaLinkedin size={'2rem'}/></li>
					<li><FaTelegram size={'2rem'}/></li>
				</ul>
			</article>
			<div className={styles.main__img}>
				<img
					className={styles.main__img}
					src={avatar}
					alt='avatar'
				/>
			</div>

		</section>
	);
}

export default Main;
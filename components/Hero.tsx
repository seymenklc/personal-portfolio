import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Hero.module.css';
import config from "../config";

export default function Hero() {
    return (
        <div className={styles.container}>
            <Image
                src='/images/avatar.png'
                width={290}
                height={290}
                alt='avatar'
            />
            <div className={styles.textWrapper}>
                <div>
                    <h2>Hey, I&apos;m {config.name}!</h2>
                    <small>{config.jobTitle}</small>
                </div>
                <p>
                    {config.description}
                    <Link href='/about'>
                        <span>{' '}You can learn more about him <a>here</a></span>
                    </Link>.
                </p>
            </div>
        </div>
    );
}

import Image from 'next/image';
import { useRouter } from 'next/router';
// components
import Socials from '../Socials';
// styles & images
import styles from '../../styles/Footer.module.css';
import nextLogo from '../../public/images/nextjs-logo.svg';
import Link from 'next/link';
import config from '../../config';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Link href={config.contact.links.portofolio}>
                <div className={styles.showcase}>
                    <span>Built with</span>
                    <Image
                        width={45}
                        height={45}
                        src={nextLogo}
                        alt='nextjs-logo'
                    />
                </div>
            </Link>
            <div className={styles.socials}>
                <Socials />
            </div>
        </div>
    );
}
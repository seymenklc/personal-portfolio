import Link from 'next/link';
import config from '../../config';
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.css';
import BiEnvelope from '../icons/BiEnvelope';

export default function Navbar() {
    const { pathname } = useRouter();

    const currPath = pathname.includes('/blog/posts');
    const linkTo = currPath ? '/' : '/blog/posts';

    return (
        <div className={styles.container}>
            <Link href='/'>
                <h1 className={styles.header}>
                    {config.name} <span>{config.surname}</span>
                </h1>
            </Link>
            <div>
                <Link href={linkTo}>
                    <a className={styles.blog}>
                        {currPath ? 'Home' : 'Blog'}
                    </a>
                </Link>
            </div>
        </div>
    );
}
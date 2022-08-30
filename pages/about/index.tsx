import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from '../../styles/About.module.css';
import PageHead from "../../components/PageHead";
import config from "../../config";
import Technologies from "../../components/Technologies";
import { databases, frameworks, languages, libraries } from "../../components/icons/tech";

export default function About() {
    // const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000);
    // }, [router]);

    return (
        <div className={styles.container}>
            <PageHead title='About' />
            <div className={styles.textWrapper}>
                <h3>About Me</h3>
                <p>{config.about}</p>
            </div>
            <div className={styles.showcase}>
                <Technologies
                    title="Languages"
                    iconArr={languages}
                />
                <Technologies
                    title="Frameworks"
                    iconArr={frameworks}
                />
                <Technologies
                    title="Databases"
                    iconArr={databases}
                />
                <Technologies
                    title="Libraries"
                    iconArr={libraries}
                />
            </div>
        </div>
    );
}

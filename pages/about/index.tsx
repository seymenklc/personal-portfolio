import config from "../../config";
// styling
import styles from '../../styles/About.module.css';
// components
import PageHead from "../../components/PageHead";
import Technologies from "../../components/Technologies";
import { databases, frameworks, languages, libraries } from "../../components/icons/tech";

export default function About() {
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
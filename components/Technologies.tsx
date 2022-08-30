import Technology from './Technology';
import styles from '../styles/Technologies.module.css';

type Props = {
    iconArr: any[];
    title?: string;
};

export default function Technologies({ iconArr, title }: Props) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.icons}>
                {iconArr.map((ico, idx) => (
                    <Technology key={idx} icon={ico} />
                ))}
            </div>
        </div>
    );
}
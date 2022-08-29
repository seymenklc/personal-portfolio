import FirebaseIcon from './icons/tech/Firebase';
import JavascriptIcon from './icons/tech/Javascript';
import MongodbIcon from './icons/tech/Mongodb';
import NextjsIcon from './icons/tech/Nextjs';
import NodejsIcon from './icons/tech/Nodejs';
import ReactIcon from './icons/tech/React';
import ReduxIcon from './icons/tech/Redux';
import TypescriptIcon from './icons/tech/TypescriptIcon';
import styles from '../styles/Technologies.module.css';

const iconStyles = { width: '40px', height: '40px' };

export default function Technologies() {
    return (
        <div className={styles.container}>
            <h4>Current Stack</h4>
            <div className={styles.icons}>
                <JavascriptIcon className='icon' style={{ ...iconStyles }} />
                <TypescriptIcon className='icon' style={{ ...iconStyles }} />
                <ReactIcon className='icon' style={{ ...iconStyles }} />
                <ReduxIcon className='icon' style={{ ...iconStyles }} />
                <NextjsIcon className='icon' style={{ ...iconStyles }} />
                <FirebaseIcon className='icon' style={{ ...iconStyles }} />
                <MongodbIcon className='icon' style={{ ...iconStyles }} />
                <NodejsIcon className='icon' style={{ ...iconStyles }} />
            </div>
        </div>
    );
}

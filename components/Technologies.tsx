import FirebaseIcon from './icons/tech/Firebase';
import JavascriptIcon from './icons/tech/Javascript';
import MongodbIcon from './icons/tech/Mongodb';
import NextjsIcon from './icons/tech/Nextjs';
import NodejsIcon from './icons/tech/Nodejs';
import ReactIcon from './icons/tech/React';
import ReduxIcon from './icons/tech/Redux';
import TypescriptIcon from './icons/tech/TypescriptIcon';
import TailwindcssIcon from './icons/tech/Tailwind';
import ReactRouterIcon from './icons/tech/ReactRouter';
import GraphqlIcon from './icons/tech/Graphql';
import Html5Icon from './icons/tech/Html5';
import Css3Icon from './icons/tech/Css3';
import styles from '../styles/Technologies.module.css';
import VueIcon from './icons/tech/Vue';
import PythonIcon from './icons/tech/Python';
import ExpressIcon from './icons/tech/Express';

const iconStyles = { width: '40px', height: '40px' };

export default function Technologies() {
    return (
        <div className={styles.container}>
            <h3>Current Stack</h3>
            <div className={styles.icons}>
                <PythonIcon className='icon' style={{ ...iconStyles }} />
                <JavascriptIcon className='icon' style={{ ...iconStyles }} />
                <TypescriptIcon className='icon' style={{ ...iconStyles }} />
                <VueIcon className='icon' style={{ ...iconStyles }} />
                <ReactIcon className='icon' style={{ ...iconStyles }} />
                <NextjsIcon className='icon' style={{ ...iconStyles }} />
                <GraphqlIcon className='icon' style={{ ...iconStyles }} />
                <ReduxIcon className='icon' style={{ ...iconStyles }} />
                <ExpressIcon className='icon' style={{ ...iconStyles }} />
                <MongodbIcon className='icon' style={{ ...iconStyles }} />
                <TailwindcssIcon className='icon' style={{ ...iconStyles }} />
                <FirebaseIcon className='icon' style={{ ...iconStyles }} />
                <Html5Icon className='icon' style={{ ...iconStyles }} />
                <Css3Icon className='icon' style={{ ...iconStyles }} />
                <NodejsIcon className='icon' style={{ ...iconStyles }} />
                <ReactRouterIcon className='icon' style={{ ...iconStyles }} />
            </div>
        </div>
    );
}

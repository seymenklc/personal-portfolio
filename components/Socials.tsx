import React from 'react';
import Link from 'next/link';
import config from '../config';
// icon components
import BiEnvelope from './icons/BiEnvelope';
import BiGithub from './icons/BiGithub';
import BiLinkedin from './icons/BiLinkedin';

const iconStyles = { width: '25px', height: '25px' };

export default function Socials() {
    return (
        <React.Fragment>
            <Link href={`mailto:${config.contact.mail}`}>
                <a aria-label='email'>
                    <BiEnvelope className='icon' style={{ ...iconStyles }} />
                </a>
            </Link>
            <Link href={config.contact.links.github}>
                <a target='_blank' aria-label='github'>
                    <BiGithub className='icon' style={{ ...iconStyles }} />
                </a>
            </Link>
            <Link href={config.contact.links.linkedin}>
                <a target="_blank" aria-label='linkedin'>
                    <BiLinkedin className='icon' style={{ ...iconStyles }} />
                </a>
            </Link>
        </React.Fragment>
    );
}
import Head from 'next/head';
import config from '../config';

type Props = {
    title: string;
};

export default function PageHead({ title }: Props) {
    const fullName = config.name + ' ' + config.surname + ' ' + ' | ';

    return (
        <Head>
            <title>{fullName + title}</title>
        </Head>
    );
}

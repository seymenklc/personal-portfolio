import moment from 'moment';
import styles from '../../../styles/PostDetails.module.css';
import client from '../../../apollo-client';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GET_ALL_POSTS, GET_INDIVDUAL_POST } from '../../../graphql/queries';
import type { PostsType } from '../../../types';
// components
import PageHead from '../../../components/PageHead';
import BiArrowLeft from '../../../components/icons/BiArrowLeft';

type Props = {
    post: {
        id: string;
        attributes: {
            body: MDXRemoteSerializeResult;
            description: string;
            title: string;
            createdAt: Date;
        };
    };
};

export default function PostDetails({ post }: Props) {
    const router = useRouter();

    const handlePushBack = () => router.push('/blog/posts');

    const { body, createdAt, title } = post.attributes;

    return (
        <div>
            <PageHead title={title} />
            <div className={styles.container}>
                <div className={styles.head}>
                    <div>
                        <span onClick={handlePushBack}>
                            <BiArrowLeft style={{ width: '20px', height: '20px' }} />
                        </span>
                        <h2>{title}</h2>
                    </div>
                    <span>{moment(new Date(createdAt)).format('MMM Do Y')}</span>
                </div>
                <p><MDXRemote {...body} /></p>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const { data }: PostsType = await client.query({
        query: GET_ALL_POSTS,
    });

    const paths = data.posts.data.map(post => {
        return { params: { slug: post.attributes.slug } };
    });

    return { paths, fallback: false };
}

type Context = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Context) {
    const { data } = await client.query({
        query: GET_INDIVDUAL_POST,
        variables: { slug: String(params.slug) }
    });

    const { id, attributes } = data.posts.data[0];
    const html = await serialize(attributes.body);

    const post = {
        id,
        attributes: { ...attributes, body: html }
    };

    return {
        props: { post },
        revalidate: 18000 // 5 hours
    };
}
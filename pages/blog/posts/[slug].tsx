import fs from 'fs';
import moment from 'moment';
import matter from 'gray-matter';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// styling
import styles from '../../../styles/PostDetails.module.css';
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
    const files = fs.readdirSync("data");

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        }
    }));

    return { paths, fallback: false };
}

type Context = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Context) {
    const fileName = fs.readFileSync(`data/${params.slug}.md`, 'utf-8');

    const { data: frontmatter, content } = matter(fileName);

    const html = await serialize(content);

    const post = {
        id: uuid(),
        attributes: { ...frontmatter, body: html }
    };

    return {
        props: { post },
    };
}
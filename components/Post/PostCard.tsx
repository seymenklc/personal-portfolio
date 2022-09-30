import Link from 'next/link';
import moment from 'moment';
import styles from '../../styles/Posts.module.css';
import type { PostType } from '../../types';

type Props = {
    post: PostType;
};

export default function Post({ post }: Props) {
    const { description, title, createdAt } = post.attributes;

    return (
        <Link href={`/blog/posts/${post.slug}`}>
            <div className={styles.card}>
                <div>
                    <h3>{title}</h3>
                    <span>{moment(new Date(createdAt)).format('MMM Do Y')}</span>
                </div>
                <p>{description}</p>
            </div>
        </Link>
    );
}
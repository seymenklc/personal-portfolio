import { PostCard } from '.';
import styles from '../../styles/Posts.module.css';
import type { PostType } from '../../types';

type Props = {
    posts: PostType[];
};

export default function Posts({ posts }: Props) {

    if (!posts.length) return <p>error</p>;

    return (
        <div className={styles.container}>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
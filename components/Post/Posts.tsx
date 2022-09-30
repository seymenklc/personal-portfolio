import { PostCard } from '.';
import styles from '../../styles/Posts.module.css';
import type { PostsType, PostType } from '../../types';

type Props = {
    posts: PostsType | any;
};

export default function Posts({ posts }: Props) {
    if (!posts.length) return <p>error</p>;

    return (
        <div className={styles.container}>
            {posts.map((post: PostType, idx: string) => (
                <PostCard key={idx} post={post} />
            ))}
        </div>
    );
}
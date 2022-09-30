import fs from 'fs';
import React from 'react';
import matter from 'gray-matter';
import type { PostsType } from '../../../types';
// components
import { Posts } from '../../../components/Post';
import PageHead from '../../../components/PageHead';

type Props = {
    posts: PostsType;
};

export default function Blog({ posts }: Props) {
    return (
        <React.Fragment>
            <PageHead title='Blog' />
            <Posts posts={posts} />
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(`data`);

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`data/${fileName}`, 'utf-8');
        const { data: attributes } = matter(readFile);

        return { slug, attributes };
    });

    return {
        props: {
            posts: posts
        }
    };;
};
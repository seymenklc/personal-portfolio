import React from 'react';
import client from '../../../apollo-client';
import type { PostsType } from '../../../types';
// components
import PageHead from '../../../components/PageHead';
import { Posts } from '../../../components/Post';
// graphql 
import { GET_ALL_POSTS } from '../../../graphql/queries';

type Props = {
    posts: {
        data: PostsType | any;
    };
};

export default function Blog({ posts }: Props) {
    return (
        <React.Fragment>
            <PageHead title='Blog' />
            <Posts posts={posts.data} />
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_ALL_POSTS
    });

    return {
        props: { posts: data.posts }
    };
}
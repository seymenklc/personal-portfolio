import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
    query GetAllPosts {
        posts {
            data {
                id
                attributes {
                    title
                    description
                    body
                    slug
                    createdAt
                    thumbnail {
                        data {
                            attributes {
                                formats 
                                width
                                height
                                url
                                previewUrl
                            }
                        }
                    }
                    media {
                        data {
                            id
                            attributes {
                                url
                                previewUrl
                                width
                                height
                            }
                        }
                    }
                }
            }
        }
    }
`;

const GET_INDIVDUAL_POST = gql`
    query GetPost($slug: String!) {
        posts(filters: { slug: { eq: $slug } }) {
            data {
                id
                attributes {
                    title
                    body
                    description
                    createdAt
                }
            }
        }
    }
`;

// const GET_RECENT_POSTS = gql`
//     query GetPostDetails {
//       posts( orderBy: createdAt_ASC last: 3) {
//         data {
//             id
//             attributes {
//                 title
//                 description
//                 body
//                 slug
//                 createdAt
//         }
//       }
//     }
// }
//   `;

export {
    GET_ALL_POSTS,
    GET_INDIVDUAL_POST,
};
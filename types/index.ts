
type Attributes = {
    title: string;
    createdAt: string;
    description: string;
};

type PostsType = {
    posts: PostType[];
};

type PostType = {
    slug: string;
    attributes: Attributes;
};


export type {
    PostsType,
    PostType,
    Attributes
};
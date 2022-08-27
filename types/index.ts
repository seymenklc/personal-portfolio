type Media = {
    data: {
        id: number;
        attributes: {
            url: string;
            previewUrl: string;
            width: number;
            height: number;
        };
    };
};

type Thumbnail = {
    data: {
        attributes: {
            formats: {
                thumbnail: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path?: any;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                };
            };
            height: number;
            width: number;
            previewUrl: string;
            url: string;
        };
    };
};

type Attributes = {
    title: string;
    createdAt: string;
    description: string;
    body: string;
    slug: string;
    thumbnail: Thumbnail;
    media?: Media;
};

type PostsType = {
    data: {
        posts: {
            data: {
                id: number;
                attributes: Attributes;
            }[];
        };
    };
};

type PostType = {
    id: number;
    attributes: Attributes;
};


export type {
    PostsType,
    PostType,
    Attributes
};
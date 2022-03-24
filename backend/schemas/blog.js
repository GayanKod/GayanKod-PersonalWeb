export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },

        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'mediumLink',
            title: 'Medium Link',
            type: 'string',
        },
        {
            name: 'hashnodeLink',
            title: 'Hashnode Link',
            type: 'string',
        },
        {
            name: 'devLink',
            title: 'Dev.to Link',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },

    ],
};

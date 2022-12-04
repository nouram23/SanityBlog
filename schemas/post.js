export default {
  name: "post",
  title: "Нийтлэл",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Нэр",
      type: "string",
    },
    {
      name: "description",
      title: "Тайлбар",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "author",
      title: "Зохиогч",
      type: "reference",
      to: { type: "author" },
    },

    {
      name: "categories",
      title: "Ангилал",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Огноо",
      type: "datetime",
    },
    {
      name: "content",
      title: "content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          type: "youtube",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};

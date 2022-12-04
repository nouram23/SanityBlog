export default {
  name: "author",
  title: "Нийтлэгч",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Нэр",
      type: "string",
    },

    {
      name: "image",
      title: "Зураг",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Био",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

export default {
  name: "comments",
  title: "Төгсөгчдийн сэтгэгдэл",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Төгсөгчдийн нэр",
      type: "string",
    },
    {
      name: "comment",
      title: "Сэтгэгдэл",
      type: "text",
    },
    {
      name: "rate",
      title: "Үнэлгээ",
      type: "number",
    },
  ],
};

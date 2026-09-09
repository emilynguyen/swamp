import { defineArrayMember, defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "menus",
      title: "Menus",
      type: "array",
      validation: (rule) => rule.max(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "footerMenu",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "footerLink",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Href",
                      type: "url",
                      validation: (rule) =>
                        rule.uri({
                          scheme: ["http", "https", "mailto", "tel"],
                          allowRelative: true,
                        }),
                    }),
                  ],
                  preview: {
                    select: { title: "label", subtitle: "href" },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "links.length" },
            prepare: ({ title, subtitle }) => ({
              title,
              subtitle: subtitle ? `${subtitle} link(s)` : "No links",
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Footer" }),
  },
});

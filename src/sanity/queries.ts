import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(_createdAt asc)`,
);

export type ProjectDocument = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  image: { asset?: { _ref: string; _type: "reference" } };
  url: string;
  ctaText: string;
};

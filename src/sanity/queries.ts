import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(_createdAt asc)`,
);

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]`);

export type ProjectDocument = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  image: { asset?: { _ref: string; _type: "reference" } };
  url: string;
  ctaText: string;
};

export type FooterLink = { label: string; href?: string };
export type FooterMenuData = { title: string; links: FooterLink[] };
export type FooterDocument = { menus: FooterMenuData[] };

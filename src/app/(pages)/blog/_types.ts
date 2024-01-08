export type MDXContent = string;

export interface MetaDataAttributes {
  title: string;
  seoTitle: string;
  summary: string;
  firstModDate: string;
  lastModDate: string;
  isPublic: boolean;
}

export interface MDXData {                                
  attributes: MetaDataAttributes;
  body: MDXContent;
  bodyBegin: number;
  frontMatter: string;
}

export interface BlogData {
  parsedContent: MDXData;
  filenameSlug: string;
}

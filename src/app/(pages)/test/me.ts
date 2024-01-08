import * as fs from 'node:fs/promises';
import fm from 'front-matter';

type MDXContent = string;

interface MDXData {
  attributes: {
    title: string;
    seoTitle: string;
    lastModDate: string;
    firstModDate: string;
    isPublic: boolean;
  };
  bodyBegin: number;
  body: MDXContent;
  frontMatter: string;
}

async function readAndParseFile(filePath: string): Promise<MDXData> {
  try {
    const fileContent: string = await fs.readFile(filePath, 'utf8');
    return fm(fileContent) as MDXData;
  } catch (err) {
    console.error(err);
    // TODO: fix this shit here
    throw err;
  }
}

const a = async () => {
  const cc = await readAndParseFile('./page.mdx');
  console.log(cc);
};

a();

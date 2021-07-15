import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const pagesDirectory = path.join('content', 'pages')

export const getPage = async (page) => {
	const file = await fs.readFile(path.join(pagesDirectory, `${page}.md`), 'utf8')
	const { data, content } = matter(file)

	return content
}

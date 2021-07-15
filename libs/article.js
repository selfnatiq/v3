import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join('content', 'articles')

export const getArticles = async () => {
	const files = await fs.readdir(articlesDirectory)

	const articles = files.map(async (file) => {
		const content = await fs.readFile(path.join(articlesDirectory, file), 'utf8')
		const { data } = matter(content)

		return data
	})

	return Promise.all(articles)
}

export const getArticle = async (slug) => {
	const file = await fs.readFile(path.join(articlesDirectory, `${slug}.md`), 'utf8')
	const { data, content } = matter(file)

	return {
		data,
		content,
	}
}

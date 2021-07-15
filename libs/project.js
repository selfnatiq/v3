import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join('content', 'projects')

export const getProjects = async () => {
	const files = await fs.readdir(projectsDirectory)

	const projects = files.map(async (file) => {
		const project = await fs.readFile(path.join(projectsDirectory, file), 'utf8')
		const { data, content } = matter(project)

		return {
			data,
			content,
		}
	})

	return Promise.all(projects)
}

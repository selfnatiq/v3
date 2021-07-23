import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const jobsDirectory = path.join('content', 'jobs')

export const getJobs = async () => {
	const files = await fs.readdir(jobsDirectory)

	const jobs = files.map(async (file) => {
		const job = await fs.readFile(path.join(jobsDirectory, file), 'utf8')
		const { data, content } = matter(job)

		return {
			data,
			content,
		}
	})

	return Promise.all(jobs)
}

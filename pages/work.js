import Head from 'next/head'

import FeaturedProject from '@components/FeaturedProject'
import OtherProject from '@components/OtherProject'
import Experience from '@components/Experience'
import { getProjects } from '@libs/project'
import { getJobs } from '@libs/job'
import { sortByDate } from '@libs/utils'

const Work = ({ jobs, featured, other }) => {
	return (
		<>
			<Head>
				<title>Work - Natiq Mumtaz</title>
			</Head>
			<h1 className="text-4xl font-bold mb-4 2xl:text-5xl">Where I&apos;ve worked</h1>

			{/* experience */}
			<section>
				{jobs.map((job) => (
					<Experience key={job.data.title} job={job} />
				))}
			</section>

			{/* featured projects */}
			<section>
				<h2 className="text-2xl font-bold mb-4 mt-12 2xl:text-3xl">
					Some things I&apos;ve built
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:grid-cols-3">
					{featured.length ? (
						<>
							{featured.map((project) => (
								<FeaturedProject key={project.data.title} project={project} />
							))}
						</>
					) : (
						<p className="text-gray-600 italic">There are no featured projects yet!</p>
					)}
				</div>
			</section>

			{/* other projects */}
			<section>
				<h2 className="text-2xl font-bold mb-4 mt-12 2xl:text-3xl">
					Other amazing projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:grid-cols-3">
					{other.length ? (
						<>
							{other.map((project) => (
								<OtherProject key={project.data.title} project={project} />
							))}
						</>
					) : (
						<p className="text-gray-600 italic">There are no other projects yet!</p>
					)}
				</div>
			</section>
		</>
	)
}

export const getStaticProps = async () => {
	const jobs = await getJobs()
	const projects = await getProjects()

	return {
		props: {
			jobs: jobs.sort((a, b) => sortByDate(a.data, b.data)),
			featured: projects.filter(
				(project) => project.data.featured && project.data.showInProjects
			),
			other: projects.filter(
				(project) => !project.data.featured && project.data.showInProjects
			),
		},
	}
}

export default Work

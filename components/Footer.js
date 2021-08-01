import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
	return (
		<footer className="flex flex-col items-center py-7">
			<div className="flex gap-10 mb-5">
				<a
					className="hover:text-blue-700"
					href="https://github.com/selfnatiq"
					rel="noreferrer"
					aria-label="Github"
				>
					<FiGithub size="1.3em" />
				</a>
				<a
					className="hover:text-blue-700"
					href="https://twitter.com/selfnatiq"
					rel="noreferrer"
					aria-label="Twitter"
				>
					<FiTwitter size="1.3em" />
				</a>
				<a
					className="hover:text-blue-700"
					href="https://www.linkedin.com/in/selfnatiq/"
					rel="noreferrer"
					aria-label="Linkedin"
				>
					<FiLinkedin size="1.3em" />
				</a>
			</div>

			<p className="text-gray-900 font-medium tracking-tight text-sm font-mono">
				Built with&nbsp;
				<a
					className="text-blue-700 hover:underline"
					href="https://nextjs.org/"
					rel="noreferrer"
				>
					nextjs
				</a>
				&nbsp;and&nbsp;
				<a
					className="text-blue-700 hover:underline"
					href="https://tailwindcss.com/"
					rel="noreferrer"
				>
					tailwind css
				</a>
				&nbsp;
			</p>
		</footer>
	)
}

export default Footer

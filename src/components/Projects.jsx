import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

const GITHUB_USERNAME = 'Moen-nganga'

const fallbackRepos = [
  {
    id: 1,
    name: 'Reddit-Automation-Bot',
    description: '',
    html_url: 'https://github.com/Moen-nganga/Reddit-Automation-Bot',
    language: 'JavaScript',
  },
  {
    id: 2,
    name: 'Marketplace-Ke',
    description: '',
    html_url: 'https://github.com/Moen-nganga/Marketplace-Ke',
    language: 'HTML',
  },
  {
    id: 3,
    name: 'Chatbot-Extension',
    description: '',
    html_url: 'https://github.com/Moen-nganga/Chatbot-Extension',
    language: 'CSS',
  },
  {
    id: 4,
    name: 'Subreddit-Insights',
    description: '',
    html_url: 'https://github.com/Moen-nganga/Subreddit-Insights',
    language: 'TypeScript',
  },
]

const Div = ({ children, className }) => <div className={className}>{children}</div>
const Span = ({ children, className }) => <span className={className}>{children}</span>
const AnchorLink = ({ href, children, className, target, rel }) => (
  <a href={href} className={className} target={target} rel={rel}>{children}</a>
)

const langColor = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  default: '#0F766E',
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data)
        } else {
          setRepos(fallbackRepos)
        }
        setLoading(false)
      })
      .catch(() => {
        setRepos(fallbackRepos)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="py-24 px-6">
      <Div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Div className="flex items-center gap-3 mb-4">
            <Div className="h-px w-8 bg-primary" />
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A collection of my work pulled from GitHub.
          </p>
        </motion.div>

        {loading && (
          <Div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <Div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 animate-pulse">
                <Div className="h-4 bg-white/10 rounded mb-3 w-3/4" />
                <Div className="h-3 bg-white/10 rounded mb-2 w-full" />
                <Div className="h-3 bg-white/10 rounded w-2/3" />
              </Div>
            ))}
          </Div>
        )}

        {!loading && (
          <Div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200"
              >
                <Div className="flex items-start justify-between gap-2">
                  <Div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-primary mt-0.5 shrink-0" />
                    <h3 className="font-semibold text-white leading-snug">{repo.name}</h3>
                  </Div>
                  <AnchorLink
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors shrink-0"
                  >
                    <ExternalLink size={16} />
                  </AnchorLink>
                </Div>

                <Div className="flex items-center justify-end">
                  {repo.language && (
                    <Div className="flex items-center gap-1.5">
                      <Div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: langColor[repo.language] || langColor.default }}
                      />
                      <Span className="text-xs text-gray-400">{repo.language}</Span>
                    </Div>
                  )}
                </Div>
              </motion.div>
            ))}
          </Div>
        )}

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <AnchorLink
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-primary text-gray-400 hover:text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <GitBranch size={16} />
              View All on GitHub
            </AnchorLink>
          </motion.div>
        )}

      </Div>
    </section>
  )
}
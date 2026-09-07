import { personalInfo } from '../data'
import { Mail, Send, MessageCircle, GitBranch } from 'lucide-react'

export default function Footer() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>
  const AnchorLink = ({ href, children, className, target, rel }) => (
    <a href={href} className={className} target={target} rel={rel}>{children}</a>
  )

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: GitBranch, href: personalInfo.github, label: 'GitHub' },
    { icon: Send, href: personalInfo.telegram, label: 'Telegram' },
    { icon: MessageCircle, href: personalInfo.reddit, label: 'Reddit' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <Div className="max-w-7xl mx-auto">

        {/* Top Row */}
        <Div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <Div className="flex flex-col gap-4">
            <Span className="font-semibold text-white">{personalInfo.name}</Span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {personalInfo.bio}
            </p>
            <Div className="flex items-center gap-2">
              <Div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <Span className="text-xs text-gray-500">Available for work</Span>
            </Div>
          </Div>

          {/* Nav Links */}
          <Div>
            <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
            <Div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <AnchorLink
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </AnchorLink>
              ))}
            </Div>
          </Div>

          {/* Contact Info */}
          <Div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <Div className="flex flex-col gap-2">
              <AnchorLink
                href={`mailto:${personalInfo.email}`}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                {personalInfo.email}
              </AnchorLink>
              <Span className="text-gray-500 text-sm">{personalInfo.location}</Span>
              <Span className="text-gray-500 text-sm">{personalInfo.timezone}</Span>
            </Div>

            {/* Social Icons */}
            <Div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <AnchorLink
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary flex items-center justify-center text-gray-500 transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </AnchorLink>
                )
              })}
            </Div>
          </Div>

        </Div>

        {/* Bottom Row */}
        <Div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Span className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Span>
          <Span className="text-gray-600 text-sm">
            Built with React + Tailwind CSS
          </Span>
        </Div>

      </Div>
    </footer>
  )
}
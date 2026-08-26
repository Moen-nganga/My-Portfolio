import { motion } from 'framer-motion'
import { personalInfo } from '../data'
import { Mail, MapPin, Send, MessageCircle, Phone } from 'lucide-react'

export default function Contact() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>
  const AnchorLink = ({ href, children, className, target, rel }) => (
    <a href={href} className={className} target={target} rel={rel}>{children}</a>
  )

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+254 143 276 404',
      href: 'https://wa.me/254143276404',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@moen41',
      href: personalInfo.telegram,
    },
    {
      icon: MessageCircle,
      label: 'Reddit',
      value: 'u/skintyfia44',
      href: personalInfo.reddit,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
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
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">Get In Touch</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <Div className="flex flex-col gap-4 max-w-lg">
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            const content = (
              <Div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 transition-colors duration-200">
                <Div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </Div>
                <Div>
                  <p className="text-xs text-gray-500 mb-0.5">{method.label}</p>
                  <p className="text-white font-medium text-sm">{method.value}</p>
                </Div>
              </Div>
            )
            return method.href ? (
              <AnchorLink
                key={i}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </AnchorLink>
            ) : (
              <Div key={i}>{content}</Div>
            )
          })}

          <Div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-3 mt-2">
            <Div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
            <Div>
              <p className="text-white font-medium text-sm">Available for new projects</p>
              <p className="text-gray-500 text-xs">Usually responds within 24 hours</p>
            </Div>
          </Div>
        </Div>

      </Div>
    </section>
  )
}
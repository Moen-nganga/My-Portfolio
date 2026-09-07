import { motion } from 'framer-motion'
import { services } from '../data'
import { Clock, ArrowRight } from 'lucide-react'

export default function Services() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>
  const AnchorLink = ({ href, children, className }) => (
    <a href={href} className={className}>{children}</a>
  )

  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
      <Div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Div className="flex items-center gap-3 mb-4">
            <Div className="h-px w-8 bg-primary" />
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">What I Offer</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Here's what I can help you build. Each service is tailored to your needs and delivered with care.
          </p>
        </motion.div>

        {/* Services Timeline */}
        <Div className="relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <Div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-white/10" />

          {services.map((service, i) => {
            const category = [service.bestFor[0], service.bestFor[1]]
              .filter(Boolean)
              .join(' / ')
              .toUpperCase()

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Timeline marker */}
                <Div className="absolute -left-8 sm:-left-12 top-6 w-[15px] h-[15px] rounded-full border-2 border-primary bg-[#0a0a0a]" />

                <Div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:border-primary/50 transition-colors duration-200">

                  {/* Image */}
                  <Div className="sm:w-56 shrink-0 h-44 sm:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </Div>

                  <Div className="p-6 flex flex-col gap-4 flex-1">

                  {/* Category badge + delivery */}
                  <Div className="flex items-center justify-between flex-wrap gap-2">
                    <Span className="inline-block border border-primary/40 text-primary text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                      {category}
                    </Span>
                    <Div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock size={12} className="text-primary" />
                      {service.delivery}
                    </Div>
                  </Div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <Div className="flex flex-wrap gap-2">
                    {service.bestFor.map((item, j) => (
                      <Span
                        key={j}
                        className="border border-white/15 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {item}
                      </Span>
                    ))}
                  </Div>

                  {/* Price & CTA */}
                  <Div className="flex items-center justify-between pt-4 mt-1 border-t border-white/10">
                    <Div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-white font-bold">{service.startingPrice}</p>
                    </Div>
                    <AnchorLink
                      href="#contact"
                      className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Get Started
                      <ArrowRight size={12} />
                    </AnchorLink>
                  </Div>
                  </Div>
                </Div>
              </motion.div>
            )
          })}
        </Div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <Div>
            <h3 className="text-xl font-bold mb-2">Need something custom?</h3>
            <p className="text-gray-400 text-sm">
              Have a unique project in mind? Let's talk and figure out the best approach together.
            </p>
          </Div>
          <AnchorLink
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Let's Talk
            <ArrowRight size={16} />
          </AnchorLink>
        </motion.div>

      </Div>
    </section>
  )
}
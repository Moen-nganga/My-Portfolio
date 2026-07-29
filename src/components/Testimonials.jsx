import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Martin Yardley.",
    role: "Senior Accountant",
    text: "Moen helped me build an automation tool that does pretty much 90% of my work. Clean code, delivered promptly and on time, and there was great communication throughout the entire process.",
    rating: 5,
  },
  {
    name: "Cheryl Brandon.",
    role: "Startup Founder",
    text: "Working with Moen was a great experience. He understood exactly what I needed and built a responsive site that looks amazing on all devices.",
    rating: 5,
  },
  {
    name: "Aisha Mwajuma.",
    role: "Inventory Manager",
    text: "Moen built our internal dashboard in React and it turned out fantastic. Very professional, detail-oriented and easy to work with.",
    rating: 5,
  },
]

export default function Testimonials() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>

  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.02]">
      <Div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Div className="flex items-center gap-3 mb-4">
            <Div className="h-px w-8 bg-primary" />
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">REVIEWS</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            What clients say about working with me.
          </p>
        </motion.div>

        {/* Cards */}
        <Div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200"
            >
              {/* Stars */}
              <Div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Span key={j} className="text-yellow-400 text-sm">★</Span>
                ))}
              </Div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <Div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Span className="text-primary font-bold text-xs">
                    {t.name.charAt(0)}
                  </Span>
                </Div>
                <Div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </Div>
              </Div>
            </motion.div>
          ))}
        </Div>

      </Div>
    </section>
  )
}

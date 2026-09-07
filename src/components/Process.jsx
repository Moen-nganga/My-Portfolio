import { motion } from 'framer-motion'
import { process } from '../data'
import { CheckCircle } from 'lucide-react'

export default function Process() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>

  return (
    <section id="process" className="py-24 px-6">
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
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">How I Work</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Process</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A clear, structured approach to every project, so you always know what to expect.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <Div className="relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <Div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-white/10" />

          {process.map((item, i) => (
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

              <Div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200">

                {/* Step badge + duration */}
                <Div className="flex items-center justify-between flex-wrap gap-2">
                  <Span className="inline-block border border-primary/40 text-primary text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                    Step 0{item.step}
                  </Span>
                  <Span className="text-xs text-gray-500 border border-white/10 px-2.5 py-1 rounded-full">
                    {item.duration}
                  </Span>
                </Div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

                {/* Activities */}
                <Div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Activities</p>
                  <Div className="flex flex-wrap gap-2">
                    {item.activities.map((activity, j) => (
                      <Span
                        key={j}
                        className="border border-white/15 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {activity}
                      </Span>
                    ))}
                  </Div>
                </Div>

                {/* Deliverables */}
                <Div className="pt-4 mt-1 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Deliverables</p>
                  <Div className="flex flex-col gap-1.5">
                    {item.deliverables.map((deliverable, j) => (
                      <Div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={12} className="text-primary shrink-0" />
                        {deliverable}
                      </Div>
                    ))}
                  </Div>
                </Div>
              </Div>
            </motion.div>
          ))}
        </Div>

      </Div>
    </section>
  )
}
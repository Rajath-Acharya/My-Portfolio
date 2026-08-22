import { motion } from "framer-motion";
import { selectedWork } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

const SelectedWork = () => (
  <section id="work" className="py-20 bg-primary-bg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle id="work-title">Selected Work</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {selectedWork.map((work, index) => (
          <motion.article
            key={work.title}
            className="bg-secondary-bg p-6 rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300 h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-accent-1 font-mono mb-4">
              {work.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-5 flex-1">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {work.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="bg-primary-bg text-text-secondary px-3 py-1 rounded-full text-xs font-mono"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWork;

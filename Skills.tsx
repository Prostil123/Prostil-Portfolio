import { useInView } from './useInView';

const skillCategories = [
  {
    title: 'Web technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Front-end',
    skills: ['Bootstrap', 'React.js (basic)'],
  },
  {
    title: 'CMS & builders',
    skills: ['WordPress', 'Elementor', 'WPBakery', 'Divi', 'WIX', 'Webflow', 'WooCommerce'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'VS Code', 'XAMPP', 'cPanel'],
  },
  {
    title: 'Other',
    skills: ['Responsive design', 'SEO', 'Cross-browser'],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 bg-gray-50/80" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">My Skills</h2>
          <p className="text-gray-500 text-sm mb-12">The tools I use to take a site from brief to launch.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5 group ${
                cat.title === 'Other' ? 'sm:col-span-2 lg:col-span-2' : ''
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              <h3 className="font-semibold text-gray-900 mb-4 text-sm group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

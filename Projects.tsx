import { ExternalLink } from 'lucide-react';
import { useInView } from './useInView';

const projects = [
  { initials: 'Ie', name: 'Immerse Education', category: 'Education · Academic programmes', url: 'https://www.immerse.education/', color: 'bg-red-500' },
  { initials: 'Te', name: 'TED × Immerse', category: 'Education · Programme microsite', url: 'https://www.ted.immerse.education/', color: 'bg-orange-500' },
  { initials: 'NL', name: 'No Limits RE', category: 'Business website', url: 'https://nolimits-re.com/', color: 'bg-indigo-500' },
  { initials: 'Sp', name: 'Schulze Physio', category: 'Healthcare · Physiotherapy', url: 'https://schulze.physio/', color: 'bg-teal-500' },
  { initials: 'Br', name: 'Brio Fürth', category: 'Local business website', url: 'https://neu.brio-fuerth.de/', color: 'bg-purple-500' },
  { initials: 'Gh', name: 'Garanta Hof', category: 'Business website', url: 'https://garanta-hof.de/', color: 'bg-emerald-500' },
  { initials: 'Gg', name: 'Greeko Gyros Food', category: 'Restaurant · United Kingdom', url: 'https://greekogyrosfood.co.uk/', color: 'bg-amber-500' },
  { initials: 'Pu', name: 'Purely GmbH', category: 'Company website', url: 'https://purely.gmbh/', color: 'bg-pink-500' },
  { initials: 'Eh', name: 'Endo Health Clinic', category: 'Healthcare · Clinic', url: 'https://endohealthclinic.com/', color: 'bg-cyan-500' },
];

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 bg-gray-50/80" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">My Projects</h2>
          <p className="text-gray-500 text-sm mb-12">A selection of live websites I've worked on. Click any card to visit the site.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                {project.initials}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
              <p className="text-xs text-gray-400 mb-4">{project.category}</p>
              <span className="inline-flex items-center gap-1.5 text-primary text-xs font-medium group-hover:gap-2.5 transition-all">
                Visit website
                <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

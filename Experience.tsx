import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useInView } from './useInView';

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-serif">Experience & Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Senior Developer</h3>
                <p className="text-xs text-gray-400">Webstar Technologies Pvt.Ltd, Kolhapur · 2024 – Present</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-500 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Built responsive, interactive sites with HTML5, CSS3, JavaScript and WordPress.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Customised themes using Elementor, WPBakery and Divi.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Collaborated with back-end developers on CMS features.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Improved performance, security and mobile UX across 20+ projects.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Configured WooCommerce for client e-commerce.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Managed cPanel deployments, maintenance and backups.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                Gathered requirements directly with clients.
              </li>
            </ul>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <GraduationCap size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Bachelor of Computer Science</h3>
                  <p className="text-xs text-gray-400">Jain College of Engineering, Belagavi · 2019 – 2023</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1">Pre-University</h4>
                <p className="text-xs text-gray-400">Aradhana Science PU College, Dharwad · 2017 – 2019</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-purple-50/50 to-white rounded-2xl p-8 border border-purple-100/50 ${isInView ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Full stack development course</p>
                  <p className="text-xs text-gray-400">Vip Academy, Bengaluru · Jan 2024</p>
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm underline decoration-primary/30">Web application development</p>
                  <p className="text-xs text-gray-400">Feb 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

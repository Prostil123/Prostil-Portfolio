import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="banner" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
              Open to full-time opportunities
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 leading-tight mb-6">
              Web{' '}
              <span className="font-serif italic text-primary">Developer</span>
              <br />
              building fast,
              <br />
              secure websites.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              2 years of experience building responsive websites and WooCommerce stores for real clients. I'm looking for a full-time role where I can keep growing as a web developer.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="group px-7 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/25 active:scale-95 flex items-center gap-2"
              >
                View my work
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:border-primary hover:text-primary transition-all active:scale-95"
              >
                Contact me
              </a>
            </div>
          </div>

          {/* Right - PM avatar */}
          <div className="flex justify-center animate-fade-in delay-300">
            <div className="relative">
              <div className="w-64 h-72 md:w-72 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-2xl shadow-gray-300/40 animate-float">
                <span className="text-7xl md:text-8xl font-serif font-bold text-primary/80 select-none">PM</span>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                ))}
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2 YRS', label: 'Professional experience' },
              { value: '20+', label: 'Websites delivered' },
              { value: '6', label: 'Builders & CMS platforms' },
              { value: '4', label: 'Languages spoken' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

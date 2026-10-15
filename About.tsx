import { Mail, Phone } from 'lucide-react';
import { useInView } from './useInView';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-16 items-start ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.6s ease-out' }}>
          {/* Left */}
          <div className={isInView ? 'animate-slide-in-left' : 'opacity-0'}>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8 font-serif">
              Hello, my name is Prostil Mangasule. Welcome to my portfolio.
            </h2>
            <div className="flex gap-4">
              <a
                href="mailto:prostilmangasule@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-all hover:shadow-md"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="tel:+917619667850"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-all hover:shadow-md"
              >
                <Phone size={16} />
                Call
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={`space-y-4 text-gray-500 leading-relaxed text-[15px] ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <p>
              I'm a web developer with 2 years of experience in responsive design, WooCommerce integration and front-end development. I've created 20+ high-performance websites with improved speed, security and UX.
            </p>
            <p>
              I work comfortably with Elementor, WPBakery, Divi, WIX and Webflow, and I have a strong understanding of cPanel, SEO best practices and cross-browser compatibility.
            </p>
            <p>
              I work directly with clients to gather requirements and deliver tailored web solutions. I speak English, Kannada, Hindi and Marathi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

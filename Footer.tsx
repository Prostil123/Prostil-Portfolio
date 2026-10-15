import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold text-white tracking-tight">
              Prostil<span className="text-primary-light">.</span>
            </a>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Open to full-time web development roles. I'd love to hear from you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-primary-light transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:prostilmangasule@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-light transition-colors">
                  <Mail size={14} />
                  prostilmangasule@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917619667850" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-light transition-colors">
                  <Phone size={14} />
                  +91 76196 67850
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} />
                  Chikodi, Belagavi, Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-5 text-center">
          <p className="text-xs text-gray-500">
            © 2026 Prostil Mangasule. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

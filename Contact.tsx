import { Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from './useInView';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'prostilmangasule@gmail.com',
    href: 'mailto:prostilmangasule@gmail.com',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 76196 67850',
    href: 'tel:+917619667850',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Chikodi, Belagavi, Karnataka',
    href: '#',
    color: 'bg-emerald-50 text-emerald-500',
  },
];

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">Contact</h2>
          <p className="text-gray-500 text-sm mb-12">Feel free to reach out by email or phone.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className={`group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 group-hover:text-primary transition-colors">{item.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

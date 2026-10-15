import { Mail, Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-300 text-xs py-2">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:prostilmangasule@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={12} />
            <span>prostilmangasule@gmail.com</span>
          </a>
          <a href="tel:+917619667850" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={12} />
            <span>+91 76196 67850</span>
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <MapPin size={12} />
          <span>Chikodi, Belagavi, Karnataka</span>
        </div>
      </div>
    </div>
  );
}

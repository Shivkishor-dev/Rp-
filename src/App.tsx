import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Send,
  ArrowRight
} from 'lucide-react';
import { 
  GYM_NAME, 
  NAV_LINKS, 
  SERVICES, 
  TRAINERS, 
  REVIEWS, 
  GALLERY_IMAGES, 
  CONTACT_INFO 
} from './constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-[60px] px-10 flex items-center justify-between border-b border-white/10 bg-gym-black/95 sticky top-0 z-[100]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="logo font-black text-xl tracking-[2px] uppercase"
      >
        RP <span className="text-primary italic">FITNESS</span>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[1px]">
        {NAV_LINKS.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[60px] left-0 w-full bg-gym-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col gap-4 p-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="text-[12px] font-bold tracking-[2px] uppercase mb-4 text-white">
    {title}
  </h3>
);

export default function App() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gym-black text-white font-sans selection:bg-primary flex flex-col">
      <Navbar />
      
      <main className="theme-grid flex-1">
        {/* HERO SECTION - Left Column */}
        <section id="home" className="theme-card flex flex-col justify-end min-h-[500px] lg:col-span-1 lg:row-span-2 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/40 to-transparent z-0" />
          
          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-display leading-[0.9] uppercase mb-2"
            >
              BECOME<br />ELITE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-bold uppercase text-[0.8rem] mb-6 tracking-wide"
            >
              Transform Your Body, Transform Your Life
            </motion.p>
            
            <div className="flex gap-2.5 mb-8">
              <a href="#contact" className="theme-btn theme-btn-fill">Join Now</a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="theme-btn theme-btn-outline">Call Now</a>
            </div>

            <div className="pt-5 border-t border-white/10">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="flex text-[#FFD700] text-sm">★★★★★</div>
                <span className="text-[12px] font-medium">5.0 (93+ Reviews)</span>
              </div>
              <p className="text-[11px] text-gym-text-dim leading-relaxed">
                RP FITNESS UNISEX GYM is a premium fitness center offering HIIT, CrossFit, Yoga, and Personal Training in Bihar Sharif.
              </p>
            </div>
          </div>
        </section>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col gap-5 lg:col-span-1">
          {/* SERVICES */}
          <section id="services" className="theme-card flex-1">
            <SectionHeader title="Core Services" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center border border-transparent hover:border-primary hover:bg-primary/5 transition-all group">
                  <div className="text-primary mb-2.5 transform group-hover:scale-110 transition-transform">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-tight">{service.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </section>

          {/* TRAINERS */}
          <div id="trainers" className="flex gap-4 h-[200px]">
            {TRAINERS.map((trainer, idx) => (
              <div key={idx} className="flex-1 relative rounded-lg overflow-hidden bg-gym-gray group">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2.5 left-2.5">
                  <h4 className="text-[12px] font-bold uppercase">{trainer.name.split(' ')[0]}</h4>
                  <span className="text-[8px] bg-primary px-1.5 py-0.5 rounded-[4px] font-bold uppercase">{trainer.role.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR - Right Column */}
        <div className="sidebar flex flex-col gap-5 lg:col-span-1 lg:row-span-2">
          {/* CONTACT FORM */}
          <section id="contact" className="theme-card flex-1 flex flex-col">
            <SectionHeader title="Contact Us" />
            <div className="w-full h-[120px] bg-gym-gray rounded-lg mb-2.5 border border-gym-border flex items-center justify-center p-4 text-center">
              <span className="text-[10px] text-gym-text-dim leading-tight">{CONTACT_INFO.address}</span>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-auto">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-gym-border p-2.5 text-white outline-none text-[12px] rounded focus:border-primary transition-colors"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Phone Number" 
                className="w-full bg-white/5 border border-gym-border p-2.5 text-white outline-none text-[12px] rounded focus:border-primary transition-colors"
                value={formState.phone}
                onChange={(e) => setFormState({...formState, phone: e.target.value})}
              />
              <textarea 
                placeholder="Inquiry Details" 
                rows={2}
                className="w-full bg-white/5 border border-gym-border p-2.5 text-white outline-none text-[12px] rounded focus:border-primary transition-colors resize-none"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
              <div className="flex gap-2 mt-auto">
                <button 
                  type="submit" 
                  className="theme-btn theme-btn-fill flex-1 text-center"
                  disabled={submitted}
                >
                  {submitted ? 'Sent!' : 'Send Message'}
                </button>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in joining RP Fitness Gym. Could you please provide more details?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn theme-btn-outline flex items-center justify-center px-4"
                  title="WhatsApp Us"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </form>
          </section>

          {/* REVIEWS */}
          <section id="reviews" className="theme-card h-[220px]">
            <SectionHeader title="Reviews" />
            <div className="overflow-y-auto h-full pr-1 custom-scroll space-y-2.5">
              {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-white/5 p-3 rounded-lg text-[11px] leading-relaxed border border-transparent hover:border-white/10 active:bg-white/10 transition-colors">
                  <p className="text-gym-text-dim italic mb-1">"{review.text.length > 80 ? review.text.substring(0, 80) + '...' : review.text}"</p>
                  <strong className="text-white">- {review.name}</strong>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* GALLERY & FOOTER preserved below the main grid dashboard */}
      <section id="gallery" className="p-5">
        <div className="theme-card">
          <SectionHeader title="Gallery" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-gym-border">
                <img src={img} className="w-full h-full object-cover transition-transform hover:scale-110" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="p-10 border-t border-gym-border text-center">
        <p className="text-[10px] uppercase tracking-widest text-gym-text-dim">
          © {new Date().getFullYear()} {GYM_NAME}. Modern Fitness Redefined.
        </p>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-[30px] right-[30px] z-[1000] flex flex-col gap-2">
        <motion.a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in joining RP Fitness Gym. Could you please provide more details?")}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
        >
          <MessageCircle size={24} />
        </motion.a>
        <motion.a 
          href={`tel:${CONTACT_INFO.phone}`}
          whileHover={{ scale: 1.1 }}
          className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.4)]"
        >
          <Phone size={24} />
        </motion.a>
      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>
    </div>
  );
}

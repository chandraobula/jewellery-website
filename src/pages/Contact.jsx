import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-h2 mb-4">Contact Us</h1>
          <p className="text-brand-dark/70 max-w-2xl mx-auto">
            Have a question about a piece or need assistance with your order? Our concierge team is here to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-xl font-primary font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Visit Our Showroom</h4>
                    <p className="text-brand-dark/70">123 Luxury Lane, Fashion District<br />New York, NY 10012</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Call Us</h4>
                    <p className="text-brand-dark/70">+1 (555) 123-4567</p>
                    <p className="text-xs text-brand-dark/50 mt-1">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Email Us</h4>
                    <p className="text-brand-dark/70">concierge@lumiere.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8">
              <h3 className="text-lg font-primary font-bold mb-4 flex items-center gap-2">
                <Clock size={18} /> Opening Hours
              </h3>
              <ul className="space-y-2 text-brand-dark/70">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>10:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>11:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form className="bg-white p-8 md:p-12 shadow-soft border border-neutral-100">
              <h3 className="text-2xl font-primary font-bold mb-8">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                <select className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors bg-white">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Custom Design</option>
                  <option>Returns & Exchanges</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea rows="5" className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"></textarea>
              </div>

              <Button variant="primary" className="w-full md:w-auto">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

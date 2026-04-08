import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
  Optimus Overseas Educational Consultants
</h3>

  <p className="text-primary-foreground/80 leading-relaxed">
    Optimus Overseas Educational Consultants is a trusted study abroad consultancy offering expert guidance for overseas education, MBBS abroad, admissions and student visa support.
  </p>
</div>

            
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61587535559285" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/optimus_educational_consultant/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/optimusoverseasedu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
  Study Abroad Services
</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/study-abroad" className="text-primary-foreground/80 hover:text-accent transition-colors">Study Abroad</Link>
              </li>
              <li>
                <Link to="/mbbs-abroad" className="text-primary-foreground/80 hover:text-accent transition-colors">MBBS Abroad</Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">Courses & Programs Abroad</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Study Destinations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/study-abroad#usa" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in USA</Link>
              </li>
              <li>
                <Link to="/study-abroad#uk" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in UK</Link>
              </li>
              <li>
                <Link to="/study-abroad#canada" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in Canada</Link>
              </li>
              <li>
                <Link to="/study-abroad#australia" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in Australia</Link>
              </li>
              <li>
                <Link to="/study-abroad#europe" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in Europe</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent shrink-0" />

                <address className="not-italic text-base text-primary-foreground/80 leading-relaxed">
                No:12,Gandhi Salai, <br />
                Srinivasa Nagar,<br />
                Kandhanchavadi, Perungudi,<br />
                Chennai, Tamil Nadu-600096
              </address>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:9092906907" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  90929 06907
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+914446254744" className="text-primary-foreground/80 hover:text-accent transition-colors whitespace-nowrap">
                  Tel: +91-044-4625 4744
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@optimusoverseasedu.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                   info@optimusoverseasedu.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Optimus Overseas Educational Consultants. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

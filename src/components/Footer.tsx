import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const blogs = [
    {
      image: "/placeholder.svg",
      title: "Community Empowerment Initiative Reaches 500 Families",
      date: "November 15, 2025"
    },
    {
      image: "/placeholder.svg",
      title: "New Skill Development Center Launched in Mumbai",
      date: "November 20, 2025"
    }
  ];

  const galleryImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="bg-foreground/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1: About Section */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Valmiki Samaj Trust</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Dedicated to community development through education, skill development, social
                welfare, and cultural preservation.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/mission" className="text-muted-foreground hover:text-primary transition-colors">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Activities
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                    Events & Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Get Involved */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                    Become a Member
                  </Link>
                </li>
                <li>
                  <Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                    Volunteer With Us
                  </Link>
                </li>
                <li>
                  <Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/branches" className="text-muted-foreground hover:text-primary transition-colors">
                    Find a Branch
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Blogs */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Recent Updates</h3>
              <div className="space-y-4">
                {blogs.map((blog, index) => (
                  <div key={index} className="flex gap-3">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-medium mb-1 line-clamp-2">{blog.title}</h4>
                      <p className="text-xs text-muted-foreground">{blog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 5: Gallery Grid */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  >
                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-foreground/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Valmiki Samaj Trust. All rights reserved. | Designed with ❤️ for the community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import educationImg from "@/assets/education.jpg";
import skillDevImg from "@/assets/skill-development.jpg";
import socialWelfareImg from "@/assets/social-welfare.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import culturalImg from "@/assets/cultural.jpg";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import heroBanner from "@/assets/hero-banner.jpg";

const Branches = () => {
  const branchImages = [educationImg, skillDevImg, socialWelfareImg, empowermentImg, culturalImg, educationImg];
  const [hoveredBranch, setHoveredBranch] = useState<number | null>(null);

  const branches = [
    {
      city: "New Delhi",
      address: "123 Community Street, Delhi 110001",
      phone: "+91 1234567890",
      email: "delhi@valmikisamaj.org",
    },
    {
      city: "Mumbai",
      address: "456 Service Road, Mumbai 400001",
      phone: "+91 9876543210",
      email: "mumbai@valmikisamaj.org",
    },
    {
      city: "Bangalore",
      address: "789 Tech Park, Bangalore 560001",
      phone: "+91 8765432109",
      email: "bangalore@valmikisamaj.org",
    },
    {
      city: "Kolkata",
      address: "321 Heritage Lane, Kolkata 700001",
      phone: "+91 7654321098",
      email: "kolkata@valmikisamaj.org",
    },
    {
      city: "Chennai",
      address: "654 Marina Road, Chennai 600001",
      phone: "+91 6543210987",
      email: "chennai@valmikisamaj.org",
    },
    {
      city: "Hyderabad",
      address: "987 Tech City, Hyderabad 500001",
      phone: "+91 5432109876",
      email: "hyderabad@valmikisamaj.org",
    },
  ];

  const faqs = [
    {
      question: "How many branches does Valmiki Samaj Trust have?",
      answer: "We currently have branches in 6 major cities across India: Delhi, Mumbai, Bangalore, Kolkata, Chennai, and Hyderabad, with plans to expand to more cities."
    },
    {
      question: "Can I visit a branch without an appointment?",
      answer: "Yes, you can visit any of our branches during working hours (Monday to Saturday, 10 AM to 6 PM). However, we recommend calling ahead for specific inquiries or meetings."
    },
    {
      question: "Do all branches offer the same programs?",
      answer: "While all branches offer our core programs, some specialized initiatives may vary based on local needs and resources. Contact your nearest branch for specific program details."
    },
    {
      question: "How can I start a new branch in my city?",
      answer: "We welcome proposals for new branches. Please contact our head office with your proposal, including details about your city, potential team, and community needs assessment."
    },
    {
      question: "Can I volunteer at any branch?",
      answer: "Yes, you can volunteer at any branch that's convenient for you. Each branch has a volunteer coordinator who can guide you through the process and available opportunities."
    },
    {
      question: "Do branches conduct independent fundraising?",
      answer: "Branches work in coordination with the central office for fundraising activities. While local fundraising is encouraged, all activities follow our organizational guidelines and transparency standards."
    },
    {
      question: "How do I transfer my membership to another branch?",
      answer: "Membership transfer is simple. Contact both your current and target branch, and they will coordinate the transfer of your membership records and update your details."
    },
    {
      question: "Are branch contact details updated regularly?",
      answer: "Yes, we update our branch contact information regularly on our website. If you experience any issues reaching a branch, please contact our head office."
    },
    {
      question: "Can branches collaborate on projects?",
      answer: "Absolutely! Inter-branch collaboration is encouraged. Many of our larger initiatives involve multiple branches working together to maximize impact and share resources."
    },
    {
      question: "How is each branch managed?",
      answer: "Each branch has a dedicated branch coordinator and team, supervised by regional coordinators and the central office. This ensures consistency in quality while allowing for local customization."
    }
  ];

  const handleLocationClick = (address: string) => {
    const query = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div>
       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Branches Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-primary/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Branches</h1>
          <p className="text-xl md:text-2xl">Find a Branch Near You</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={branchImages[index]} 
                      alt={branch.city}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Location Icon */}
                    <div
                      className="absolute top-4 right-4"
                      onMouseEnter={() => setHoveredBranch(index)}
                      onMouseLeave={() => setHoveredBranch(null)}
                    >
                      <button
                        onClick={() => handleLocationClick(branch.address)}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                      >
                        <MapPin className="w-5 h-5 text-primary" />
                      </button>
                      {hoveredBranch === index && (
                        <div className="absolute top-12 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl z-10">
                          {branch.address}
                        </div>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-4 text-primary">
                      {branch.city}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <MapPin size={18} className="mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{branch.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={18} className="mr-2 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{branch.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={18} className="mr-2 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{branch.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <Newsletter />
    </div>
  );
};

export default Branches;

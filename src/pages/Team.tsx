import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Instagram, X } from "lucide-react";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

import educationImg from "@/assets/education.jpg";
import skillDevImg from "@/assets/skill-development.jpg";
import socialWelfareImg from "@/assets/social-welfare.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import culturalImg from "@/assets/cultural.jpg";
import valmikiJi from "@/assets/valmiki-ji.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

import mem1 from "@/assets/mem-1.jpg";
import mem2 from "@/assets/mem-2.png";
import mem3 from "@/assets/mem-3.png";
import mem4 from "@/assets/mem-4.png";
import mem5 from "@/assets/mem-5.png";
import mem6 from "@/assets/mem-6.png";
import mem9 from "@/assets/mem-9.png";
import mem8 from "@/assets/mem-8.png";

const Team = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const teamMembers = [
    {
      name: "Sudhir Parcha",
      designation: "Member",
      image: mem1,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Rohtash",
      designation: "Member",
      image: mem2,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Ashish",
      designation: "Member",
      image: mem3,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Naresh Kumar",
      designation: "Member",
      image: mem4,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Pradeep Kumar",
      designation: "Member",
      image: mem5,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Rohit",
      designation: "Member",
      image: mem6,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Sultan Singh",
      designation: "Member",
      image: mem9,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Madan Pal",
      designation: "Member",
      image: mem8,
      social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
  ];

  const faqs = [
    { question: "Who governs the Valmiki Samaj Trust?", answer: "The Trust is governed by a member-led group who collectively value working towards the betterment of the community. The team consists of educators, professionals, volunteers, and community members." },
    { question: "How are team members selected?", answer: "Team members are selected based on their commitment to community service, relevant expertise, and alignment with the Trust's values and mission." },
    { question: "Can I nominate someone for a leadership role?", answer: "Yes, you can submit nominations during our annual general meeting or through our contact form. All nominations are reviewed by the current leadership team." },
    { question: "How can I contact a specific team member?", answer: "You can reach out to team members through our official contact channels. General inquiries can be directed to our main office." },
    { question: "Do team members receive compensation?", answer: "Our core team members serve on a voluntary basis. Any administrative compensation is disclosed in our annual reports for full transparency." },
    { question: "How often does the leadership team meet?", answer: "The leadership team meets monthly to review progress, plan initiatives, and address community needs. Special meetings are convened as needed." },
    { question: "What qualifications are needed to join the team?", answer: "We look for individuals with a passion for community service, relevant skills, and a commitment to our values. Professional experience in related fields is beneficial but not mandatory." },
    { question: "Is there a term limit for leadership positions?", answer: "Yes, leadership positions have defined terms to ensure fresh perspectives and opportunities for new leaders to contribute." },
    { question: "How does the team ensure transparency?", answer: "We publish annual reports, maintain open communication, and hold regular community meetings to ensure accountability and transparency in all our activities." },
    { question: "Can volunteers eventually become team members?", answer: "Absolutely! Many of our current team members started as volunteers. Active volunteers who demonstrate leadership qualities are encouraged to take on larger roles." }
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Team Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Team</h1>
          <p className="text-xl md:text-2xl">Meet the People Behind Our Mission</p>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              The Trust is governed by a member-led group who collectively value working towards the betterment of the community.
            </p>
          </div>

          {/* ROWS OF TEAM MEMBERS */}
          {[teamMembers.slice(0, 4), teamMembers.slice(4, 8)].map((row, rowIndex) => (
            <div key={rowIndex} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
              {row.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden group">
                    <div className="relative overflow-hidden">

                      {/* CLICKABLE IMAGE */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => setSelectedImage(member.image)}
                      />

                      {/* ORIGINAL SOCIAL ICON STYLING — UNCHANGED */}
                      <div className="absolute inset-y-0 left-0 flex flex-col justify-center gap-2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-gradient-to-r from-foreground/80 to-transparent pl-3 pr-6">
                        <a href={member.social.facebook} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                          <Facebook size={18} />
                        </a>
                        <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                          <Twitter size={18} />
                        </a>
                        <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                          <Linkedin size={18} />
                        </a>
                        <a href={member.social.instagram} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                          <Instagram size={18} />
                        </a>
                      </div>
                    </div>

                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium">{member.designation}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FULL SCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <FAQ faqs={faqs} />
      <Newsletter />
    </div>
  );
};

export default Team;

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import educationImg from "@/assets/education.jpg";
import skillImg from "@/assets/skill-development.jpg";
import culturalImg from "@/assets/cultural.jpg";
import EventCard from "@/components/EventCard";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import heroBanner from "@/assets/hero-banner.jpg";

const Events = () => {
  const events = [
    {
      title: "Annual Education Fair 2025",
      date: "December 15, 2025",
      location: "Delhi Community Center",
      image: educationImg,
      description: "A comprehensive fair showcasing educational opportunities, career guidance, and scholarship information for students and parents."
    },
    {
      title: "Skill Development Workshop",
      date: "December 20, 2025",
      location: "Regional Training Hub",
      image: skillImg,
      description: "Hands-on training sessions in various vocational skills with industry experts and placement opportunities."
    },
    {
      title: "Cultural Heritage Festival",
      date: "January 5, 2026",
      location: "National Heritage Park",
      image: culturalImg,
      description: "Celebrate our rich cultural heritage with traditional performances, art exhibitions, and heritage walks."
    },
  ];

  const faqs = [
    {
      question: "How can I register for upcoming events?",
      answer: "You can register for our events through our website's event page or by contacting your nearest branch directly. Registration details are also shared on our social media channels."
    },
    {
      question: "Are events free to attend?",
      answer: "Most of our community events are free to attend. Some specialized workshops may require a nominal registration fee to cover materials and resources."
    },
    {
      question: "Can I volunteer at events?",
      answer: "Absolutely! We always welcome volunteers for our events. Please contact us through the Get Involved page or reach out to your local branch coordinator."
    },
    {
      question: "Do you provide certificates for workshop participation?",
      answer: "Yes, participants who complete our skill development workshops and training programs receive certificates recognized by industry partners."
    },
    {
      question: "How often do you organize cultural events?",
      answer: "We organize major cultural festivals annually, along with monthly cultural programs and heritage preservation activities throughout the year."
    },
    {
      question: "Can schools and colleges participate in events?",
      answer: "Yes, we actively encourage participation from educational institutions. We offer special group registrations and customized programs for schools and colleges."
    },
    {
      question: "Are there events specifically for women and youth?",
      answer: "Yes, we regularly organize events focused on women's empowerment, youth leadership development, and skill-building programs tailored for different age groups."
    },
    {
      question: "How can I stay updated about upcoming events?",
      answer: "Subscribe to our newsletter, follow our social media channels, or regularly check our website's events page for the latest updates and announcements."
    },
    {
      question: "Do you organize events in rural areas?",
      answer: "Yes, we conduct events across urban and rural areas. Our mobile units and regional branches ensure that communities in all areas have access to our programs."
    },
    {
      question: "Can corporate organizations partner for events?",
      answer: "We welcome corporate partnerships and sponsorships. Please contact us through our partnerships section or email us for collaboration opportunities."
    }
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Events Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-primary/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Events & Gallery</h1>
          <p className="text-xl md:text-2xl">Our Community in Action</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {events.map((event, index) => (
              <EventCard
                key={event.title}
                title={event.title}
                date={event.date}
                location={event.location}
                image={event.image}
                description={event.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src="/placeholder.svg"
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
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

export default Events;

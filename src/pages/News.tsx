import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import skillDevImg from "@/assets/skill-development.jpg";
import socialWelfareImg from "@/assets/social-welfare.jpg";
import educationImg from "@/assets/education.jpg";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import heroBanner from "@/assets/hero-banner.jpg";

const faqs = [
    { question: "How often do you publish news updates?", answer: "We publish news and updates regularly, typically 2-3 times per week. Major announcements and event coverage are shared immediately." },
    { question: "Can I subscribe to receive news updates?", answer: "Yes, you can subscribe to our newsletter at the bottom of each page to receive the latest updates directly in your inbox." },
    { question: "How can I share a story or news tip?", answer: "We welcome community stories! Please contact us through our contact form or email us at news@valmikisamaj.org with your story." },
    { question: "Are past news articles archived?", answer: "Yes, all our news articles are archived and can be accessed through our website. Use the search function or browse by category." },
    { question: "Can I republish your news content?", answer: "Please contact us for permission before republishing any content. We usually allow republication with proper attribution." },
    { question: "Do you cover regional news?", answer: "Yes, we cover news from all our branches across India. Regional news is highlighted and categorized for easy access." },
    { question: "How do you verify news accuracy?", answer: "All news is verified by our editorial team before publication. We maintain strict journalistic standards for accuracy." },
    { question: "Can media outlets use your press releases?", answer: "Yes, our press releases are available for media use. Contact our communications team for additional information or interviews." },
    { question: "Do you have a media kit available?", answer: "Yes, we have a media kit with logos, photos, and organizational information. Contact us to request access." },
    { question: "How can I get featured in your news?", answer: "If you have a story about community impact or involvement with our programs, please reach out to us. We love featuring community stories." }
  ];

const News = () => {
  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="News Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-accent/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">News & Updates</h1>
          <p className="text-xl md:text-2xl">Stay Informed About Our Work</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Valmiki Samaj Trust Launches New Skill Center",
                date: "November 20, 2025",
                content:
                  "We are excited to announce the opening of our new state-of-the-art skill development center in Mumbai, equipped to train 500 youth annually in various vocational skills.",
                image: skillDevImg,
              },
              {
                title: "500 Families Benefit from Community Welfare Drive",
                date: "November 15, 2025",
                content:
                  "Our recent community welfare initiative provided essential supplies, medical checkups, and educational resources to 500 families across three districts.",
                image: socialWelfareImg,
              },
              {
                title: "Partnership with Tech Companies for Digital Literacy",
                date: "November 10, 2025",
                content:
                  "We've partnered with leading technology companies to launch an expanded digital literacy program, making technology accessible to rural communities.",
                image: educationImg,
              },
            ].map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={16} className="mr-2 text-primary" />
                      {news.date}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{news.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{news.content}</p>
                    <Button variant="outline" className="w-full">Learn More</Button>
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

export default News;

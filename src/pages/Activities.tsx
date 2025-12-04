import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import educationImg from "@/assets/education.jpg";
import skillImg from "@/assets/skill-development.jpg";
import welfareImg from "@/assets/social-welfare.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import culturalImg from "@/assets/cultural.jpg";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import heroBanner from "@/assets/hero-banner.jpg";

  const faqs = [
    { question: "What types of activities do you organize?", answer: "We organize diverse activities spanning education, skill development, social welfare, women & youth empowerment, and cultural programs - all designed for holistic community development." },
    { question: "How can I participate in activities?", answer: "You can participate by registering through our website, contacting your nearest branch, or following our social media for activity announcements and registration details." },
    { question: "Are activities free for participants?", answer: "Most activities are free. Some specialized training programs may have nominal fees to cover materials and certification. We ensure affordability for all." },
    { question: "Do you conduct activities in rural areas?", answer: "Yes, we actively conduct activities in both urban and rural areas. Our mobile units reach remote communities to ensure inclusive access to all programs." },
    { question: "Can schools/colleges collaborate for activities?", answer: "Absolutely! We welcome collaboration with educational institutions and offer customized programs, workshops, and awareness sessions for students and faculty." },
    { question: "How often are activities organized?", answer: "We have ongoing monthly activities plus special events throughout the year. Each branch maintains a calendar of activities shared on our website and social media." },
    { question: "Do you provide certificates for participation?", answer: "Yes, participants receive certificates for workshops, training programs, and skill development courses. These are recognized by partner organizations and industries." },
    { question: "Can corporates sponsor activities?", answer: "Yes, we welcome corporate sponsorship for specific activities or programs as part of CSR initiatives. Contact us to discuss partnership opportunities." },
    { question: "How do you select locations for activities?", answer: "Locations are selected based on community needs assessment, accessibility, safety, and infrastructure availability to ensure maximum participation and impact." },
    { question: "Can I suggest new activities?", answer: "We welcome suggestions! Share your ideas through our contact form or speak with your branch coordinator. Community-driven initiatives are always encouraged." }
  ];
  
const Activities = () => {
  const activities = [
    { title: "Education Support", image: educationImg, description: "We support students in achieving their education goals through scholarships, mentorship programs, university supplies and school supplies programs, and awareness programs. This aims to support families understand the importance of education and self-determination.", highlights: ["Scholarships for deserving students", "Mentorship programs", "School and university supplies", "Awareness programs for families", "Career guidance sessions"] },
    { title: "Skill Development", image: skillImg, description: "Training workshops and vocational programs are established to assist youth and adults in obtaining skills to enhance employment opportunities and financial stability.", highlights: ["Vocational training programs", "Job-readiness workshops", "Entrepreneurship development", "Industry partnerships", "Certification courses"] },
    { title: "Health & Welfare Initiatives", image: welfareImg, description: "The Trust provides health awareness initiatives, medical camps, access to sanitation, and health-related programs focused on improving quality of life.", highlights: ["Health awareness initiatives", "Medical camps", "Sanitation programs", "Health-related programs", "Quality of life improvement"] },
    { title: "Community Development", image: empowermentImg, description: "We take pride in addressing multiple social initiatives, including cleanliness campaigns, raising awareness, heritage preservation campaigns, and providing support and assistance to families in need.", highlights: ["Cleanliness campaigns", "Awareness programs", "Heritage preservation", "Family support services", "Community outreach"] },
    { title: "Women & Youth Empowerment", image: culturalImg, description: "We celebrate and preserve our rich cultural heritage through festivals, traditional arts workshops, and heritage preservation initiatives.", highlights: ["Leadership training", "Financial literacy workshops", "Personal development programs", "Sports programs", "Self-help groups"] },
  ];



  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Activities Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-secondary/80" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Activities</h1>
          <p className="text-xl md:text-2xl">Comprehensive Programs for Community Development</p>
        </motion.div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {activities.map((activity, index) => (
              <motion.div key={activity.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img src={activity.image} alt={activity.title} className="rounded-2xl shadow-2xl w-full" />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-3xl font-display font-bold mb-4 text-primary">{activity.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{activity.description}</p>
                  <Card><CardContent className="p-6"><h4 className="font-semibold mb-3">Program Highlights:</h4><ul className="space-y-2">{activity.highlights.map((highlight, i) => (<li key={i} className="flex items-start"><span className="text-primary mr-2">✓</span><span className="text-muted-foreground">{highlight}</span></li>))}</ul></CardContent></Card>
                </div>
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

export default Activities;

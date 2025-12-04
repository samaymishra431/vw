import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import skillDevImg from "@/assets/skill-development.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import educationImg from "@/assets/education.jpg";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import heroBanner from "@/assets/hero-banner.jpg";

  const faqs = [
    { question: "How long do your programs typically run?", answer: "Our programs vary in duration from short-term workshops (few days) to long-term initiatives (1-2 years) depending on the objectives and beneficiary needs." },
    { question: "How can I enroll in a program?", answer: "You can enroll by contacting your nearest branch, filling out our online application form, or attending our community outreach sessions." },
    { question: "Are programs available in all locations?", answer: "Most programs are available across all our branches. Some specialized programs may be location-specific based on resources and demand." },
    { question: "What support do participants receive?", answer: "Participants receive comprehensive support including training materials, mentorship, certification, and in some cases, financial assistance for transportation." },
    { question: "Can organizations partner on programs?", answer: "Yes, we actively seek partnerships with organizations, corporates, and government bodies to expand our program reach and impact." },
    { question: "How do you measure program success?", answer: "We measure success through participant outcomes, employment rates, feedback surveys, and long-term impact assessments conducted regularly." },
    { question: "Are there age restrictions for programs?", answer: "Programs are designed for specific age groups. Youth programs are for 18-35 years, while community programs are open to all ages." },
    { question: "Do you offer certificate programs?", answer: "Yes, many of our skill development and training programs offer industry-recognized certificates upon successful completion." },
    { question: "Can I suggest a new program?", answer: "Absolutely! We welcome community input on new program ideas. Submit your suggestions through our contact form or speak with branch coordinators." },
    { question: "How are programs funded?", answer: "Programs are funded through donations, grants, corporate partnerships, and government support. All funding details are disclosed in our annual reports." }
  ];

const Programs = () => {
  const programs = [
    {
      title: "Future Leaders Program",
      description:
        "A comprehensive program that identifies talented youth from underprivileged backgrounds and provides them with mentorship, skills training, and educational support to become community leaders.",
      impact: "Impact: Youth enrolled with high placement rate",
      image: educationImg,
    },
    {
      title: "Women Entrepreneurship Initiative",
      description:
        "Empowering women to start and grow their businesses through seed funding, business training, mentorship, and market linkages. This program helps establish women-led enterprises.",
      impact: "Impact: Multiple businesses established with significant revenue",
      image: empowermentImg,
    },
    {
      title: "Digital Literacy Campaign",
      description:
        "Bridging the digital divide by providing computer training, internet access, and digital skills education to communities. Making technology accessible and useful for daily life and livelihood.",
      impact: "Impact: Thousands trained in digital skills",
      image: skillDevImg,
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
<section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Programs Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Programs</h1>
          <p className="text-xl md:text-2xl">Long-term Initiatives for Lasting Change</p>
        </motion.div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">Featured Programs</h2>
            <p className="text-lg text-muted-foreground">
              Our signature programs are designed to create sustainable, long-term impact in the
              lives of our beneficiaries and communities.
            </p>
          </div>

          <div className="grid gap-12 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">

                    {/* IMAGE */}
                    <div
                      className={`w-full h-full ${
                        index % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <CardContent
                      className={`p-8 flex flex-col justify-center ${
                        index % 2 === 0 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <h3 className="text-2xl font-display font-bold mb-4 text-primary">
                        {program.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">{program.description}</p>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="font-semibold text-sm">Impact: {program.impact}</p>
                      </div>
                    </CardContent>

                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Support Our Programs</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your contribution can help us expand these programs and reach more beneficiaries.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved">
                Get Involved <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <Newsletter />
    </div>
  );
};

export default Programs;

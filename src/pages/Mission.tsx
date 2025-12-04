import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import educationImg from "@/assets/education.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import skillDevImg from "@/assets/skill-development.jpg";
import socialWelfareImg from "@/assets/social-welfare.jpg";
import culturalImg from "@/assets/cultural.jpg";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import heroBanner from "@/assets/hero-banner.jpg";

const faqs = [
    { question: "What is the core mission of Valmiki Samaj Trust?", answer: "Our core mission is to empower communities through comprehensive development programs that foster education, skill enhancement, social welfare, and cultural preservation. We aim to create sustainable change and an inclusive society." },
    { question: "What is the long-term vision of the organization?", answer: "Our vision is to create a society where every individual has equal opportunities to thrive, contribute, and live with dignity, respect, and purpose. We envision self-reliant, educated, and culturally rich communities." },
    { question: "How is your mission different from your vision?", answer: "Our mission is what we do—our current actions and programs to empower communities. Our vision is what we aspire to achieve—the ideal society we are working towards. The mission is the path, and the vision is the destination." },
    { question: "How does the Trust embody the value of 'Equality'?", answer: "We embody equality by designing programs that break down barriers of caste, creed, gender, or economic status. We strive to provide equal access to opportunities for all." },
    { question: "Can you explain your value of 'Service'?", answer: "Service is central to our existence. We are committed to serving our community with compassion and integrity. All our programs are designed to address genuine needs and create a lasting positive impact." },
    { question: "How does 'Integrity' play a role in your operations?", answer: "Integrity is a non-negotiable principle. We operate with transparency, honesty, and accountability, ensuring that all donations are used effectively and every promise made is kept." },
    { question: "What does 'Progress' mean for Valmiki Samaj Trust?", answer: "For us, progress means continuous improvement and innovation. We adapt our programs to the changing needs of the community and measure our success by the tangible improvements in the quality of life we help create." },
    { question: "How are your values reflected in your programs?", answer: "Our values are the bedrock of our programs. For example, 'Equality' drives our scholarship programs, 'Service' is reflected in our welfare drives, and 'Respect' is integral to our empowerment initiatives." },
    { question: "How can I contribute to your mission?", answer: "You can contribute by becoming a member, volunteering your time and skills, or donating. Every contribution helps us move closer to our vision. Please visit our 'Get Involved' page for more details." },
    { question: "What is the ultimate goal of your vision?", answer: "The ultimate goal is to build a self-reliant, educated, and culturally rich society where social barriers are dismantled and every person has the opportunity to reach their full potential." }
  ];
const Mission = () => {
  const values = [
    {
      title: "Equality",
      description:
        "Equality for the Trust is not a slogan but a daily practice. It means giving every individual the freedom to learn, grow, and participate without feeling lesser or overlooked. The idea is simple: no one should stand behind or ahead because of background, social position, or financial status. The Trust encourages fair access to opportunities so that people feel seen and included in every initiative.",
      image: educationImg,
    },
    {
      title: "Service",
      description:
        "Service is approached as a natural responsibility rather than an obligation. Volunteers and members step forward to support people in ways that genuinely matter to them, whether it is education, health, or basic guidance. The goal is to stay useful in small and big moments, offering steady support without expecting anything in return. Through consistent action, the Trust keeps service at the centre of every effort.",
      image: socialWelfareImg,
    },
    {
      title: "Respect",
      description:
        "Respect is practised by listening, understanding, and valuing each person's experiences. The Trust believes that when people feel heard, their confidence grows and their sense of belonging strengthens. Every interaction is handled with care, ensuring that dignity remains intact. Respect guides how decisions are made, how challenges are addressed, and how the community's thoughts and needs are acknowledged.",
      image: empowermentImg,
    },
    {
      title: "Integrity",
      description:
        "Integrity shapes how the Trust functions, from planning programmes to handling community interactions. It focuses on clarity, sincerity, and staying true to commitments. The Trust believes that doing the right thing, even when no one is watching, creates long-term confidence and trust. Members work with honesty and transparency, ensuring that every action reflects the organisation's purpose and promise.",
      image: skillDevImg,
    },
    {
      title: "Progress",
      description:
        "We surge ahead understanding real challenges, responding quickly, and keeping people's needs ahead of everything else. The Trust works closely with families, youth, and elders to create practical solutions that bring positive change. By prioritising collective growth over individual recognition, the Trust ensures that progress is shared, steady, and meaningful for everyone connected to the Valmiki Samaj.",
      image: culturalImg,
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Mission & Vision Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-primary/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl md:text-2xl">Our Guiding Principles and Future Goals</p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center text-primary">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-6">
                  To promote education, welfare and empowerment in the Valmiki community while creating unity, dignity, and equity for a better future.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We are committed to creating sustainable change by providing access to quality education, vocational training, healthcare services, and opportunities for personal and professional growth. Our mission extends beyond immediate relief to building long-term capabilities that enable individuals and communities to thrive independently.
                </p>
                <p className="text-lg text-muted-foreground">
                  Through collaborative efforts with stakeholders, volunteers, and beneficiaries, we work towards creating an inclusive society where every individual has the opportunity to reach their full potential and contribute meaningfully to their communities.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={educationImg}
                  alt="Our Mission"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center text-secondary">
              Our Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={empowermentImg}
                  alt="Our Vision"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              <div>
                <p className="text-xl text-muted-foreground mb-6">
                  To build strength, progression and independence in the community where everyone has access to education, growth and social equity.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We envision communities that are self-reliant, educated, and culturally rich, where social barriers are dismantled and every person is valued for their unique contributions. Our vision encompasses a future where access to resources, education, and opportunities is not determined by one's background but by their aspirations and efforts.
                </p>
                <p className="text-lg text-muted-foreground">
                  We aspire to create a ripple effect where empowered individuals become agents of change in their own communities, leading to a self-sustaining cycle of growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Expanded */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Our Values in Detail
          </h2>

          <div className="grid gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">

                    {/* IMAGE */}
                    <div
                      className={`w-full h-full ${
                        index % 2 === 0
                          ? "md:order-2" // even - image on right
                          : "md:order-1" // odd - image on left
                      }`}
                    >
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <CardContent
                      className={`p-8 flex flex-col justify-center ${
                        index % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>

                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Principles */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Our Principles & Code of Conduct
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Transparency",
                description:
                  "We maintain open communication with all stakeholders and provide regular updates on our activities, finances, and impact.",
              },
              {
                title: "Accountability",
                description:
                  "We hold ourselves responsible for the outcomes of our programs and continuously evaluate our effectiveness.",
              },
              {
                title: "Community Participation",
                description:
                  "We believe in empowering communities to take ownership of their development by actively involving them in planning and implementation.",
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-3 text-accent">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">{principle.description}</p>
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

export default Mission;

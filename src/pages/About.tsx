import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import valmikiJi from "@/assets/valmiki-ji.jpg";
import educationImg from "@/assets/education.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="About Us Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Discover Our Story and Values</p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Valmiki Samaj Trust is a service-oriented organization founded on the principles of compassion, solidarity, inclusion, and equality. It works across several community-focused areas, including education, healthcare access, skill development, youth empowerment, and the preservation of cultural heritage. The Trust is driven by dedicated volunteers, community members, and professionals who share a commitment to uplifting every individual within the Valmiki Samaj.
                </p>
                <p className="text-lg text-muted-foreground">
                 Through its diverse initiatives, the Trust maintains close and meaningful connections with disadvantaged groups, offering practical support that makes a real difference in daily life. Whether helping students stay committed to their studies, guiding people in accessing medical care, or motivating youth to learn new skills, Valmiki Samaj Trust focuses on genuine involvement and hands-on assistance to strengthen and empower the community.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={educationImg} alt="Community" className="rounded-2xl shadow-xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Maharishi Valmiki */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={valmikiJi} alt="Maharishi Valmiki Ji" className="rounded-2xl shadow-2xl" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">About Maharishi Valmiki Ji</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Maharishi Valmiki is revered as the author of the ancient Indian epic, the Ramayana. His life story is one of profound transformation, from a life of hardship to becoming one of the greatest sages in Indian history.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                His teachings emphasize the values of equality, compassion, and the potential for transformation through dedication and service. The Valmiki Samaj Trust draws inspiration from his life and works, striving to embody these timeless principles.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, his legacy continues to guide our community in pursuing education, social justice, and cultural preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Equality",
                description: "Equality for the Trust is not a slogan but a daily practice. It means giving every individual the freedom to learn, grow, and participate without feeling lesser or overlooked.",
              },
              {
                title: "Service",
                description: "Service is approached as a natural responsibility rather than an obligation. Volunteers and members step forward to support people in ways that genuinely matter to them.",
              },
              {
                title: "Respect",
                description: "Respect is practised by listening, understanding, and valuing each person's experiences. The Trust believes that when people feel heard, their confidence grows.",
              },
              {
                title: "Integrity",
                description: "Integrity shapes how the Trust functions, from planning programmes to handling community interactions. It focuses on clarity, sincerity, and staying true to commitments.",
              },
              {
                title: "Progress",
                description: "We surge ahead understanding real challenges, responding quickly, and keeping people's needs ahead of everything else. Progress is shared, steady, and meaningful.",
              },
              {
                title: "Unity",
                description: "Building strong, cohesive communities through collaboration and mutual support.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-display font-semibold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-display font-bold mb-4">Our Milestones</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A journey of continuous growth and community impact
                  </p>
                </motion.div>
      
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Dotted connecting line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dotted border-primary/30 -translate-y-1/2" />
                    
                    {[
                      { year: "2010", event: "Foundation of Valmiki Samaj Trust established", position: "bottom" },
                      { year: "2015", event: "Reached 1,000 students through education programs", position: "top" },
                      { year: "2020", event: "Expanded to 10 cities with 50+ volunteer teams", position: "bottom" },
                      { year: "2025", event: "Served 10,000+ beneficiaries across multiple states", position: "top" },
                    ].map((milestone, index) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, y: milestone.position === "top" ? -30 : 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center"
                      >
                        {milestone.position === "bottom" && (
                          <>
                            <Card className="mb-6 hover:shadow-lg transition-all">
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                              </CardContent>
                            </Card>
                            <div className="relative">
                              <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                            </div>
                            <div className="h-8 w-0.5 border-l-2 border-dotted border-primary/50" />
                            <Card className="mt-6 hover:shadow-lg transition-all">
                              <CardContent className="p-4">
                                <p className="text-sm text-muted-foreground text-center">{milestone.event}</p>
                              </CardContent>
                            </Card>
                          </>
                        )}
                        {milestone.position === "top" && (
                          <>
                            <Card className="mb-6 hover:shadow-lg transition-all">
                              <CardContent className="p-4">
                                <p className="text-sm text-muted-foreground text-center">{milestone.event}</p>
                              </CardContent>
                            </Card>
                            <div className="h-8 w-0.5 border-l-2 border-dotted border-primary/50" />
                            <div className="relative">
                              <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                            </div>
                            <Card className="mt-6 hover:shadow-lg transition-all">
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default About;

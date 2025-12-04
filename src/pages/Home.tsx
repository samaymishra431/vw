import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Wrench,
  Heart,
  Users,
  Music,
  ArrowRight,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  HandHeart,
} from "lucide-react";
import EventCard from "@/components/EventCard";
import Newsletter from "@/components/Newsletter";
import heroBanner from "@/assets/hero-banner.jpg";
import educationImg from "@/assets/education.jpg";
import skillImg from "@/assets/skill-development.jpg";
import welfareImg from "@/assets/social-welfare.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import culturalImg from "@/assets/cultural.jpg";
import valmikiJi from "@/assets/valmiki-ji.jpg";

const Home = () => {
  const activities = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Education",
      description: "Scholarships and mentorship programs for underprivileged students",
      image: educationImg,
      link: "/activities",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Skill Development",
      description: "Vocational training and job-readiness programs for youth",
      image: skillImg,
      link: "/activities",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Social Welfare",
      description: "Medical camps, health awareness, and sanitation initiatives",
      image: welfareImg,
      link: "/activities",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Women & Youth Empowerment",
      description: "Leadership training and financial literacy programs",
      image: empowermentImg,
      link: "/activities",
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: "Cultural Programs",
      description: "Festivals, heritage preservation, and traditional arts",
      image: culturalImg,
      link: "/activities",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Beneficiaries Supported" },
    { value: "5,000+", label: "Students Helped" },
    { value: "500+", label: "Active Volunteers" },
    { value: "100+", label: "Community Drives" },
  ];

  const events = [
    {
      title: "Annual Education Fair 2025",
      date: "December 15, 2025",
      location: "Delhi Community Center",
      image: educationImg,
    },
    {
      title: "Skill Development Workshop",
      date: "December 20, 2025",
      location: "Regional Training Hub",
      image: skillImg,
    },
    {
      title: "Cultural Heritage Festival",
      date: "January 5, 2026",
      location: "National Heritage Park",
      image: culturalImg,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/40 z-10" />
          <img src={heroBanner} alt="Community Unity" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Empowering Communities,
            <br />
            <span className="text-primary">Transforming Lives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Valmiki Samaj Trust is an organization focused on community service and dedicated to elevating society through opportunities for social upliftment, education, dignity, and equity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
              <Link to="/get-involved">
                Join Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
              <Link to="/get-involved">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
              <Link to="/activities">Explore Activities</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={valmikiJi}
                alt="Maharishi Valmiki Ji"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                About <span className="text-primary">Valmiki Samaj Trust</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Valmiki Samaj Trust was founded with its purpose rooted in service to society through compassion and solidarity. Designing its work on the values of inclusion and equality, the Trust embarks on a diverse portfolio of charitable activities supporting education, health, skill development, youth empowerment, and cultural preservation.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We aim to empower the Valmiki community through development, culture, and support services that foster development and self-sufficiency. Our mission is to make a difference, bring people together, enhance families, and create a future to be proud of.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Activities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on five key areas to create lasting positive change in our communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={activity.link}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        {activity.icon}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Mission & Vision Snapshot */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-display font-bold mb-4 text-accent">About Us</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Learn about our history, values, and the community we serve. Discover the
                    legacy of Maharishi Valmiki and how it inspires our work.
                  </p>
                  <Button variant="link" asChild className="px-0">
                    <Link to="/about">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-display font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                   To promote education, welfare and empowerment in the Valmiki community while creating unity, dignity, and equity for a better future.
                  </p>
                  <Button variant="link" asChild className="px-0">
                    <Link to="/mission">
                      Read Full Mission <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-display font-bold mb-4 text-secondary">Our Vision</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    To build strength, progression and independence in the community where everyone has access to education, growth and social equity.
                  </p>
                  <Button variant="link" asChild className="px-0">
                    <Link to="/mission">
                      Read Full Vision <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Impact</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Making a difference in thousands of lives across communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in our upcoming community events and programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {events.map((event, index) => (
              <EventCard
                key={event.title}
                title={event.title}
                date={event.date}
                location={event.location}
                image={event.image}
                description="Join us for this exciting community event. Connect with others and make a difference."
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/events">
                View All Events <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Gallery Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments captured from our various community programs and events
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[educationImg, skillImg, welfareImg, empowermentImg, culturalImg, valmikiJi].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/events">
                View Full Gallery <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Target className="w-10 h-10" />, title: "Equality", image: educationImg },
              { icon: <HandHeart className="w-10 h-10" />, title: "Service", image: welfareImg },
              { icon: <Heart className="w-10 h-10" />, title: "Respect", image: empowermentImg },
              { icon: <Award className="w-10 h-10" />, title: "Integrity", image: valmikiJi },
              { icon: <Lightbulb className="w-10 h-10" />, title: "Progress", image: skillImg },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center text-white">
                      {value.icon}
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-display font-semibold">{value.title}</h3>
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Be the Change You Want to See
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join us in our mission to empower communities and transform lives. Every contribution,
              big or small, makes a significant difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/get-involved">
                  Volunteer With Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/get-involved">Make a Donation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/get-involved">Become a Member</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;

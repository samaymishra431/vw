import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import { toast } from "sonner";
import heroBanner from "@/assets/hero-banner.jpg";

const Contact = () => {
  const faqs = [
    { question: "What are your office hours?", answer: "Our offices are open Monday to Saturday, 10 AM to 6 PM. We are closed on Sundays and public holidays." },
    { question: "How quickly will I receive a response?", answer: "We aim to respond to all inquiries within 24-48 hours during business days. Urgent matters are prioritized." },
    { question: "Can I schedule a visit to your office?", answer: "Yes, you can schedule a visit by calling us or sending an email. We recommend booking an appointment for detailed discussions." },
    { question: "Do you have a helpline number?", answer: "Yes, our main helpline is 098114 24141. For branch-specific inquiries, please contact your nearest branch directly." },
    { question: "Can I contact you via WhatsApp?", answer: "Yes, we're available on WhatsApp at 098114 24141 for quick queries and updates during business hours." },
    { question: "How do I report an issue or provide feedback?", answer: "You can report issues or provide feedback through our contact form, email, or by speaking with our team directly at any branch." },
    { question: "Do you respond to social media messages?", answer: "Yes, we monitor and respond to messages on all our social media platforms. However, email or phone is preferred for urgent matters." },
    { question: "Can international supporters contact you?", answer: "Absolutely! We welcome inquiries from international supporters. You can reach us via email or schedule a video call for detailed discussions." },
    { question: "Is there a separate contact for media inquiries?", answer: "Yes, for media inquiries, please email media@valmikisamaj.org or call our main office and ask for the communications team." },
    { question: "How do I update my contact information?", answer: "You can update your information by contacting us via email or phone, or by visiting your registered branch with identification." }
  ];

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle form submission logic (e.g., API call)
    toast.success("Form submitted successfully!");
    setTimeout(() => {
      window.location.reload();
    }, 1500); // Reload after 1.5 seconds
  };

  return (
    <div>
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Contact Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-secondary/80" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">We'd Love to Hear From You</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6 mb-8 flex-1">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">A-2, opp. BADLI INDUSTRIAL area, Suraj Park, Sector 18, Rohini, Delhi, 110042</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">098114 24141</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@valmikisamaj.org</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Youtube size={20} /></a>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.7!2d77.0759!3d28.7402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06c5e3e8e8a1%3A0x8e8b9e8e8e8e8e8e!2sSuraj%20Park%2C%20Sector%2018%2C%20Rohini%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Enter your full name" /></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your.email@example.com" /></div>
                    <div><Label htmlFor="phone">Phone Number</Label><Input id="phone" type="tel" placeholder="+91 1234567890" /></div>
                    <div><Label htmlFor="subject">Subject</Label><Input id="subject" placeholder="How can we help you?" /></div>
                    <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Your message" rows={6} /></div>
                    <Button type="submit" className="w-full" size="lg">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <Newsletter />
    </div>
  );
};

export default Contact;

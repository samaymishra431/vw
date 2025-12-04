import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import empowermentImg from "@/assets/empowerment.jpg";
import atmImage from "@/assets/donation.png";
import heroBanner from "@/assets/hero-banner.jpg";

const GetInvolved = () => {
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
          <img src={heroBanner} alt="Get Involved Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Get Involved</h1>
          <p className="text-xl md:text-2xl">Join Us in Making a Difference</p>
        </motion.div>
      </section>

<section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              We are happy to have people, volunteers, and supporters to assist with our work. It could be providing time, skills, or support, every little bit helps to make a stronger community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Become a Member",
                description: "Join our community and be part of the change you want to see.",
              },
              {
                title: "Volunteer",
                description: "Contribute your time and skills to make a real impact.",
              },
              {
                title: "Donate",
                description: "Support our programs and help us reach more beneficiaries.",
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-display font-bold mb-3 text-primary">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <Card>
              <div className="grid md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <img 
                    src={empowermentImg} 
                    alt="Get Involved" 
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </motion.div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Contact Form
                  </h3>
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 1234567890" />
                    </div>
                    <div>
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Input id="interest" placeholder="Volunteer, Membership, Donation, etc." />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us how you'd like to get involved" rows={4} />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6 text-center">
              Donation Information
            </h2>
            <Card>
              <div className="grid md:grid-cols-2">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Your donations enable us to continue our work in education, skill development,
                    and community welfare. Every contribution, no matter the size, makes a
                    significant difference.
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Bank Details:</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Account Name:</strong> Valmiki Samaj Trust
                      </p>
                      <p>
                        <strong>Account Number:</strong> XXXX XXXX XXXX
                      </p>
                      <p>
                        <strong>IFSC Code:</strong> XXXXXXXX
                      </p>
                      <p>
                        <strong>UPI ID:</strong> valmikisamaj@upi
                      </p>
                    </div>
                  </div>
                </CardContent>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <img
                    src={atmImage}
                    alt="Donation"
                    className="w-full h-full object-cover rounded-r-lg"
                  />
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

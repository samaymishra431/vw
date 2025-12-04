import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  description?: string;
  index: number;
}

const EventCard = ({ title, date, location, image, description, index }: EventCardProps) => {
  const [showLocation, setShowLocation] = useState(false);

  const formatDate = (dateString: string) => {
    const [month, day, year] = dateString.split(" ");
    return { day: day.replace(",", ""), month };
  };

  const { day, month } = formatDate(date);

  const handleLocationClick = () => {
    const query = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64 group">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg">
            <div className="text-2xl font-bold text-primary">{day}</div>
            <div className="text-xs font-semibold text-muted-foreground uppercase">{month}</div>
          </div>

          {/* Location Icon */}
          <div className="absolute top-4 right-4">
            <div
              className="relative"
              onMouseEnter={() => setShowLocation(true)}
              onMouseLeave={() => setShowLocation(false)}
            >
              <button
                onClick={handleLocationClick}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
              >
                <MapPin className="w-5 h-5 text-primary" />
              </button>
              {showLocation && (
                <div className="absolute top-12 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl z-10">
                  {location}
                </div>
              )}
            </div>
          </div>

          {/* Learn More Button */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar size={16} className="mr-2 text-primary" />
              {date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin size={16} className="mr-2 text-primary" />
              {location.split(" ")[0]}
            </div>
          </div>
          <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm flex-1">{description}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;

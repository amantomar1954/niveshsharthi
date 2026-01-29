"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ChevronRight,
  Share2,
  Heart,
  MapPin,
  Maximize2,
  Wifi,
  Dumbbell,
  Trees,
  Shield,
  Waves,
  Car,
  Wind,
  Zap,
  PhoneCall,
  User,
  Send,
  MessageCircle,
  ChevronLeft,
  Camera,
  Bed,
  Bath,
} from "lucide-react";
import propertiesData from "@/data/properties.json";

const Index = () => {
  const params = useParams();
  const propertyId = params.id;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = propertiesData.properties.find(p => p.id === propertyId);
    setProperty(foundProperty);
  }, [propertyId]);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground text-lg">Loading property...</p>
      </div>
    );
  }

  const propertyImages = property.images || [property.image];

  const amenityIcons = {
    "WiFi": Wifi,
    "Gym": Dumbbell,
    "Garden": Trees,
    "Security": Shield,
    "Pool": Waves,
    "Parking": Car,
    "AC": Wind,
    "Power Backup": Zap,
    "Intercom": PhoneCall,
    "Gated": Shield,
    "Water Supply": Waves,
    "Garden Area": Trees,
    "High Speed WiFi": Wifi,
    "Gymnasium": Dumbbell,
    "24/7 Security": Shield,
    "Swimming Pool": Waves,
    "Covered Parking": Car,
    "Air Conditioning": Wind,
    "Power Backup": Zap,
    "Intercom Facility": PhoneCall,
    "Smart Home": Zap,
  };

  const displayAmenities = property.amenities?.map(amenity => ({
    icon: amenityIcons[amenity] || Shield,
    label: amenity
  })) || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === propertyImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? propertyImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 mt-24">
        {/* Breadcrumb & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Industrial Warehouse</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 border border-border px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 border border-border px-3 py-2 rounded-md text-sm transition-colors ${
                isSaved ? "text-destructive border-destructive hover:bg-destructive/10" : "hover:bg-secondary"
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative rounded-xl overflow-hidden bg-muted aspect-[16/10]">
              <img
                src={propertyImages[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* View All Photos Button */}
              <button className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-card transition-colors">
                <Camera className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">View All Photos</span>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-foreground/70 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-lg text-sm">
                {currentImageIndex + 1} / {propertyImages.length}
              </div>

              {/* Property Type Tag */}
              <div className="absolute top-4 left-4 bg-industrial text-industrial-foreground px-3 py-1 rounded-lg text-sm font-medium">
                {property.type}
              </div>
            </div>

            {/* Property Info Card */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <span className="inline-block bg-industrial text-industrial-foreground px-3 py-1 rounded-lg text-sm font-medium mb-3">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl sm:text-4xl font-bold text-price">{property.price}</p>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                <div className="inline-flex items-center gap-4 bg-secondary rounded-xl p-4">
                  <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border">
                    <Maximize2 className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p className="text-lg font-semibold text-foreground">{property.area}</p>
                  </div>
                </div>
                {property.beds > 0 && (
                  <div className="inline-flex items-center gap-4 bg-secondary rounded-xl p-4 ml-3">
                    <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border">
                      <Bed className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                      <p className="text-lg font-semibold text-foreground">{property.beds}</p>
                    </div>
                  </div>
                )}
                {property.baths > 0 && (
                  <div className="inline-flex items-center gap-4 bg-secondary rounded-xl p-4 ml-3">
                    <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border">
                      <Bath className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                      <p className="text-lg font-semibold text-foreground">{property.baths}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* About Property */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">About This Property</h2>
              <p className="text-muted-foreground mb-4">{property.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Property Type</span>
                <span className="bg-industrial/10 text-industrial px-3 py-1 rounded-lg text-sm font-medium">
                  {property.type}
                </span>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Amenities</h2>
              {displayAmenities.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {displayAmenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <amenity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No amenities listed for this property.</p>
              )}
            </div>

            {/* Location */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Location</h2>
              <div className="bg-secondary rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">{property.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">Map view available on request</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form & Agent */}
          <div className="space-y-6">
            {/* Inquiry Form */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Interested in this property?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form and we'll get back to you.
              </p>

              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="pl-10 bg-background border border-border rounded-md w-full py-2 px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="pl-10 bg-background border border-border rounded-md w-full py-2 px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Your Mobile *"
                    className="pl-10 bg-background border border-border rounded-md w-full py-2 px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="bg-background border border-border rounded-md w-full py-2 px-3 text-foreground min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-md font-medium flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Agent Card */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://i.pravatar.cc/150?img=68"
                  alt="Agent"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{property.contact.name}</h4>
                  <p className="text-sm text-muted-foreground">Property Consultant</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Our experienced team is here to help you with all your property needs.
                Contact us for personalized assistance.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${property.contact.phone}`}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{property.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${property.contact.email}`}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Send Email</span>
                </a>
                <a
                  href={`https://wa.me/${property.contact.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Index;

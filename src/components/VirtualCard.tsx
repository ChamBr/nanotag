import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Star, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { companies } from "@/data/companies";

interface VirtualCardProps {
  avatar: string;
  name: string;
  description: string;
  email: string;
  location: string;
  phone?: string;
  theme?: "kitchen" | "max";
  company: "KK" | "MG";
}

export const VirtualCard = ({
  avatar,
  name,
  description,
  email,
  phone,
  theme = "kitchen",
  company,
}: VirtualCardProps) => {
  const [showLocations, setShowLocations] = useState(false);

  const themeStyles = {
    kitchen: {
      background: "bg-white",
      button: "bg-kitchen-green hover:bg-kitchen-green/90",
      border: "border-kitchen-green",
      text: "text-kitchen-green",
      logo: "/lovable-uploads/a35f8e8d-bf11-40fa-be6a-883423b8fc7f.png"
    },
    max: {
      background: "bg-gradient-to-br from-white to-gray-50",
      button: "bg-gold hover:bg-gold-dark text-white transition-colors duration-300",
      border: "border-gold",
      text: "text-gold",
      logo: "/lovable-uploads/81d1f75c-da82-406a-80e2-37960c4cfb1a.png"
    },
  };

  const companyData = companies[company];

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
EMAIL:${email}
TEL:${phone}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${name}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Contact information ready to save!");
  };

  const handleWhatsAppClick = () => {
    if (phone) {
      const cleanPhone = phone.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanPhone}`, '_blank');
    }
  };

  const handleWebsiteClick = () => {
    window.open(`https://${companyData.website}`, '_blank');
  };

  return (
    <Card className={`w-full overflow-hidden ${themeStyles[theme].background} shadow-lg rounded-2xl animate-card-enter p-8 flex flex-col items-center gap-6 backdrop-blur-sm backdrop-filter`}>
      <Avatar className={`w-24 h-24 border-4 ${themeStyles[theme].border} ring-2 ring-offset-2 ring-kitchen-green/50`}>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-kitchen-dark">
          {name}
        </h2>
        <p className="text-sm font-medium text-kitchen-dark/80">{description}</p>
        <p className="text-sm text-kitchen-dark/60">{email}</p>
      </div>

      <div className="w-full space-y-3">
        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-sm hover:shadow-md transition-all duration-300`}
          onClick={handleSaveContact}
        >
          Save Contact
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="mr-2" />
          WhatsApp
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-sm hover:shadow-md transition-all duration-300`}
          onClick={handleWebsiteClick}
        >
          <Globe className="mr-2" />
          Website
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-sm hover:shadow-md transition-all duration-300`}
          onClick={() => setShowLocations(!showLocations)}
        >
          <Star className="mr-2" />
          Leave Review
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-sm hover:shadow-md transition-all duration-300`}
          onClick={() => setShowLocations(!showLocations)}
        >
          <MapPin className="mr-2" />
          Location
        </Button>

        {showLocations && (
          <div className="space-y-2 mt-4 animate-in fade-in slide-in-from-top-4">
            {companyData.locations.map((location, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full border-2 hover:bg-gray-50/50 transition-colors duration-300"
                onClick={() => window.open(location.googleReview, '_blank')}
              >
                {location.name}
              </Button>
            ))}
          </div>
        )}
      </div>

      <img 
        src={themeStyles[theme].logo} 
        alt="Company Logo" 
        className="w-48 h-auto mt-4 opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
    </Card>
  );
};
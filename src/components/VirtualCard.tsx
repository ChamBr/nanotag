import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Star, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface VirtualCardProps {
  avatar: string;
  name: string;
  description: string;
  email: string;
  location: string;
  phone?: string;
  theme?: "kitchen" | "max";
}

export const VirtualCard = ({
  avatar,
  name,
  description,
  email,
  location,
  phone,
  theme = "kitchen",
}: VirtualCardProps) => {
  const [showCompanies, setShowCompanies] = useState(false);

  const themeStyles = {
    kitchen: {
      background: "bg-white",
      button: "bg-[#A2AD6F] hover:bg-[#A2AD6F]/90",
      border: "border-[#A2AD6F]",
      text: "text-[#A2AD6F]",
      logo: "/lovable-uploads/6101ddab-c05a-47dd-9390-55891c3e1bc1.png"
    },
    max: {
      background: "bg-white",
      button: "bg-red-600 hover:bg-red-700",
      border: "border-red-600",
      text: "text-red-600",
      logo: "/lovable-uploads/81d1f75c-da82-406a-80e2-37960c4cfb1a.png"
    },
  };

  const handleSaveContact = () => {
    // Create vCard format
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
EMAIL:${email}
TEL:${phone}
END:VCARD`;

    // Create blob and download
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
      // Remove any non-numeric characters from phone number
      const cleanPhone = phone.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanPhone}`, '_blank');
    }
  };

  const handleCompanyClick = (company: string) => {
    const urls = {
      'Kitchen Konnections': 'https://kitchenkonnections.com',
      'Max Granite': 'https://maxgranite.com'
    };
    window.open(urls[company], '_blank');
  };

  return (
    <Card className={`w-full overflow-hidden ${themeStyles[theme].background} shadow-lg animate-card-enter p-8 flex flex-col items-center gap-6`}>
      <Avatar className={`w-24 h-24 border-4 ${themeStyles[theme].border}`}>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-neutral-gray">{description}</p>
        <p className="text-sm text-neutral-gray">{email}</p>
      </div>

      <div className="w-full space-y-3">
        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white`}
          onClick={handleSaveContact}
        >
          Save Contact
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="mr-2" />
          WhatsApp
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white`}
          onClick={() => window.open('https://www.maxbusinessgroup.net', '_blank')}
        >
          <Globe className="mr-2" />
          Website
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white`}
          onClick={() => setShowCompanies(!showCompanies)}
        >
          <Star className="mr-2" />
          Leave Review
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white`}
          onClick={() => setShowCompanies(!showCompanies)}
        >
          <MapPin className="mr-2" />
          Location
        </Button>

        {showCompanies && (
          <div className="space-y-2 mt-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleCompanyClick('Kitchen Konnections')}
            >
              Kitchen Konnections
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleCompanyClick('Max Granite')}
            >
              Max Granite
            </Button>
          </div>
        )}
      </div>

      <img 
        src={themeStyles[theme].logo} 
        alt="Company Logo" 
        className="w-32 h-auto mt-4"
      />
    </Card>
  );
};
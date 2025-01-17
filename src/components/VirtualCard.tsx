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
      background: "bg-gradient-to-br from-slate-50 to-slate-100",
      button: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
      border: "border-blue-600",
      text: "text-blue-600",
      logo: "/lovable-uploads/81d1f75c-da82-406a-80e2-37960c4cfb1a.png"
    },
  };

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

  const handleCompanyClick = (company: string) => {
    const urls = {
      'Kitchen Konnections': 'https://kitchenkonnections.com',
      'Max Granite': 'https://maxgranite.com'
    };
    window.open(urls[company], '_blank');
  };

  return (
    <Card className={`w-full overflow-hidden ${themeStyles[theme].background} shadow-xl rounded-2xl animate-card-enter p-8 flex flex-col items-center gap-6 backdrop-blur-sm backdrop-filter`}>
      <Avatar className={`w-24 h-24 border-4 ${themeStyles[theme].border} ring-2 ring-offset-2 ring-blue-500/50`}>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {name}
        </h2>
        <p className="text-sm font-medium text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      <div className="w-full space-y-3">
        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300`}
          onClick={handleSaveContact}
        >
          Save Contact
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium shadow-lg shadow-green-500/20 transition-all duration-300"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="mr-2" />
          WhatsApp
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300`}
          onClick={() => window.open('https://www.maxbusinessgroup.net', '_blank')}
        >
          <Globe className="mr-2" />
          Website
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300`}
          onClick={() => setShowCompanies(!showCompanies)}
        >
          <Star className="mr-2" />
          Leave Review
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300`}
          onClick={() => setShowCompanies(!showCompanies)}
        >
          <MapPin className="mr-2" />
          Location
        </Button>

        {showCompanies && (
          <div className="space-y-2 mt-4 animate-in fade-in slide-in-from-top-4">
            <Button
              variant="outline"
              className="w-full border-2 hover:bg-gray-50 transition-colors duration-300"
              onClick={() => handleCompanyClick('Kitchen Konnections')}
            >
              Kitchen Konnections
            </Button>
            <Button
              variant="outline"
              className="w-full border-2 hover:bg-gray-50 transition-colors duration-300"
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
        className="w-32 h-auto mt-4 opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
    </Card>
  );
};
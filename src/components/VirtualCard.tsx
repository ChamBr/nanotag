import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, MapPin, MessageCircle, Star, Wallet } from "lucide-react";
import { toast } from "sonner";

interface VirtualCardProps {
  avatar: string;
  name: string;
  description: string;
  email: string;
  location: string;
  theme?: "kitchen" | "max";
}

export const VirtualCard = ({
  avatar,
  name,
  description,
  email,
  location,
  theme = "kitchen",
}: VirtualCardProps) => {
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
          onClick={() => {
            toast.success("Contact information saved!");
          }}
        >
          Save Contact
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
        >
          <MessageCircle className="mr-2" />
          WhatsApp
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white"
        >
          <Instagram className="mr-2" />
          Instagram
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
        >
          <Facebook className="mr-2" />
          Facebook
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white`}
        >
          <Star className="mr-2" />
          Leave Review
        </Button>

        <Button
          variant="secondary"
          className={`w-full ${themeStyles[theme].button} text-white`}
        >
          <MapPin className="mr-2" />
          Location
        </Button>
      </div>

      <div className="w-full space-y-4 text-sm text-neutral-gray">
        <div className="flex items-center gap-2">
          <MapPin className="shrink-0" />
          <p>{location}</p>
        </div>
      </div>

      <img 
        src={themeStyles[theme].logo} 
        alt="Company Logo" 
        className="w-32 h-auto mt-4"
      />
    </Card>
  );
};
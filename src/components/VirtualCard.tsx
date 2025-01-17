import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, MapPin, MessageCircle, Star, Wallet } from "lucide-react";

interface VirtualCardProps {
  avatar: string;
  name: string;
  description: string;
  email: string;
  location: string;
}

export const VirtualCard = ({
  avatar,
  name,
  description,
  email,
  location,
}: VirtualCardProps) => {
  return (
    <Card className="w-full overflow-hidden bg-white/10 backdrop-blur-lg animate-card-enter p-8 flex flex-col items-center gap-6">
      <Avatar className="w-24 h-24 border-4 border-white/20">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="text-sm text-neutral-gray">{description}</p>
      </div>

      <div className="w-full space-y-3">
        <Button
          variant="secondary"
          className="w-full bg-white/20 hover:bg-white/30 text-white"
          onClick={() => {
            // Add contact functionality
            toast.success("Contact information saved!");
          }}
        >
          Salvar contato
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
          className="w-full bg-white/20 hover:bg-white/30 text-white"
        >
          <Star className="mr-2" />
          Avaliar sessão
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-white/20 hover:bg-white/30 text-white"
        >
          <Wallet className="mr-2" />
          PAGAR COM PIX
        </Button>
      </div>

      <div className="w-full space-y-4 text-sm text-neutral-gray">
        <div className="flex items-center gap-2">
          <MapPin className="shrink-0" />
          <p>{location}</p>
        </div>
        <p className="text-center">{email}</p>
      </div>
    </Card>
  );
};
import { CreditCard, Nfc } from "lucide-react";

interface VirtualCardProps {
  name: string;
  number: string;
  validThru: string;
}

export const VirtualCard = ({ name, number, validThru }: VirtualCardProps) => {
  const formatCardNumber = (num: string) => {
    return num.replace(/(\d{4})/g, "$1 ").trim();
  };

  return (
    <div className="animate-card-enter">
      <div className="relative w-[320px] h-[200px] mx-auto rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-card-primary to-card-secondary shadow-xl">
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        
        {/* Conteúdo do cartão */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <CreditCard className="text-white/90 w-10 h-10" />
            <Nfc className="text-white/80 w-6 h-6" />
          </div>
          
          <div className="space-y-4">
            <div className="text-lg text-white/90 font-medium tracking-widest">
              {formatCardNumber(number)}
            </div>
            
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-xs text-white/60 uppercase">Card Holder</p>
                <p className="text-sm text-white/90 font-medium">{name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-white/60 uppercase">Valid Thru</p>
                <p className="text-sm text-white/90 font-medium">{validThru}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
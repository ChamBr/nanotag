import { VirtualCard } from "@/components/VirtualCard";
import { useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    toast.success("NFC tag detected!", {
      description: "Loading business card information...",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <VirtualCard
          avatar="/lovable-uploads/6101ddab-c05a-47dd-9390-55891c3e1bc1.png"
          name="Kitchen Konnections"
          description="Transformando sua cozinha em um espaço único e funcional"
          email="contato@kitchenkonnections.com"
          location="Av. Principal, 1234, Centro"
          theme="kitchen"
        />
        
        <VirtualCard
          avatar="/lovable-uploads/6101ddab-c05a-47dd-9390-55891c3e1bc1.png"
          name="Max Granite"
          description="Qualidade e excelência em granitos e mármores"
          email="contato@maxgranite.com"
          location="Rua dos Mármores, 567, Distrito Industrial"
          theme="max"
        />
      </div>
    </div>
  );
};

export default Index;
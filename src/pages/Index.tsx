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
          name="Carmem Lúcia"
          description="O Espaço Renascer tem o propósito de cuidar de ser humano com muito amor e 3 horas está combinado"
          email="espaco.renascer@gmail.com"
          location="Av. Prof. Arthur de Sá, Nova Flores Lages, 1.421"
        />
      </div>
    </div>
  );
};

export default Index;
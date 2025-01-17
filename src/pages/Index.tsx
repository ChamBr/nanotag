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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <VirtualCard
          avatar="/lovable-uploads/838466c9-6b6c-4d80-b267-080489e62217.png"
          name="Alisson Costa"
          description="Computer Specialist"
          email="contato@kitchenkonnections.com"
          location="Av. Principal, 1234, Centro"
          theme="kitchen"
        />
      </div>
    </div>
  );
};

export default Index;
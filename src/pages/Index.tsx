import { VirtualCard } from "@/components/VirtualCard";
import { useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Simula o carregamento após scan NFC
    toast.success("NFC tag detected!", {
      description: "Loading card information...",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold text-white">Virtual Card</h1>
          <p className="text-neutral-gray">Your digital card information</p>
        </div>

        <VirtualCard
          name="JOHN DOE"
          number="4242424242424242"
          validThru="12/25"
        />

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-gray">
            Tap your NFC tag again to refresh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
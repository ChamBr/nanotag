import { VirtualCard } from "@/components/VirtualCard";
import { employees, companies } from "@/data/companies";
import { useEffect } from "react";
import { toast } from "sonner";

const Francesco = () => {
  const employee = employees.find(e => e.name === "Francesco Paciletti")!;
  const company = companies[employee.company];

  useEffect(() => {
    toast.success("NFC tag detected!", {
      description: "Loading business card information...",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-kitchen-light/50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <VirtualCard
          avatar={employee.avatar}
          name={employee.name}
          description={employee.role}
          email={employee.email}
          location={company.locations[0].address}
          phone={employee.phone}
          theme="kitchen"
          company={employee.company}
        />
      </div>
    </div>
  );
};

export default Francesco;
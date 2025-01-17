import { VirtualCard } from "@/components/VirtualCard";
import { employees, companies } from "@/data/companies";
import { useEffect } from "react";
import { toast } from "sonner";

const Max = () => {
  const employee = employees.find(e => e.name === "Max Silva")!;
  const company = companies[employee.company];

  useEffect(() => {
    toast.success("NFC tag detected!", {
      description: "Loading business card information...",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <VirtualCard
          avatar={employee.avatar}
          name={employee.name}
          description={employee.role}
          email={employee.email}
          location={company.locations[0].address}
          phone={employee.phone}
          theme={company.theme}
          company={employee.company}
        />
      </div>
    </div>
  );
};

export default Max;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { employees } from "@/data/companies";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-2xl font-bold mb-6">Select Business Card</h1>
      {employees.map((employee) => (
        <Link key={employee.name} to={`/${employee.name.split(" ")[0].toLowerCase()}`} className="w-full max-w-md">
          <Button className="w-full" variant="outline">
            {employee.name} - {employee.company}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Index;
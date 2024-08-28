import { Card } from "@/components/ui/card";

type ApiStatusCardProps = {
  name: string;
  status: string;
  description: string;
};

export function ApiStatusCard({
  name,
  status,
  description,
}: ApiStatusCardProps) {
  return (
    <Card className='p-6 rounded-lg shadow-lg'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <div
          className={`w-4 h-4 rounded-full ${
            status === "up" ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
      <p className='text-muted-foreground'>{description}</p>
    </Card>
  );
}

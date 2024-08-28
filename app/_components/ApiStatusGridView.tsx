"use client";
import { useApiStatus } from "@/hooks/useApiStatus";
import { ApiStatusCard } from "./ApiStatusCardComponent";

export function ApiStatusGrid() {
  const apiStatuses = useApiStatus();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {apiStatuses.map((api) => (
        <ApiStatusCard
          key={api.id}
          name={api.name}
          status={api.status}
          description={api.description}
        />
      ))}
    </div>
  );
}

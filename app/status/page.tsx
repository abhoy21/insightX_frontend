import { ApiStatusGrid } from "../_components/ApiStatusGridView";

const StatusPage = () => {
  return (
    <div className='w-full min-h-screen bg-background p-8 md:p-12 lg:p-16'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>API Status Check</h1>
        <ApiStatusGrid />
      </div>
    </div>
  );
};

export default StatusPage;

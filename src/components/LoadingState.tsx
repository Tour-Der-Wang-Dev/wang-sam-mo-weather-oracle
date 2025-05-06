
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] animate-pulse-slow">
      <img 
        src="/lovable-uploads/d25325e2-78fe-4d2f-be2a-41e070fd0b2b.png" 
        alt="Tour Der Wang Logo" 
        className="h-24 md:h-32 object-contain opacity-70 mb-6"
      />
      <Loader2 className="h-8 w-8 text-wang animate-spin mb-2" />
      <h2 className="text-xl text-wang font-medium">กำลังโหลดข้อมูลสภาพอากาศ</h2>
      <p className="text-muted-foreground">Loading weather information...</p>
    </div>
  );
};

export default LoadingState;

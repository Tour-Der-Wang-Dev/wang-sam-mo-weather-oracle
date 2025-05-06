
import React from 'react';
import { WeatherData } from '@/services/weatherService';

interface HeaderProps {
  data: WeatherData | null;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="mb-6">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-2">
          <img 
            src="/lovable-uploads/d25325e2-78fe-4d2f-be2a-41e070fd0b2b.png" 
            alt="Tour Der Wang Logo" 
            className="h-20 md:h-24 object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-wang-dark">
          <span className="text-wang-text-dark">รายงานสภาพอากาศ</span>
          <span className="block text-xl md:text-2xl text-wang">Wang Sam Mo Weather Oracle</span>
        </h1>
        {data && (
          <div className="mt-2 text-center">
            <p className="text-lg text-wang-text-dark">
              {data.location.district_th} {data.location.province_th}
              <span className="text-sm block text-gray-500">
                {data.location.coordinates.latitude.toFixed(6)}, {data.location.coordinates.longitude.toFixed(6)}
              </span>
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

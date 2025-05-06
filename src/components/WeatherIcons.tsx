
import React from 'react';
import { 
  Cloud, 
  CloudRain, 
  CloudSun, 
  CloudLightning, 
  Sun, 
  Wind, 
  Droplets,
  Eye,
  Thermometer,
  CalendarDays,
  AlertTriangle
} from 'lucide-react';

interface WeatherIconProps {
  type: string;
  size?: number;
  className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  type, 
  size = 24, 
  className = ""
}) => {
  const iconProps = {
    size,
    className: `${className}`
  };

  switch(type) {
    case 'sunny':
      return <Sun {...iconProps} className={`${className} text-yellow-400`} />;
    case 'partly-cloudy':
      return <CloudSun {...iconProps} className={`${className} text-gray-500`} />;
    case 'cloudy':
      return <Cloud {...iconProps} className={`${className} text-gray-400`} />;
    case 'rain':
      return <CloudRain {...iconProps} className={`${className} text-blue-400`} />;
    case 'thunderstorm':
      return <CloudLightning {...iconProps} className={`${className} text-purple-500`} />;
    case 'wind':
      return <Wind {...iconProps} className={`${className} text-teal-400`} />;
    case 'humidity':
      return <Droplets {...iconProps} className={`${className} text-blue-400`} />;
    case 'visibility':
      return <Eye {...iconProps} className={`${className} text-gray-600`} />;
    case 'temperature':
      return <Thermometer {...iconProps} className={`${className} text-red-500`} />;
    case 'forecast':
      return <CalendarDays {...iconProps} className={`${className} text-wang`} />;
    case 'warning':
      return <AlertTriangle {...iconProps} className={`${className} text-amber-500`} />;
    default:
      return <Sun {...iconProps} className={`${className} text-yellow-400`} />;
  }
};

export default WeatherIcon;

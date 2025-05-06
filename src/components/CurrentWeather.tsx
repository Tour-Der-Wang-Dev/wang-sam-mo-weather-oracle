
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CurrentWeather as CurrentWeatherType, getWindDirectionText, getWindDirectionTextThai } from '@/services/weatherService';
import WeatherIcon from './WeatherIcons';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <Card className="w-full shadow-lg animate-fade-in">
      <CardHeader className="bg-wang/10 pb-2">
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl">สภาพอากาศปัจจุบัน</span>
          <span className="text-sm text-gray-500">{data.time}</span>
        </CardTitle>
        <CardDescription>Current Weather Conditions</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temperature Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <WeatherIcon type="temperature" size={28} className="text-wang" />
              <div>
                <h3 className="text-lg font-medium">อุณหภูมิ (Temperature)</h3>
              </div>
            </div>
            <div className="pl-2 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">ปัจจุบัน (Current):</span>
                <span className="text-2xl font-bold text-wang">{data.temperature.current}°C</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">สูงสุด (Max):</span>
                <span className="font-medium">{data.temperature.max}°C</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ต่ำสุด (Min):</span>
                <span className="font-medium">{data.temperature.min}°C</span>
              </div>
            </div>

            <Separator className="my-2" />

            {/* Humidity Section */}
            <div className="flex items-center space-x-3">
              <WeatherIcon type="humidity" size={28} className="text-wang" />
              <div>
                <h3 className="text-lg font-medium">ความชื้นสัมพัทธ์ (Humidity)</h3>
              </div>
            </div>
            <div className="pl-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Relative Humidity:</span>
                <span className="text-xl font-medium">{data.humidity}%</span>
              </div>
            </div>

            <Separator className="my-2" />

            {/* Wind Section */}
            <div className="flex items-center space-x-3">
              <WeatherIcon type="wind" size={28} className="text-wang" />
              <div>
                <h3 className="text-lg font-medium">ลม (Wind)</h3>
              </div>
            </div>
            <div className="pl-2 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">ทิศทาง (Direction):</span>
                <span className="font-medium">{getWindDirectionText(data.wind.direction)} ({data.wind.direction}°)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ทิศทาง (ภาษาไทย):</span>
                <span className="font-medium">{getWindDirectionTextThai(data.wind.direction)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ความเร็ว (Speed):</span>
                <span className="font-medium">{data.wind.speed} กม./ชม.</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Sky Condition Section */}
            <div className="flex items-center space-x-3">
              <WeatherIcon 
                type={data.skyCondition.toLowerCase().includes('cloudy') ? 
                  (data.skyCondition.toLowerCase().includes('partly') ? 'partly-cloudy' : 'cloudy') : 
                  'sunny'} 
                size={28} 
                className="text-wang"
              />
              <div>
                <h3 className="text-lg font-medium">สภาพท้องฟ้า (Sky Condition)</h3>
              </div>
            </div>
            <div className="pl-2 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">ลักษณะท้องฟ้า (Condition):</span>
                <span className="font-medium">{data.skyCondition}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ปริมาณเมฆปกคลุม (Cloud Cover):</span>
                <span className="font-medium">{data.cloudCover}%</span>
              </div>
            </div>

            <Separator className="my-2" />

            {/* Rainfall Section */}
            <div className="flex items-center space-x-3">
              <WeatherIcon type="rain" size={28} className="text-wang" />
              <div>
                <h3 className="text-lg font-medium">ปริมาณน้ำฝน (Rainfall)</h3>
              </div>
            </div>
            <div className="pl-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">สะสม 24 ชม. (24h Accumulated):</span>
                <span className="font-medium">{data.rainfall24h} มม.</span>
              </div>
            </div>

            <Separator className="my-2" />

            {/* Visibility Section */}
            <div className="flex items-center space-x-3">
              <WeatherIcon type="visibility" size={28} className="text-wang" />
              <div>
                <h3 className="text-lg font-medium">ทัศนวิสัย (Visibility)</h3>
              </div>
            </div>
            <div className="pl-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">ระยะมองเห็น:</span>
                <span className="font-medium">{data.visibility} กม.</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;

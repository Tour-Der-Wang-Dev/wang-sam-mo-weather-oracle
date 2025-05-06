
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ForecastWeather, getWindDirectionText, getWindDirectionTextThai } from '@/services/weatherService';
import WeatherIcon from './WeatherIcons';

interface WeatherForecastProps {
  data: ForecastWeather;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ data }) => {
  return (
    <Card className="w-full shadow-lg animate-fade-in">
      <CardHeader className="bg-wang/10 pb-2">
        <CardTitle className="flex items-center">
          <WeatherIcon type="forecast" size={20} className="mr-2" />
          <span className="text-xl">พยากรณ์อากาศ 24 ชั่วโมงข้างหน้า</span>
        </CardTitle>
        <CardDescription>24-hour Weather Forecast</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temperature and Humidity Section */}
          <div>
            <h3 className="text-lg font-medium flex items-center">
              <WeatherIcon type="temperature" size={18} className="mr-2" />
              ช่วงอุณหภูมิที่คาดการณ์ (Temperature Range)
            </h3>
            <div className="mt-2 pl-2">
              <div className="flex justify-between items-center">
                <span>ต่ำสุด (Min):</span>
                <span className="font-medium">{data.temperature.min}°C</span>
              </div>
              <div className="flex justify-between items-center">
                <span>สูงสุด (Max):</span>
                <span className="font-medium">{data.temperature.max}°C</span>
              </div>
            </div>

            <Separator className="my-4" />

            <h3 className="text-lg font-medium flex items-center">
              <WeatherIcon type="humidity" size={18} className="mr-2" />
              ช่วงความชื้นที่คาดการณ์ (Humidity Range)
            </h3>
            <div className="mt-2 pl-2">
              <div className="flex justify-between items-center">
                <span>ต่ำสุด (Min):</span>
                <span className="font-medium">{data.humidity.min}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>สูงสุด (Max):</span>
                <span className="font-medium">{data.humidity.max}%</span>
              </div>
            </div>
          </div>

          {/* Rain and Wind Section */}
          <div>
            <h3 className="text-lg font-medium flex items-center">
              <WeatherIcon type="rain" size={18} className="mr-2" />
              โอกาสการเกิดฝน (Rain Probability)
            </h3>
            <div className="mt-2 pl-2">
              <div className="flex justify-between items-center mb-2">
                <span>โอกาสเกิดฝน (Probability):</span>
                <span className="font-medium">{data.rainChance}%</span>
              </div>
              <Progress value={data.rainChance} className="h-2" />
              <div className="flex justify-between items-center mt-3">
                <span>ปริมาณน้ำฝนที่คาดการณ์ (Expected rainfall):</span>
                <span className="font-medium">{data.expectedRainfall} มม.</span>
              </div>
            </div>

            <Separator className="my-4" />

            <h3 className="text-lg font-medium flex items-center">
              <WeatherIcon type="wind" size={18} className="mr-2" />
              ลมที่คาดการณ์ (Wind Forecast)
            </h3>
            <div className="mt-2 pl-2">
              <div className="flex justify-between items-center">
                <span>ทิศทาง (Direction):</span>
                <span className="font-medium">
                  {getWindDirectionText(data.wind.direction)} ({data.wind.direction}°)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>ทิศทาง (ภาษาไทย):</span>
                <span className="font-medium">{getWindDirectionTextThai(data.wind.direction)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ความเร็ว (Speed):</span>
                <span className="font-medium">{data.wind.speed} กม./ชม.</span>
              </div>
            </div>
          </div>
        </div>

        {data.significantEvents && (
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <h4 className="font-medium flex items-center">
              <WeatherIcon type="warning" size={18} className="mr-2" />
              ปรากฏการณ์สำคัญที่อาจเกิดขึ้น (Significant Events)
            </h4>
            <p className="mt-1 text-amber-700">{data.significantEvents}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;

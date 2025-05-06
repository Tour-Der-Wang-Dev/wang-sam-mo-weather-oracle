
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { fetchWeatherData, WeatherData } from '@/services/weatherService';
import Header from '@/components/Header';
import CurrentWeather from '@/components/CurrentWeather';
import WeatherForecast from '@/components/WeatherForecast';
import WeatherAnalysis from '@/components/WeatherAnalysis';
import DataSources from '@/components/DataSources';
import WeatherImagery from '@/components/WeatherImagery';
import LoadingState from '@/components/LoadingState';

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherData();
        setWeatherData(data);
        toast.success('ข้อมูลสภาพอากาศถูกอัพเดทแล้ว', {
          description: 'Weather data has been updated successfully',
        });
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
        toast.error('ไม่สามารถโหลดข้อมูลสภาพอากาศได้', {
          description: 'Failed to load weather data. Please try again later.',
        });
      } finally {
        setLoading(false);
      }
    };

    loadWeatherData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <Header data={weatherData} />
        
        {loading ? (
          <LoadingState />
        ) : weatherData ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CurrentWeather data={weatherData.current} />
              <WeatherForecast data={weatherData.forecast} />
            </div>
            
            <WeatherImagery />
            <WeatherAnalysis data={weatherData.analysis} />
            
            <DataSources 
              sources={weatherData.dataSources}
              lastUpdated={weatherData.lastUpdated}
            />
          </div>
        ) : (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <h2 className="text-xl font-bold text-red-600">ไม่สามารถโหลดข้อมูลสภาพอากาศได้</h2>
            <p className="mt-2 text-red-500">Unable to load weather data. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

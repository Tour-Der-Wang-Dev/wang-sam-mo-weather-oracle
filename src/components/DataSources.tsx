
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

interface DataSourcesProps {
  sources: {
    radar: string;
    satellite: string;
    stations: string;
    models: string;
  };
  lastUpdated: string;
}

const DataSources: React.FC<DataSourcesProps> = ({ sources, lastUpdated }) => {
  return (
    <Card className="w-full shadow-lg animate-fade-in">
      <CardHeader className="bg-gray-50 pb-2">
        <CardTitle className="text-xl">แหล่งข้อมูล</CardTitle>
        <CardDescription>Data Sources</CardDescription>
      </CardHeader>
      <CardContent className="pt-4 space-y-2 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>เรดาร์ (Radar):</strong> {sources.radar}</p>
            <p><strong>ดาวเทียม (Satellite):</strong> {sources.satellite}</p>
          </div>
          <div>
            <p><strong>สถานีตรวจวัดอากาศ (Weather Stations):</strong> {sources.stations}</p>
            <p><strong>แบบจำลองพยากรณ์อากาศ (Weather Models):</strong> {sources.models}</p>
          </div>
        </div>
        <div className="text-center pt-3 text-gray-500">
          <p>ข้อมูลล่าสุด (Last Updated): {lastUpdated}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSources;

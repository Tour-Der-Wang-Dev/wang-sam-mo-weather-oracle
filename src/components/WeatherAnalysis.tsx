
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { WeatherAnalysis as WeatherAnalysisType } from '@/services/weatherService';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface WeatherAnalysisProps {
  data: WeatherAnalysisType;
}

const WeatherAnalysis: React.FC<WeatherAnalysisProps> = ({ data }) => {
  return (
    <Card className="w-full shadow-lg animate-fade-in">
      <CardHeader className="bg-wang/10 pb-2">
        <CardTitle className="text-xl">การวิเคราะห์และคำแนะนำ</CardTitle>
        <CardDescription>Analysis and Recommendations</CardDescription>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div>
          <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
            <span>ความเหมาะสมในการทำกิจกรรมกลางแจ้ง</span>
            {data.outdoorActivitySuitability.suitable ? (
              <Badge className="bg-green-500 hover:bg-green-600">เหมาะสม (Suitable)</Badge>
            ) : (
              <Badge className="bg-red-500 hover:bg-red-600">ไม่เหมาะสม (Not Suitable)</Badge>
            )}
          </h3>
          <div className="ml-4 flex items-start gap-2">
            {data.outdoorActivitySuitability.suitable ? (
              <CheckCircle className="min-w-4 h-4 text-green-500 mt-1" />
            ) : (
              <AlertTriangle className="min-w-4 h-4 text-red-500 mt-1" />
            )}
            <p className="text-gray-700">{data.outdoorActivitySuitability.reason}</p>
          </div>
        </div>

        {data.warnings && (
          <div>
            <h3 className="text-lg font-medium mb-2">คำเตือนสภาพอากาศรุนแรง</h3>
            <div className="ml-4 flex items-start gap-2 bg-orange-50 p-3 rounded-md border-l-4 border-orange-400">
              <AlertTriangle className="min-w-4 h-4 text-orange-500 mt-1" />
              <p className="text-orange-700">{data.warnings}</p>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-lg font-medium mb-2">ข้อควรระวังและคำแนะนำเฉพาะ</h3>
          <div className="ml-4 flex items-start gap-2">
            <Info className="min-w-4 h-4 text-wang mt-1" />
            <p className="text-gray-700">{data.recommendations}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherAnalysis;

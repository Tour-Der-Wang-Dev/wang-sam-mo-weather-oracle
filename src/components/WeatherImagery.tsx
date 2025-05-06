
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WeatherImagery: React.FC = () => {
  return (
    <Card className="w-full shadow-lg animate-fade-in">
      <CardHeader className="bg-wang/10 pb-2">
        <CardTitle className="text-xl">ภาพถ่ายและภาพเรดาร์</CardTitle>
        <CardDescription>Weather Radar & Satellite Imagery</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <Tabs defaultValue="radar">
          <TabsList className="w-full">
            <TabsTrigger value="radar" className="w-1/2">เรดาร์ตรวจอากาศ<br />(Radar Imagery)</TabsTrigger>
            <TabsTrigger value="satellite" className="w-1/2">ภาพถ่ายดาวเทียม<br />(Satellite Imagery)</TabsTrigger>
          </TabsList>
          <TabsContent value="radar" className="py-4">
            <div className="aspect-video relative bg-slate-100 rounded-md overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  ในแอปพลิเคชันจริง ข้อมูลเรดาร์จะถูกแสดงที่นี่
                </p>
                <p className="text-xs text-gray-400">
                  (In a real application, radar data would be displayed here)
                </p>
              </div>
              {/* Placeholder for radar image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-wang/10" />
            </div>
            <p className="mt-2 text-sm text-center text-gray-500">
              เรดาร์ตรวจอากาศอุดรธานี รัศมี 240 กม. (แหล่งที่มา: กรมอุตุนิยมวิทยา)
            </p>
          </TabsContent>
          <TabsContent value="satellite" className="py-4">
            <div className="aspect-video relative bg-slate-100 rounded-md overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  ในแอปพลิเคชันจริง ภาพถ่ายดาวเทียมจะถูกแสดงที่นี่
                </p>
                <p className="text-xs text-gray-400">
                  (In a real application, satellite imagery would be displayed here)
                </p>
              </div>
              {/* Placeholder for satellite image */}
              <div className="absolute inset-0 bg-gradient-to-br from-wang/10 to-blue-500/10" />
            </div>
            <p className="mt-2 text-sm text-center text-gray-500">
              ภาพถ่ายดาวเทียม Himawari-8 (แหล่งที่มา: กรมอุตุนิยมวิทยา)
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WeatherImagery;

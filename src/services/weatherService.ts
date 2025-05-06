
// This is a mock weather service since we don't have actual API credentials
// In a real application, you would connect to a weather API like OpenWeatherMap, WeatherAPI, etc.

export interface CurrentWeather {
  time: string;
  temperature: {
    current: number;
    max: number;
    min: number;
  };
  humidity: number;
  wind: {
    direction: number;
    speed: number;
  };
  cloudCover: number;
  skyCondition: string;
  rainfall24h: number;
  visibility: number;
}

export interface ForecastWeather {
  temperature: {
    min: number;
    max: number;
  };
  humidity: {
    min: number;
    max: number;
  };
  rainChance: number;
  expectedRainfall: number;
  wind: {
    direction: number;
    speed: number;
  };
  significantEvents: string | null;
}

export interface WeatherAnalysis {
  outdoorActivitySuitability: {
    suitable: boolean;
    reason: string;
  };
  warnings: string | null;
  recommendations: string;
}

export interface WeatherData {
  location: {
    name: string;
    name_th: string;
    district: string;
    district_th: string;
    province: string;
    province_th: string;
    country: string;
    country_th: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  current: CurrentWeather;
  forecast: ForecastWeather;
  analysis: WeatherAnalysis;
  dataSources: {
    radar: string;
    satellite: string;
    stations: string;
    models: string;
  };
  lastUpdated: string;
}

// Thai month names
const thaiMonths = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

// Format date in Thai format
export const formatThaiDate = (date: Date): string => {
  const day = date.getDate();
  const month = thaiMonths[date.getMonth()];
  const year = date.getFullYear() + 543; // Convert to Buddhist Era
  return `${day} ${month} ${year}`;
};

// Mock function to fetch weather data
export const fetchWeatherData = async (): Promise<WeatherData> => {
  // In a real application, you would fetch this data from a weather API
  const now = new Date();
  
  // Format time strings
  const timeString = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  const dateString = now.toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });
  
  // Mock data based on typical May weather in Wang Sam Mo, Udon Thani
  const mockData: WeatherData = {
    location: {
      name: "Wang Sam Mo",
      name_th: "วังสามหมอ",
      district: "Wang Sam Mo District",
      district_th: "อำเภอวังสามหมอ",
      province: "Udon Thani",
      province_th: "อุดรธานี",
      country: "Thailand",
      country_th: "ประเทศไทย",
      coordinates: {
        latitude: 16.951748767292628,
        longitude: 103.4377148135,
      },
    },
    current: {
      time: `${timeString}, ${dateString}`,
      temperature: {
        current: 33.2,
        max: 35.6,
        min: 27.8,
      },
      humidity: 65,
      wind: {
        direction: 135, // SE direction
        speed: 12, // km/h
      },
      cloudCover: 40, // percentage
      skyCondition: "Partly Cloudy",
      rainfall24h: 0.5, // mm
      visibility: 8.5, // km
    },
    forecast: {
      temperature: {
        min: 26.5,
        max: 36.2,
      },
      humidity: {
        min: 60,
        max: 85,
      },
      rainChance: 30, // percentage
      expectedRainfall: 2.3, // mm
      wind: {
        direction: 120, // ESE direction
        speed: 15, // km/h
      },
      significantEvents: "Possible isolated thunderstorms in the afternoon",
    },
    analysis: {
      outdoorActivitySuitability: {
        suitable: true,
        reason: "Morning conditions are favorable for outdoor activities, but afternoon may bring isolated thunderstorms. Plan accordingly.",
      },
      warnings: "Possible thunderstorms in the afternoon. Stay alert to changing conditions.",
      recommendations: "Best time for outdoor activities is before noon. Bring protection against sun and prepare for potential afternoon rain.",
    },
    dataSources: {
      radar: "Thai Meteorological Department Radar Network",
      satellite: "Himawari-8 Satellite Imagery",
      stations: "Nearest weather station: Udon Thani Airport (65 km)",
      models: "GFS, ECMWF models",
    },
    lastUpdated: `${timeString}, ${formatThaiDate(now)}`,
  };

  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

// Function to get wind direction as text from degrees
export const getWindDirectionText = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

// Function to get wind direction in Thai
export const getWindDirectionTextThai = (degrees: number): string => {
  const directions = ['เหนือ', 'เหนือค่อนตะวันออกเฉียงเหนือ', 'ตะวันออกเฉียงเหนือ', 'ตะวันออกค่อนตะวันออกเฉียงเหนือ', 
                     'ตะวันออก', 'ตะวันออกค่อนตะวันออกเฉียงใต้', 'ตะวันออกเฉียงใต้', 'ใต้ค่อนตะวันออกเฉียงใต้', 
                     'ใต้', 'ใต้ค่อนตะวันตกเฉียงใต้', 'ตะวันตกเฉียงใต้', 'ตะวันตกค่อนตะวันตกเฉียงใต้', 
                     'ตะวันตก', 'ตะวันตกค่อนตะวันตกเฉียงเหนือ', 'ตะวันตกเฉียงเหนือ', 'เหนือค่อนตะวันตกเฉียงเหนือ'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

// Function to get weather icon based on conditions
export const getWeatherIcon = (condition: string, rainChance: number = 0): string => {
  // These would normally be imported SVGs or from an icon library
  // For now, we'll return string keys that will map to appropriate icons
  const lowerCondition = condition.toLowerCase();
  
  if (lowerCondition.includes('thunderstorm')) return 'thunderstorm';
  if (lowerCondition.includes('rain') || rainChance > 60) return 'rain';
  if (lowerCondition.includes('cloudy') && lowerCondition.includes('partly')) return 'partly-cloudy';
  if (lowerCondition.includes('cloudy')) return 'cloudy';
  if (lowerCondition.includes('clear') || lowerCondition.includes('sunny')) return 'sunny';
  
  // Default icon
  return 'unknown';
};

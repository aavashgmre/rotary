export interface NewsItem {
  id: number;
  title: string;
  image: string;
  day: string;
  month: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "A Remarkable Victory at the Zonal Rota Quiz 2025!",
    image: "/news1.jpg",
    day: "27",
    month: "NOV",
  },
  {
    id: 2,
    title: "विश्व शौचालय दिवसको अवसरमा धर्मस्थली प्रहरी चौकीमा निर्माण",
    image: "/news2.jpg",
    day: "21",
    month: "NOV",
  },
  {
    id: 3,
    title: "हार्दिक बधाई तथा शुभकामना,श्री दान बहादुर कार्कीज्यू",
    image: "/news3.jpg",
    day: "10",
    month: "NOV",
  },
];

import { useEffect, useState } from 'react';

const weatherWords = ['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Windy', 'Foggy', 'Overcast', 'Drizzle'];

function pickDailyWord() {
  const now = new Date();
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  return weatherWords[seed % weatherWords.length];
}

export default function ClockBadge() {
  const [time, setTime] = useState(() => new Date());
  const [word] = useState(pickDailyWord);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="inline-flex items-center gap-2 rounded-full border-4 border-black bg-white px-4 py-1 shadow-[6px_6px_0_0_#000]">
      <span className="text-sm font-extrabold tracking-widest text-black">{timeStr}</span>
      <span className="text-xs font-black uppercase bg-red-600 text-white px-2 py-0.5 -skew-x-6 shadow-[3px_3px_0_0_#000]">{word}</span>
    </div>
  );
}

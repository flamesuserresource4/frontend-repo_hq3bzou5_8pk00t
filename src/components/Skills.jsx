import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind', level: 90 },
  { name: 'Framer Motion', level: 75 },
];

export default function Skills() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({ width: `${skills[i].level}%`, transition: { delay: i * 0.08 + 0.2, type: 'spring', stiffness: 120, damping: 20 } }));
  }, [controls]);

  return (
    <div className="grid gap-4">
      {skills.map((s, i) => (
        <div key={s.name} className="relative rounded-xl border-4 border-black bg-white p-3 shadow-[6px_6px_0_0_#000]">
          <div className="flex items-center justify-between pb-1">
            <span className="font-extrabold uppercase tracking-wider text-black">{s.name}</span>
            <span className="font-black text-red-600">{s.level}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full border-2 border-black bg-black/10">
            <motion.div
              className="h-full bg-red-600"
              initial={{ width: 0 }}
              custom={i}
              animate={controls}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

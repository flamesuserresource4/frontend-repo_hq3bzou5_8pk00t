import { useEffect, useMemo } from 'react';
import { Home, Star, Briefcase, LayoutGrid, Mail } from 'lucide-react';

function useUISFX() {
  // Lightweight synth using Web Audio to avoid asset files
  const ctx = useMemo(() => (typeof window !== 'undefined' ? new (window.AudioContext || window.webkitAudioContext)() : null), []);

  useEffect(() => {
    return () => {
      try { ctx && ctx.close(); } catch { /* noop */ }
    };
  }, [ctx]);

  const beep = (freq = 880, dur = 0.06, type = 'square', vol = 0.03) => {
    if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g).connect(ctx.destination);
    const t = ctx.currentTime;
    o.start(t);
    o.stop(t + dur);
  };

  const hover = () => beep(1200, 0.04, 'square', 0.025);
  const click = () => { beep(220, 0.07, 'sawtooth', 0.05); setTimeout(() => beep(660, 0.05, 'square', 0.035), 40); };

  return { hover, click };
}

export default function Navbar({ current, onNavigate }) {
  const { hover, click } = useUISFX();

  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-3 rounded-full border-4 border-black bg-white/95 px-3 py-2 shadow-[8px_8px_0_0_#000] backdrop-blur">
        {items.map(({ id, label, icon: Icon }) => {
          const active = current === id;
          return (
            <li key={id}>
              <button
                onMouseEnter={hover}
                onClick={() => { click(); onNavigate(id); }}
                className={[
                  'group flex items-center gap-2 rounded-full border-2 border-black px-3 py-1.5 transition-all',
                  active ? 'bg-red-600 text-white shadow-[4px_4px_0_0_#000]' : 'bg-white text-black hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]'
                ].join(' ')}
                aria-current={active ? 'page' : undefined}
              >
                <Icon size={16} className={active ? 'text-white' : 'text-black'} />
                <span className="font-extrabold tracking-wide uppercase text-xs">{label}</span>
                <span className="sr-only">Go to {label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

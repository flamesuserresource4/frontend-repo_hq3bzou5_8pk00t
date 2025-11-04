import { motion } from 'framer-motion';

const projects = [
  { title: 'Velvet Room UI', tags: ['UI', 'Design'], link: '#' },
  { title: 'Phantom CLI', tags: ['Node', 'Tooling'], link: '#' },
  { title: 'Metaverse Mapper', tags: ['Maps', 'React'], link: '#' },
  { title: 'All-Out Engine', tags: ['Animation', 'JS'], link: '#' },
];

function useAllOutHover() {
  const enter = (e) => {
    const card = e.currentTarget;
    card.classList.add('ring-4', 'ring-red-600');
  };
  const leave = (e) => {
    const card = e.currentTarget;
    card.classList.remove('ring-4', 'ring-red-600');
  };
  return { enter, leave };
}

export default function Projects() {
  const { enter, leave } = useAllOutHover();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((p, idx) => (
        <motion.a
          key={p.title}
          href={p.link}
          onMouseEnter={enter}
          onMouseLeave={leave}
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200, damping: 18 }}
          className="group relative overflow-hidden rounded-xl border-4 border-black bg-white p-4 shadow-[8px_8px_0_0_#000] focus:outline-none focus:ring-4 focus:ring-red-600"
        >
          <div className="absolute -right-6 -top-6 h-28 w-28 rotate-12 bg-red-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <h3 className="relative z-10 font-extrabold uppercase tracking-wide text-black group-hover:text-white transition-colors">{p.title}</h3>
          <p className="relative z-10 mt-2 text-sm font-semibold text-black/70 group-hover:text-white/90">{p.tags.join(' • ')}</p>
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 mix-blend-multiply"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 160, damping: 12 }}
            style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,0,0,0.25), transparent 60%)' }}
          />
          <span className="relative z-10 mt-3 inline-block rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[4px_4px_0_0_#000] group-hover:bg-black group-hover:text-white">All-Out!</span>
        </motion.a>
      ))}
    </div>
  );
}

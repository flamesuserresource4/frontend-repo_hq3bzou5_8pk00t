import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ClockBadge from './components/ClockBadge.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

const sections = ['home', 'skills', 'experience', 'projects', 'contact'];

function Section({ id, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24">
      {children}
    </section>
  );
}

const flipVariants = {
  initial: { rotateY: -90, opacity: 0, filter: 'blur(6px)' },
  animate: { rotateY: 0, opacity: 1, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 120, damping: 16 } },
  exit: { rotateY: 90, opacity: 0, filter: 'blur(6px)', transition: { duration: 0.25 } },
};

export default function App() {
  const [current, setCurrent] = useState('home');

  return (
    <div className="min-h-screen bg-repeat" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#ffffff 0,#ffffff 12px,#f1f1f1 12px,#f1f1f1 24px)' }}>
      {/* Persona 5 style top bar */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="-skew-x-6 rounded border-4 border-black bg-red-600 px-3 py-1 shadow-[6px_6px_0_0_#000]">
            <span className="pointer-events-auto select-none text-xs font-black uppercase tracking-widest text-white">Phantom Portfolio</span>
          </div>
        </div>
        <ClockBadge />
      </div>

      <Navbar current={current} onNavigate={setCurrent} />

      {/* Stage container with perspective for flipping */}
      <div className="relative mx-auto mt-28 h-full min-h-[80vh] w-full max-w-6xl px-4 pb-24" style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="rounded-2xl border-8 border-black bg-white shadow-[14px_14px_0_0_#000]"
          >
            {current === 'home' && (
              <Section id="home">
                <div className="grid items-center gap-10 md:grid-cols-2">
                  <div>
                    <h1 className="mb-4 text-5xl font-black uppercase leading-tight tracking-tighter text-black md:text-6xl">
                      Code by Day,
                      <span className="block -skew-x-6 bg-black px-2 text-white">Phantom by Night</span>
                    </h1>
                    <p className="mb-6 max-w-prose text-lg font-semibold text-black/80">
                      I craft bold, stylish interfaces and performant backends with an eye for motion. Enter the Metaverse of clean code and striking visuals.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="#projects" onClick={(e)=>{e.preventDefault(); setCurrent('projects');}} className="rounded-full border-4 border-black bg-red-600 px-4 py-2 font-black uppercase tracking-wider text-white shadow-[6px_6px_0_0_#000] transition-transform hover:-translate-y-0.5">View Projects</a>
                      <a href="#contact" onClick={(e)=>{e.preventDefault(); setCurrent('contact');}} className="rounded-full border-4 border-black bg-white px-4 py-2 font-black uppercase tracking-wider text-black shadow-[6px_6px_0_0_#000] transition-transform hover:-translate-y-0.5">Contact</a>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 -top-6 rotate-[-6deg] rounded-lg border-4 border-black bg-red-600 px-3 py-1 text-white shadow-[6px_6px_0_0_#000]">Persona Style</div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border-4 border-black bg-[radial-gradient(circle_at_70%_30%,#ff0000_0%,#9b0000_60%,#000_100%)] shadow-[10px_10px_0_0_#000]">
                      <div className="absolute inset-0 grid grid-cols-6 opacity-20">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div key={i} className="border border-white/20" />
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="-skew-x-6 rounded-xl border-4 border-black bg-white px-6 py-4 text-center shadow-[8px_8px_0_0_#000]">
                          <div className="text-4xl font-black uppercase tracking-widest text-black">P5 Aesthetic</div>
                          <div className="mt-2 text-sm font-extrabold uppercase tracking-widest text-red-600">Sharp. Bold. Dynamic.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            )}

            {current === 'skills' && (
              <Section id="skills">
                <h2 className="mb-6 inline-block -skew-x-6 rounded px-3 py-1 text-3xl font-black uppercase tracking-wider text-white" style={{ background: '#e60012', WebkitTextStroke: '2px black' }}>Skills</h2>
                <Skills />
              </Section>
            )}

            {current === 'experience' && (
              <Section id="experience">
                <h2 className="mb-6 inline-block -skew-x-6 rounded px-3 py-1 text-3xl font-black uppercase tracking-wider text-white" style={{ background: '#e60012', WebkitTextStroke: '2px black' }}>Experience</h2>
                <ul className="grid gap-4">
                  <li className="rounded-xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold uppercase tracking-wide">Senior Frontend Developer</span>
                      <span className="font-black text-red-600">2021 — Present</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-black/80">Leading UI engineering with motion-first design, delivering high-performance web apps.</p>
                  </li>
                  <li className="rounded-xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold uppercase tracking-wide">Full‑Stack Engineer</span>
                      <span className="font-black text-red-600">2018 — 2021</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-black/80">Built end‑to‑end features across React, Node, and cloud services with a focus on DX.</p>
                  </li>
                </ul>
              </Section>
            )}

            {current === 'projects' && (
              <Section id="projects">
                <h2 className="mb-6 inline-block -skew-x-6 rounded px-3 py-1 text-3xl font-black uppercase tracking-wider text-white" style={{ background: '#e60012', WebkitTextStroke: '2px black' }}>Projects</h2>
                <Projects />
              </Section>
            )}

            {current === 'contact' && (
              <Section id="contact">
                <h2 className="mb-6 inline-block -skew-x-6 rounded px-3 py-1 text-3xl font-black uppercase tracking-wider text-white" style={{ background: '#e60012', WebkitTextStroke: '2px black' }}>Contact</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]">
                    <p className="font-semibold text-black/80">Want to collaborate or have a mission for a Phantom Thief of code? Reach out!</p>
                    <ul className="mt-4 grid gap-2 text-sm font-bold">
                      <li><a className="underline decoration-red-600 underline-offset-4 hover:text-red-600" href="mailto:you@example.com">you@example.com</a></li>
                      <li><a className="underline decoration-red-600 underline-offset-4 hover:text-red-600" href="https://x.com/" target="_blank" rel="noreferrer">@yourhandle</a></li>
                      <li><a className="underline decoration-red-600 underline-offset-4 hover:text-red-600" href="https://github.com/" target="_blank" rel="noreferrer">github.com/you</a></li>
                    </ul>
                  </div>
                  <form className="grid gap-3 rounded-xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]">
                    <input className="rounded border-2 border-black px-3 py-2 font-semibold focus:outline-none focus:ring-4 focus:ring-red-600" placeholder="Your name" />
                    <input className="rounded border-2 border-black px-3 py-2 font-semibold focus:outline-none focus:ring-4 focus:ring-red-600" placeholder="Email" type="email" />
                    <textarea rows={4} className="rounded border-2 border-black px-3 py-2 font-semibold focus:outline-none focus:ring-4 focus:ring-red-600" placeholder="Message" />
                    <button type="button" className="rounded-full border-4 border-black bg-red-600 px-4 py-2 font-black uppercase tracking-wider text-white shadow-[6px_6px_0_0_#000] transition-transform hover:-translate-y-0.5">Send</button>
                  </form>
                </div>
              </Section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persona style corner shards */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-0 top-0 h-28 w-40 -skew-x-12 border-8 border-black bg-red-600 shadow-[10px_10px_0_0_#000]" />
        <div className="absolute right-4 bottom-6 h-20 w-32 skew-x-12 border-8 border-black bg-black shadow-[10px_10px_0_0_#000]" />
      </div>
    </div>
  );
}

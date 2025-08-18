'use client';

import Image from 'next/image';

const tools = [
  { name: 'Recognize', src: '/Recognize.png' },
  { name: 'Location', src: '/location.png' },
  { name: 'Backend Tool', src: '/backendTool.png' },
  { name: 'Database Tool', src: '/DatabaseTool.png' },
  { name: 'Design Tool', src: '/DesignTool.png' },
  { name: 'AI Tool', src: '/AiTool.png' }, // moved to last
];

const Tools = () => {
  return (
    <section className="bg-[#0b1230] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4">⚡ Our Tools</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore powerful tools that help streamline design, databases, and more.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="relative group bg-black rounded-2xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition"
          >
            {/* Bigger Image Box */}
            <div className="relative w-[320px] h-[320px]">
              <Image
                src={tool.src}
                alt={tool.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;

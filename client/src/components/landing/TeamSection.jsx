import {
  Github,
  Instagram,
  Linkedin,
  Sparkles,
  GraduationCap,
  BadgeCheck,
} from 'lucide-react';

/* Top Row */
const topMembers = [
  {
    id: 'CDCC358D6Y0569',
    name: 'Mohammad Wildan Abdurrahman',
    role: 'Data Scientist',
    university:
      'Universitas Nusantara PGRI Kediri',
    major: 'Teknik Informatika',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
  {
    id: 'CDCC358D6Y2763',
    name: 'Ahmad Fajar Permadi',
    role: 'Data Scientist',
    university:
      'Universitas Nusantara PGRI Kediri',
    major: 'Sistem Informasi',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
];

/* Bottom Row */
const bottomMembers = [
  {
    id: 'CACC358D6Y1736',
    name: 'Zacky Alifa Wigunarto',
    role: 'AI Engineer',
    university:
      'Universitas Nusantara PGRI Kediri',
    major: 'Sistem Informasi',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
  {
    id: 'CFCC358D6X1882',
    name: 'Tria Silviana',
    role: 'Frontend Developer',
    university:
      'Universitas Nusantara PGRI Kediri',
    major: 'Sistem Informasi',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
  {
    id: 'CFCC358D6X2060',
    name: 'Adelya Putri Yunita',
    role: 'Backend Developer',
    university:
      'Universitas Nusantara PGRI Kediri',
    major: 'Sistem Informasi',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
];

function TeamCard({ member }) {
  const initial =
    member.name.charAt(0).toUpperCase();

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-xl p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/80 h-full">

      {/* Glow Effect */}
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-blue-400/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

      <div className="relative z-10 flex flex-col h-full">

        {/* Avatar Initial */}
        <div className="flex justify-center mb-6">

          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl border-4 border-white text-white text-5xl font-bold transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">

            {initial}

          </div>

        </div>

        {/* Name */}
        <div className="text-center">

          <h3 className="text-2xl font-bold text-slate-900 leading-snug">
            {member.name}
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            ID: {member.id}
          </p>

        </div>

        {/* Role */}
        <div className="flex justify-center mt-5">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">

            <BadgeCheck className="w-4 h-4" />

            {member.role}

          </span>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 my-6" />

        {/* Info */}
        <div className="space-y-4 text-center flex-1">

          <div className="flex items-center justify-center gap-2 text-slate-700">

            <GraduationCap className="w-5 h-5 text-blue-600" />

            <span className="font-medium">
              {member.university}
            </span>

          </div>

          <p className="text-sm text-slate-500">
            {member.major}
          </p>

        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4 mt-8">

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 transition-all duration-300 hover:bg-pink-600 hover:text-white hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>

        </div>

      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="container-custom pt-10 pb-20"
    >

      {/* Heading */}
      <div className="text-center mb-12">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">

          <Sparkles className="w-4 h-4" />

          Team Developer CareerPath AI

        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Tim Kami
        </h2>

        <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto">
          Tim pengembang CareerPath AI
          berbasis Artificial Intelligence
          modern.
        </p>

      </div>

      {/* TOP ROW */}
      <div className="flex justify-center mb-8">

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">

          {topMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}

        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {bottomMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}

      </div>

    </section>
  );
}
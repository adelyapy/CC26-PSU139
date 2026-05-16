import {
  Sparkles,
  Upload,
  Brain,
  Briefcase,
} from 'lucide-react';

const workflows = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload CV',
    desc: 'Upload file CV PDF Anda dengan mudah dan aman melalui sistem modern CareerPath AI.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Analysis',
    desc: 'Artificial Intelligence akan menganalisis skill, pengalaman, dan potensi karier Anda secara otomatis.',
  },
  {
    number: '03',
    icon: Briefcase,
    title: 'Career Result',
    desc: 'Dapatkan rekomendasi pekerjaan terbaik sesuai kemampuan dan peluang industri terkini.',
  },
];

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="container-custom py-20"
    >

      {/* Heading */}
      <div className="text-center mb-16">

        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
          <Sparkles className="w-4 h-4" />
          Cara Kerja Platform
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Analisis CV
          <span className="text-blue-600">
            {' '}Dalam 3 Langkah
          </span>
        </h2>

        <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Dapatkan rekomendasi karier terbaik
          melalui proses AI yang cepat dan modern.
        </p>
      </div>

      {/* Workflow Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {workflows.map((item) => {
          const IconComponent =
            item.icon;

          return (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-xl p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/80"
            >

              {/* Glow Effect */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              <div className="relative z-10">

                {/* Number */}
                <div className="text-sm font-bold text-blue-500 mb-3 tracking-widest">
                  STEP {item.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mx-auto mb-7 transition-all duration-500 group-hover:bg-blue-600 group-hover:rotate-6">

                  <IconComponent className="w-10 h-10 text-blue-600 transition-all duration-500 group-hover:text-white" />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
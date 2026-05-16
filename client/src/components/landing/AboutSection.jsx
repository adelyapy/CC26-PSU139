import {
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Analisis Presisi',
    desc: 'AI memahami skill dan pengalaman pengguna secara otomatis melalui analisis CV modern.',
  },
  {
    icon: Sparkles,
    title: 'Skor Kesesuaian',
    desc: 'Dapatkan persentase kecocokan karier berdasarkan skill dan pengalaman yang dimiliki.',
  },
  {
    icon: TrendingUp,
    title: 'Rekomendasi Karier',
    desc: 'Temukan peluang pekerjaan terbaik sesuai potensi dan minat profesional Anda.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="container-custom py-20"
    >
      {/* Heading */}
      <div className="text-center mb-14">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
          <Sparkles className="w-4 h-4" />
          Tentang Platform
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          CareerPath AI
        </h2>

        <p className="mt-5 text-slate-600 text-lg">
          Platform AI modern untuk rekomendasi karier
        </p>
      </div>

      {/* Main Glass Card */}
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/10 backdrop-blur-xl p-8 md:p-10 shadow-xl transition-all duration-500 hover:shadow-2xl">

          {/* Glow Effect */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl transition-all duration-500 hover:bg-blue-500/30" />

          <div className="relative z-10">

            {/* About Text */}
            <p className="text-xl leading-relaxed text-slate-700 text-center max-w-4xl mx-auto">
              <span className="font-bold text-blue-600">
                CareerPath AI
              </span>{' '}
              adalah platform berbasis Artificial
              Intelligence yang membantu pengguna
              menemukan rekomendasi karier terbaik
              melalui analisis CV secara cepat dan
              akurat. Dirancang untuk membantu
              generasi muda memahami potensi skill,
              pengalaman, dan peluang kerja yang
              sesuai di era digital modern.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

              {features.map((feature) => {
                const IconComponent =
                  feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group bg-white/60 backdrop-blur-lg border border-white/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/80 hover:shadow-xl"
                  >

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-blue-600">

                      <IconComponent className="w-7 h-7 text-blue-600 transition-all duration-300 group-hover:text-white" />

                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
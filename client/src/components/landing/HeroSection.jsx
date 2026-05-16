import heroImage from '../../assets/hero.png';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="container-custom scroll-mt-24 pt-4 pb-14 grid lg:grid-cols-2 gap-8 items-center min-h-[85vh]"
    >
      <div>
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-7">
          Future Ready Work & Economy
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
          Temukan
          <span className="text-blue-600"> Karier Impian </span>
          dengan AI
        </h1>

        <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Upload CV Anda dan dapatkan rekomendasi pekerjaan terbaik berdasarkan skill, pengalaman, dan teknologi AI modern.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() => navigate('/analyze')}
            className="primary-button"
          >
            Mulai Analisis CV
          </button>

          <button
            onClick={() => {
              const section =
                document.getElementById(
                  'workflow'
                );

              section?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="secondary-button"
          >
            Cara Kerja
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-blue-300 opacity-30 blur-3xl rounded-full" />

        <img
          src={heroImage}
          alt="Hero"
          className="relative rounded-[40px] shadow-2xl"
        />
      </div>
    </section>
  );
}
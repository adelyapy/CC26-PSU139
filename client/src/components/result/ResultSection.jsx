import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { JobCard } from './JobCard';

export function ResultSection({
  results,
  onBack,
  onAnalyzeNew,
}) {
  if (!results?.length) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">

        <Navbar />

        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-3xl font-bold mb-4">
            Belum Ada Hasil Analisis
          </h1>

          <p className="text-gray-500 mb-8">
            Upload CV terlebih dahulu
            untuk mendapatkan
            rekomendasi karier.
          </p>

          <button
            onClick={onAnalyzeNew}
            className="primary-button"
          >
            Mulai Analisis
          </button>

        </main>

        <Footer />

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Rekomendasi Karier
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-10">

            <button
              onClick={onAnalyzeNew}
              className="primary-button"
            >
              Analisis Baru
            </button>

            <button
              onClick={onBack}
              className="secondary-button"
            >
              Kembali ke Beranda
            </button>

          </div>

          <p className="text-gray-600">
            Berikut hasil analisis
            AI terhadap CV Anda
          </p>
        </div>

        <div className="grid gap-6">
          {results.length > 0 ? (
            <div className="grid gap-6">
              {results.map(
                (job) => (
                  <JobCard
                    key={
                      job.id ||
                      `${job.title}-${job.location}`
                    }
                    job={job}
                  />
                )
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Tidak ada rekomendasi pekerjaan ditemukan.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Upload,
  FileText,
  ArrowLeft,
  Loader2,
} from 'lucide-react';

import { analyzeCV } from '../../api/cvApi';
import { Navbar } from '../layout/Navbar';

import { Footer } from '../layout/Footer';

const MAX_FILE_SIZE =
  5 * 1024 * 1024;

export function InputSection({
  onSuccess,
}) {
  const navigate = useNavigate();

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState('');

  const [progress, setProgress] =
    useState(0);

  const handleFileChange = (e) => {
    const selected =
      e.target.files?.[0];

    if (!selected) return;

    setError('');

    // VALIDASI PDF
    if (
      selected.type !==
      'application/pdf'
    ) {
      setError(
        'Hanya file PDF yang diperbolehkan'
      );

      return;
    }

    // VALIDASI SIZE
    if (
      selected.size >
      MAX_FILE_SIZE
    ) {
      setError(
        'Ukuran file maksimal 5MB'
      );

      return;
    }

    setFile(selected);
  };

  const handleAnalyze =
    async () => {
      if (!file) {
        setError(
          'Silakan upload CV terlebih dahulu'
        );

        return;
      }

      try {
        setLoading(true);

        setError('');

        setProgress(0);

        const result =
          await analyzeCV(
            file,
            setProgress
          );

        // SAFE RESPONSE
        const recommendations =
          result?.recommendations ||
          [];

        onSuccess({
          recommendations,
        });
      } catch (err) {
        setError(
          err.message ||
            'Server tidak dapat dihubungi'
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition font-medium"
          aria-label="Kembali ke beranda"
        >
          <ArrowLeft className="w-4 h-4" />

          Kembali ke Beranda
        </button>

        {/* HEADING */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold mb-4">
            Upload CV Anda
          </h1>

          <p className="text-lg text-gray-600">
            Upload CV PDF dan dapatkan
            rekomendasi karier terbaik
          </p>

        </div>

        {/* CARD */}
        <div className="card p-8">

          {/* LABEL */}
          <label className="block mb-4 font-medium">

            <FileText className="inline w-5 h-5 mr-2" />

            Upload File CV

          </label>

          {/* INPUT */}
          <input
            type="file"
            accept=".pdf"
            onChange={
              handleFileChange
            }
            className="hidden"
            id="cv-upload"
            aria-label="Upload CV PDF"
          />

          {/* UPLOAD AREA */}
          <label
            htmlFor="cv-upload"
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-3
              px-6
              py-10
              border-2
              border-dashed
              border-slate-300
              rounded-2xl
              cursor-pointer
              hover:bg-slate-100
              transition-all
              duration-300
            "
          >

            <Upload className="w-8 h-8 text-blue-600" />

            <span className="font-medium text-slate-700">

              {file
                ? file.name
                : 'Klik untuk upload PDF'}

            </span>

            <span className="text-sm text-gray-500">
              Maksimal ukuran file 5MB
            </span>

          </label>

          {/* ERROR */}
          {error && (
            <div
              className="
                mt-4
                p-4
                rounded-xl
                bg-red-100
                text-red-600
                text-sm
                font-medium
              "
              aria-live="polite"
            >
              {error}
            </div>
          )}

          {/* PROGRESS */}
          {loading && (
            <div className="mt-6">

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

                <div
                  className="
                    bg-blue-600
                    h-3
                    transition-all
                    duration-300
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600">

                <Loader2 className="w-4 h-4 animate-spin" />

                <span>
                  Menganalisis CV...
                  {' '}
                  {progress}%
                </span>

              </div>

            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleAnalyze}
            disabled={!file || loading}
            aria-label="Mulai analisis CV"
            className="
              w-full
              mt-8
              px-8
              py-4
              bg-blue-600
              text-white
              rounded-2xl
              hover:bg-blue-700
              transition-all
              duration-300
              disabled:bg-gray-400
              disabled:cursor-not-allowed
              font-medium
              shadow-lg
              hover:shadow-xl
            "
          >
            {loading
              ? 'Memproses...'
              : 'Analisis CV'}
          </button>

        </div>

      </main>

      <Footer />

    </div>
  );
}
import { useState } from 'react';

import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Send,
  ShieldCheck,
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] =
    useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      agree: false,
    });

  const [errors, setErrors] =
    useState({});

  const [success, setSuccess] =
    useState('');

  const [isLoading, setIsLoading] =
    useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : value,
    }));

    // Hapus error saat user mengetik
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  // =========================
  // VALIDATION
  // =========================
  const validateForm = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName =
        'Nama depan wajib diisi';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email =
        'Email wajib diisi';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        'Format email tidak valid';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message =
        'Pesan wajib diisi';
    }

    // Checkbox
    if (!formData.agree) {
      newErrors.agree =
        'Harus menyetujui kebijakan privasi';
    }

    return newErrors;
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors =
      validateForm();

    // Jika ada error
    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);
      setSuccess('');
      return;
    }

    try {
      setIsLoading(true);

      // Simulasi API Request
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      console.log(formData);

      setSuccess(
        'Pesan berhasil dikirim 🚀'
      );

      // Reset Form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
      });

      setErrors({});
    } catch (error) {
      console.error(error);

      setSuccess(
        'Terjadi kesalahan, coba lagi.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container-custom pt-10 pb-20"
    >
      {/* HEADING */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
          <Sparkles className="w-4 h-4" />

          Contact CareerPath AI
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Hubungi Kami
        </h2>

        <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Apakah Anda memiliki
          pertanyaan atau masukan
          terkait platform CareerPath
          AI? Tim kami siap membantu
          Anda dengan layanan
          profesional dan respons
          cepat.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* ========================= */}
        {/* LEFT SIDE */}
        {/* ========================= */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-xl p-8 shadow-lg">
          {/* Glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/70 border border-white/40">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Email
                  </h4>

                  <a
                    href="mailto:careerpathai@gmail.com"
                    className="text-slate-600 mt-1 hover:text-blue-600 transition"
                  >
                    careerpathai@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/70 border border-white/40">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Telepon
                  </h4>

                  <a
                    href="tel:+6281234567890"
                    className="text-slate-600 mt-1 hover:text-blue-600 transition"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/70 border border-white/40">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Lokasi
                  </h4>

                  <p className="text-slate-600 mt-1">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-slate-900 mb-5">
                Ikuti Kami
              </h4>

              <div className="flex items-center gap-4">
                {/* YOUTUBE */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 transition-all duration-300 hover:bg-pink-600 hover:text-white hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* RIGHT SIDE */}
        {/* ========================= */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-xl p-8 shadow-lg">
          {/* Glow */}
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Kirim Pesan
            </h3>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mb-6 rounded-2xl bg-green-100 border border-green-200 px-5 py-4 text-green-700">
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* NAME */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* FIRST NAME */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Nama Depan
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={
                      formData.firstName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Nama depan"
                    className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition-all focus:ring-4
                      
                    ${
                      errors.firstName
                        ? 'border-red-400 focus:ring-red-100'
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                    }`}
                  />

                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-500">
                      {
                        errors.firstName
                      }
                    </p>
                  )}
                </div>

                {/* LAST NAME */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Nama Belakang
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={
                      formData.lastName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Nama belakang"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={
                    handleChange
                  }
                  placeholder="user@gmail.com"
                  className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition-all focus:ring-4
                  
                  ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Nomor Telepon
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={
                    handleChange
                  }
                  placeholder="+62-812-345-789"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Pesan
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Tulis pesan Anda di sini..."
                  className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none resize-none transition-all focus:ring-4
                  
                  ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {
                      errors.message
                    }
                  </p>
                )}
              </div>

              {/* CHECKBOX */}
              <div>
                <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                  <input
                    name="agree"
                    type="checkbox"
                    checked={
                      formData.agree
                    }
                    onChange={
                      handleChange
                    }
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />

                    Saya setuju dengan
                    kebijakan privasi
                  </span>
                </label>

                {errors.agree && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.agree}
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />

                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
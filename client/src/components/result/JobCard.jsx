export function JobCard({ job }) {
  const scorePercent = Math.round(job.similarity_score * 100);

  const getBadgeColor = () => {
    if (scorePercent >= 70) return 'bg-green-100 text-green-700';
    if (scorePercent >= 40) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  // Prioritas: job_posting_url (LinkedIn) > application_url
  const linkedInUrl = job.job_posting_url || job.posting_url;
  const applyUrl = job.application_url;

  const hasLinkedIn = linkedInUrl && linkedInUrl !== 'No URL Provided';
  const hasApplyUrl = applyUrl && 
                     applyUrl !== 'No URL Provided' && 
                     applyUrl !== linkedInUrl;

  return (
    <div className="card p-6 hover:-translate-y-1">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{job.title}</h2>

          <p className="text-gray-500 mt-1">{job.location}</p>

          <p className="text-sm text-gray-400 mt-1">
            {job.work_type} • {job.experience_level}
          </p>
        </div>

        <div className={`px-4 py-2 rounded-full text-sm font-bold ${getBadgeColor()}`}>
          {scorePercent}% cocok
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        {/* Button LinkedIn (Prioritas Utama) */}
        {hasLinkedIn && (
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-medium"
          >
            Lihat di LinkedIn →
          </a>
        )}

        {/* Button Lamar Langsung (jika ada application_url) */}
        {hasApplyUrl && (
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-medium"
          >
            Lamar Langsung →
          </a>
        )}

        {/* Fallback jika tidak ada link sama sekali */}
        {!hasLinkedIn && !hasApplyUrl && (
          <p className="text-gray-500 text-sm py-3">Link lowongan tidak tersedia</p>
        )}
      </div>
    </div>
  );
}
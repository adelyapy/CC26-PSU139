export function JobCard({
  job,
}) {
  const scorePercent =
    Math.round(
      job.similarity_score * 100
    );

  const getBadgeColor = () => {
    if (scorePercent >= 70) {
      return 'bg-green-100 text-green-700';
    }

    if (scorePercent >= 40) {
      return 'bg-yellow-100 text-yellow-700';
    }

    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="card p-6 hover:-translate-y-1">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            {job.title}
          </h2>

          <p className="text-gray-500 mt-1">
            {job.location}
          </p>

          <p className="text-sm text-gray-400 mt-1">
            {job.work_type} •{' '}
            {
              job.experience_level
            }
          </p>
        </div>

        <div
          className={`px-4 py-2 rounded-full text-sm font-bold ${getBadgeColor()}`}
        >
          {scorePercent}% cocok
        </div>
      </div>

      {job.application_url &&
        job.application_url !==
          'No URL Provided' && (
          <a
            href={
              job.application_url
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Lihat Lowongan →
          </a>
        )}
    </div>
  );
}
export const analyzeCVService = async (
  cvText
) => {

  await new Promise((resolve) =>
    setTimeout(resolve, 60000)
  );

  return {
    skills: ["React", "Node.js"],
    jobs: [
      {
        title: "Frontend Developer",
        score: 0.92,
      },
      {
        title: "Full Stack Developer",
        score: 0.88,
      },
    ],
  };
};
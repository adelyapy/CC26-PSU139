import { ResultSection } from '../components/result/ResultSection';

export function ResultsPage({
  results,
  onBack,
  onAnalyzeNew,
}) {
  return (
    <ResultSection
      results={results}
      onBack={onBack}
      onAnalyzeNew={onAnalyzeNew}
    />
  );
}
import {
  lazy,
  Suspense,
  useState,
} from 'react';

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import { LoadingScreen } from './components/common/LoadingScreen';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const LandingPage = lazy(() =>
  import('./pages/LandingPage').then((module) => ({ default: module.LandingPage }))
);

const TeamPage = lazy(() =>
  import('./pages/TeamPage').then((module) => ({ default: module.TeamPage }))
);

const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);

const AnalyzePage = lazy(() =>
  import('./pages/AnalyzePage').then((module) => ({ default: module.AnalyzePage }))
);

const ResultsPage = lazy(() =>
  import('./pages/ResultsPage').then((module) => ({ default: module.ResultsPage }))
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);

function App() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/analyze"
            element={
              <AnalyzePage
                onSuccess={(data) => {
                  setResults(data?.recommendations || []);
                  navigate('/results');
                }}
              />
            }
          />
          <Route
            path="/results"
            element={
              <ResultsPage
                results={results}
                onBack={() => navigate('/')}
                onAnalyzeNew={() => navigate('/analyze')}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
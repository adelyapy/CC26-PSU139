import {
  lazy,
  Suspense,
  useState,
} from 'react';

import axios from 'axios';

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import { LoadingScreen } from './components/common/LoadingScreen';
import { ErrorBoundary } from './components/common/ErrorBoundary';

/* Lazy Pages */
const LandingPage = lazy(() =>
  import('./pages/LandingPage').then(
    (module) => ({
      default: module.LandingPage,
    })
  )
);

const TeamPage = lazy(() =>
  import('./pages/TeamPage').then(
    (module) => ({
      default: module.TeamPage,
    })
  )
);

const ContactPage = lazy(() =>
  import('./pages/ContactPage').then(
    (module) => ({
      default: module.ContactPage,
    })
  )
);

const AnalyzePage = lazy(() =>
  import('./pages/AnalyzePage').then(
    (module) => ({
      default: module.AnalyzePage,
    })
  )
);

const ResultsPage = lazy(() =>
  import('./pages/ResultsPage').then(
    (module) => ({
      default: module.ResultsPage,
    })
  )
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then(
    (module) => ({
      default: module.NotFoundPage,
    })
  )
);

function App() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleAnalyze = async (cv) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/analyze',
        {
          cv_text: cv,
        }
      );

      setResults(
        res.data?.recommendations || []
      );

      navigate('/results');
    } catch (err) {
      console.error(err);
      alert('Error connecting to backend');
    }
  };

  return (
    <ErrorBoundary>
      <Suspense
        fallback={<LoadingScreen />}
      >
        <Routes>

          {/* LANDING */}
          <Route
            path="/"
            element={<LandingPage />}
          />

          {/* TEAM */}
          <Route
            path="/team"
            element={<TeamPage />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* ANALYZE */}
          <Route
            path="/analyze"
            element={
              <AnalyzePage
                onAnalyze={handleAnalyze}
                onSuccess={(data) => {
                  setResults(
                    data?.recommendations || []
                  );

                  navigate('/results');
                }}
              />
            }
          />

          {/* RESULTS */}
          <Route
            path="/results"
            element={
              <ResultsPage
                results={results}
                onBack={() =>
                  navigate('/')
                }
                onAnalyzeNew={() =>
                  navigate('/analyze')
                }
              />
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
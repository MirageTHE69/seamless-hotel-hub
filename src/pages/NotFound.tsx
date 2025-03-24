
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <Helmet>
        <title>Page Not Found - SeamlessHotel</title>
        <meta name="description" content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="glass rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-7xl font-bold text-primary mb-6">404</h1>
        <p className="text-2xl text-slate-800 mb-6">Oops! Page not found</p>
        <p className="text-slate-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="button-primary inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

import { useLocation, Link } from 'react-router-dom';

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNames: { [key: string]: string } = {
    'events': 'Events & Workshops',
    'book-now': 'Book Appointment',
    'gallery': 'Gallery'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/30 py-3">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <li key={pathname} className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                {isLast ? (
                  <span className="text-primary font-medium" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;
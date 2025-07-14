import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';

export function MainLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}


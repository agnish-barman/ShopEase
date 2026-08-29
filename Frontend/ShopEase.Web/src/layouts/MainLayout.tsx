import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar';
import Header from '../components/Header/Header';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <AnnouncementBar />
      <Header />

      <main className="main-layout__content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
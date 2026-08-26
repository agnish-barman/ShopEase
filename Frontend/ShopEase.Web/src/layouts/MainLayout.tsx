import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import "./MainLayout.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <AnnouncementBar />

      <main className="main-layout__content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
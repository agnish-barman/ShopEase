import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Header from "../components/Header/Header";
import "./MainLayout.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="main-layout">
      <AnnouncementBar />
      <Header />

      <div className="main-layout__content">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import RoomList from "./components/RoomList";
import CreateVoting from "./components/CreateVoting";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import PollResults from "./components/PollResults";
import PreliminaryResults from "./components/PreliminaryResults";
import LoginModal from "./components/LoginModal";
import RegistrationModal from "./components/RegistrationModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleRegistrationSuccess = () => {
    setIsLoggedIn(true);
    setIsRegistrationModalOpen(false);
    closeLoginModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Header
          onLoginSuccess={handleLoginSuccess}
          onRegistrationSuccess={handleRegistrationSuccess}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onOpenRegister={openRegistrationModal}
        />
        <main className="p-4 space-y-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner
                    isLoggedIn={isLoggedIn}
                    onOpenLogin={openLoginModal}
                    onOpenRegister={openRegistrationModal}
                  />
                  {isLoggedIn && <RoomList />}
                </>
              }
            />
            <Route path="/create-voting" element={<CreateVoting />} />
            <Route path="/question1" element={<Question1 />} />
            <Route path="/question2" element={<Question2 />} />
            <Route path="/question3" element={<Question3 />} />
            <Route path="/question4" element={<Question4 />} />
            <Route path="/question5" element={<Question5 />} />
            <Route path="/preliminary-results" element={<PreliminaryResults />} />
            <Route path="/polls/:pollId" element={<PollResults />} />
          </Routes>
        </main>
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          onRegister={openRegistrationModal}
          onLoginSuccess={handleLoginSuccess}
        />
        <RegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={closeRegistrationModal}
          onRegistrationSuccess={handleRegistrationSuccess}
          onCloseLoginModal={closeLoginModal} // Передаем closeLoginModal
        />
      </div>
    </Router>
  );
}

export default App;

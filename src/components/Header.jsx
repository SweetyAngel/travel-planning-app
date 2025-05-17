import { useState } from 'react';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';
import ProfileModal from './ProfileModal';

function Header({ onLoginSuccess, onRegistrationSuccess, isLoggedIn, onLogout, onOpenRegister }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

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

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b shadow-sm">
      <div className="text-sm font-bold text-red-600 bg-red-200 rounded-full px-4 py-2">
        Сервис<br />Совместного<br />Путешествия
      </div>
      <div className="flex items-center gap-4">
        <div className="grid grid-cols-3 gap-1 cursor-pointer" onClick={isLoggedIn ? openProfileModal : null}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
        {!isLoggedIn && (
          <button
            className="bg-red-500 text-white font-semibold px-4 py-1 rounded shadow"
            onClick={openLoginModal}
          >
            Войти
          </button>
        )}
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onRegister={openRegistrationModal} // Передаем функцию открытия регистрации
        onLoginSuccess={onLoginSuccess}
      />
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
        onRegistrationSuccess={onRegistrationSuccess}
      />
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} onLogout={onLogout} />
    </header>
  );
}

export default Header;

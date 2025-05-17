import { useState, useEffect } from 'react';

function ProfileModal({ isOpen, onClose, onLogout }) {
  // TODO: api /getFriends
  const [profileData, setProfileData] = useState({
    username: 'Имя Фамилия',
    friendsCount: 52,
    friends: [
      { id: 1, name: 'Цветкова Марина' },
      { id: 2, name: 'Суренчьян Мариам' },
      { id: 3, name: 'Виолова Ваннеса' },
      { id: 4, name: 'Баскова Надя' },
    ],
  });

  useEffect(() => {
    // Здесь можно было бы загружать данные профиля с бэкенда при открытии модального окна
  }, [isOpen]);

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Друзья</h2>
        <p className="text-gray-600 mb-2">Всего {profileData.friendsCount} друга</p>
        <ul className="space-y-3 mb-4">
          {profileData.friends.map((friend) => (
            <li key={friend.id} className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.75 18a7.5 7.5 0 0114.997-2.189 10.238 10.238 0 00-8.144-6.323 10.238 10.238 0 00-8.144 6.323A7.5 7.5 0 013.75 18z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{friend.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-4"> {/* Контейнер для кнопок */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Закрыть
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;

import { useState } from 'react';
import axios from 'axios';

function RegistrationModal({ isOpen, onClose, onRegistrationSuccess, onCloseLoginModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setError('Пароли не совпадают!');
      return;
    }

    try {
      const response = await axios.post(`/api/users/create?username=${username}&password=${password}`);

      if (response.status === 201) {
        onRegistrationSuccess();
        onClose();
        if (onCloseLoginModal) {
          onCloseLoginModal();
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('Пользователь с таким именем уже существует');
      } else {
        setError('Ошибка при регистрации. Попробуйте позже.');
      }
      console.error('Registration error:', err);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">Регистрация</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Имя пользователя
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Подтвердите пароль
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegistration}
          >
            Зарегистрироваться
          </button>
          <button
            className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;

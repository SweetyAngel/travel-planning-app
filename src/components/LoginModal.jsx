import { useState } from 'react';
import axios from 'axios';

function LoginModal({ isOpen, onClose, onRegister, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/checkLogin?username=${email}&password=${password}`);

      if (response.data === 1) {
        onLoginSuccess();
        onClose();
      } else {
        setError('Неверный email или пароль');
      }
    } catch (err) {
      setError('Ошибка при входе. Попробуйте позже.');
      console.error('Login error:', err);
    }
  };

  const handleOpenRegister = () => {
    onRegister(true);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">Войти</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Имя пользователя
          </label>
          <input
            type="text"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
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
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Войти
          </button>
          <button
            className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            className="inline-block align-baseline font-semibold text-sm text-green-500 hover:text-green-800"
            onClick={handleOpenRegister}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

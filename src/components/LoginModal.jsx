import { useState } from 'react';

function LoginModal({ isOpen, onClose, onRegister, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Здесь будет логика отправки данных на бэкенд для проверки
    console.log('Попытка входа:', { email, password });
    // Имитируем успешный вход
    alert('Вход успешен!');
    onLoginSuccess(); // Вызываем обработчик успешного входа
    onClose();
  };

  const handleOpenRegister = () => {
    onRegister(true); // Открываем RegistrationModal
    onClose();       // Закрываем LoginModal
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">Войти</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Адрес электронной почты
          </label>
          <input
            type="email"
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
            onClick={handleOpenRegister} // Используем новый обработчик
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

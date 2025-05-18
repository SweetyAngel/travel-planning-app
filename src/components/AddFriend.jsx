import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddFriend() {
  const [friendId, setFriendId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleAddFriend = async () => {
    try {
      // Получаем ID текущего пользователя (в реальном приложении он должен быть в состоянии или контексте)
      const currentUserId = localStorage.getItem('userId'); // Пример - нужно реализовать сохранение при логине

      if (!currentUserId) {
        setError('Вы не авторизованы');
        return;
      }

      const response = await axios.post(`/api/friends/create?friend1_id=${currentUserId}&friend2_id=${friendId}`);

      if (response.status === 201) {
        setSuccess('Друг успешно добавлен!');
        setError('');
        setTimeout(() => navigate('/friends'), 2000);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          setError('Пользователь уже в друзьях или не существует');
        } else {
          setError('Ошибка сервера');
        }
      } else {
        setError('Не удалось подключиться к серверу');
      }
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Добавить друга</h1>

      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{success}</div>}

      <div className="mb-4">
        <label htmlFor="friendId" className="block text-gray-700 mb-2">
          ID друга
        </label>
        <input
          type="text"
          id="friendId"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
          placeholder="Введите ID пользователя"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleAddFriend}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Добавить друга
        </button>
        <button
          onClick={() => navigate('/friends')}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
        >
          Назад
        </button>
      </div>
    </div>
  );
}

export default AddFriend;

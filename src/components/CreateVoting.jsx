import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateVoting() {
  const [roomName, setRoomName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [friends, setFriends] = useState([
    { id: 1, friendId: 2, name: "Иван Иванов" },
    { id: 2, friendId: 3, name: "Петр Петров" }
  ]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFriendSelect = (friendId) => {
    setSelectedFriends(prev =>
      prev.includes(friendId)
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация дат
    if (new Date(endDate) < new Date(startDate)) {
      setError("Дата окончания должна быть позже даты начала");
      return;
    }

    console.log("Creating voting with:", {
      title: roomName,
      startDate,
      endDate,
      participants: selectedFriends
    });

    // Здесь будет вызов API для создания голосования
    // await axios.post("/api/votings/create", {...});

    navigate("/question1");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Создание комнаты голосования</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Название комнаты голосования:
          </label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Например: Летний отпуск 2024"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Даты путешествия:
          </label>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-500 mb-1">Начало</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-500 mb-1">Конец</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Добавить друзей в комнату голосования:
          </label>

          <div className="border rounded-md p-4 max-h-60 overflow-y-auto">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center mb-2 last:mb-0">
                <input
                  type="checkbox"
                  id={`friend-${friend.id}`}
                  checked={selectedFriends.includes(friend.friendId)}
                  onChange={() => handleFriendSelect(friend.friendId)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`friend-${friend.id}`}
                  className="ml-3 block text-gray-700 hover:cursor-pointer"
                >
                  {friend.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
          >
            Отменить
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Создать голосование
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateVoting;

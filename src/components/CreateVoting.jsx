import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateVoting() {
  const [roomName, setRoomName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Создание комнаты голосования:", { roomName, startDate, endDate });
    navigate("/question1");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Создание комнаты голосования</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Название комнаты голосования:</label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Даты путешествия:</label>
          <div className="flex gap-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded-md"
              required
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Добавить друзей в комнату голосования:</label>
          {/* TODO: api /getFriends */}
          <input
            type="text"
            placeholder="Выберите участника из списка"
            className="w-full p-2 border rounded-md"
            readOnly
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-red-200 text-red-700 px-4 py-2 rounded-md font-semibold"
          >
            Отменить
          </button>
          <button
            type="submit"
            className="bg-green-300 text-green-700 px-4 py-2 rounded-md font-semibold"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateVoting;

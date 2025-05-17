import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function PollResults() {
  const { pollId } = useParams();
  const navigate = useNavigate();

  // Тестовые данные о голосовании (теперь без победившего варианта)
  const [pollData, setPollData] = useState({
    title: "Результаты голосования",
    options: [
      { id: 1, name: "Вариант 1", votes: 25, image: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Вариант1" },
      { id: 2, name: "Вариант 2", votes: 30, image: "https://via.placeholder.com/150/00FF00/FFFFFF?Text=Вариант2" },
      { id: 3, name: "Вариант 3", votes: 20, image: "https://via.placeholder.com/150/0000FF/FFFFFF?Text=Вариант3" },
      { id: 4, name: "Вариант 4", votes: 25, image: "https://via.placeholder.com/150/FFFF00/000000?Text=Вариант4" },
    ],
    participants: [
      { id: 1, name: "Имя Фамилия 1", hasVoted: true },
      { id: 2, name: "Имя Фамилия 2", hasVoted: false },
      { id: 3, name: "Имя Фамилия 3", hasVoted: true },
    ],
  });

  const getProgressBarStyle = (votes) => {
    const totalVotes = pollData.options.reduce((sum, option) => sum + option.votes, 0);
    const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
    return {
      width: `${percentage}%`,
      backgroundColor: '#4CAF50',
      height: '10px',
      borderRadius: '5px',
    };
  };

  const handleViewResults = () => {
    // Здесь будет логика завершения голосования на бэкенде
    // После этого перенаправляем на страницу предварительных результатов
    navigate("/preliminary-results");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{pollData.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Левая колонка: Результаты голосования */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Голосование</h3>
          <div className="space-y-3">
            {pollData.options.map((option) => (
              <div key={option.id} className="flex items-center">
                <span className="w-24 font-semibold">{option.name}</span>
                <div className="bg-gray-200 rounded-full h-2.5 w-full mr-2">
                  <div style={getProgressBarStyle(option.votes)} className="rounded-full h-2.5"></div>
                </div>
                <span className="text-sm text-gray-500">{Math.round((option.votes / pollData.options.reduce((sum, opt) => sum + opt.votes, 0)) * 100)}%</span>
              </div>
            ))}
            <button onClick={handleViewResults} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow">
              {/* TODO: api /closePoll */}
              Завершить голосование
            </button>
          </div>
        </div>

        {/* Правая колонка: Участники */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Участники</h3>
          <ul className="space-y-2">
            <li className="grid grid-cols-2 gap-4 font-semibold">
              <span>Имя</span>
              <span className="text-right">Статус</span>
            </li>
            {pollData.participants.map((participant) => (
              <li key={participant.id} className="grid grid-cols-2 gap-4">
                <span>{participant.name}</span>
                <span className="text-right text-gray-600">{participant.hasVoted ? 'Проголосовал' : 'Не голосовал'}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-300 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded shadow">
            {/* TODO: api /getFriends */}
            Добавить друга
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Варианты</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pollData.options.map((option) => (
            <div key={option.id} className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
              {option.image && (
                <img src={option.image} alt={option.name} className="w-full h-32 object-cover" />
              )}
              <div className="p-3">
                <div className="font-semibold text-center">{option.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-500 hover:underline">Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default PollResults;

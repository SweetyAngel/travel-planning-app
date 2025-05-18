import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PollResults() {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Получаем рекомендованные направления
        const response = await axios.get(`/api/destinations/recommendations/${pollId}`);
        setDestinations(response.data);
      } catch (err) {
        setError('Ошибка загрузки данных');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pollId]);

  const handleVote = async () => {
    if (!selectedDestination) {
      setError('Пожалуйста, выберите вариант');
      return;
    }

    try {
      await axios.post('/api/votes', {
        votingId: pollId,
        destinationId: selectedDestination,
        userId: localStorage.getItem('userId')
      });
      navigate(`/polls/${pollId}/results`);
    } catch (err) {
      setError('Ошибка при голосовании');
      console.error(err);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Выберите направление</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {destinations.map(destination => (
          <div
            key={destination.id}
            className={`border rounded-lg overflow-hidden cursor-pointer transition-all
              ${selectedDestination === destination.id ? 'ring-4 ring-blue-500' : 'hover:shadow-md'}`}
            onClick={() => setSelectedDestination(destination.id)}
          >
            <img
              src={destination.imageUrl || 'https://via.placeholder.com/300x200'}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{destination.name}</h3>
              <p className="text-gray-600 mt-2">{destination.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Бюджет: {destination.budgetCategory === 'low' ? 'Низкий' :
                           destination.budgetCategory === 'medium' ? 'Средний' : 'Высокий'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <div className="text-center">
        <button
          onClick={handleVote}
          disabled={!selectedDestination}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded disabled:opacity-50"
        >
          Проголосовать
        </button>
      </div>
    </div>
  );
}

export default PollResults;

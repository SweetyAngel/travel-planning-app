import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PreliminaryResults() {
  const navigate = useNavigate();
  const [preliminaryData, setPreliminaryData] = useState({
    message: "На основе собранных данных вам лучше всего подойдут следующие варианты:",
    options: [
      { id: 1, name: "Дубай", votes: 10, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/The_Burj_Khalifa_on_2019-04-29.jpg/800px-The_Burj_Khalifa_on_2019-04-29.jpg" },
      { id: 2, name: "Мальдивы", votes: 15, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Six_Senses_Laamu.jpg/800px-Six_Senses_Laamu.jpg" },
      { id: 3, name: "Бали", votes: 12, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pura_Ulun_Danu_Bratan%2C_Bali%2C_Indonesia.jpg/800px-Pura_Ulun_Danu_Bratan%2C_Bali%2C_Indonesia.jpg" },
      { id: 4, name: "Таиланд", votes: 8, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Phang_Nga_Bay%2C_Thailand.jpg/800px-Phang_Nga_Bay%2C_Thailand.jpg" },
    ],
  });

  const handleContinue = () => {
    // Здесь будет логика перехода к детальным результатам голосования
    // В реальном приложении, возможно, потребуется передать ID голосования
    navigate("/");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">{preliminaryData.message}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {preliminaryData.options.map((option) => (
          <div key={option.id} className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
            {option.image && (
              <img src={option.image} alt={option.name} className="w-full h-32 object-cover" />
            )}
            <div className="p-3">
              <div className="font-semibold">{option.name}</div>
              <div className="text-sm text-gray-500 mt-1">{option.votes} голосов</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleContinue}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow"
      >
        На главную
      </button>
    </div>
  );
}

export default PreliminaryResults;

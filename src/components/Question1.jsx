import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Question1() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
  if (selectedOption) {
    // Получаем текущие query параметры
    const searchParams = new URLSearchParams(window.location.search);
    // Добавляем наш ответ
    searchParams.set('q1', selectedOption);
    // Переходим на следующий вопрос с сохраненными ответами
    navigate(`/question2?${searchParams.toString()}`);
  } else {
    alert("Пожалуйста, выберите вариант ответа.");
  }
};

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Вопрос 1: Выберите формат путешествия</h2>
      <div className="space-y-4">
        {["семейное путешествие", "путешествие с друзьями", "романтическое путешествие", "лечебное путешествие"].map((option) => (
          <label
            key={option}
            className={`block p-4 rounded-lg border ${selectedOption === option ? "bg-green-100 border-green-300" : "bg-gray-100 border-gray-300"} cursor-pointer transition-colors`}
          >
            <input
              type="radio"
              name="question1"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-300 hover:bg-green-400 px-4 py-2 rounded-md font-semibold text-white"
      >
        Продолжить
      </button>
    </div>
  );
}

export default Question1;

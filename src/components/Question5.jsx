import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Question5() {
  const [budget, setBudget] = useState(5000);
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert(`Ваш бюджет: ${budget} рублей`);
    // В будущем здесь будет отправка данных на бэкенд для создания голосования
    // После успешного создания голосования, перенаправляем на страницу результатов
    navigate("/polls/test-poll-id"); // Используем тестовый ID
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Вопрос 5: Выберите бюджет путешествия</h2>
      <div className="mb-4">
        <Slider
          min={0}
          max={10000}
          value={budget}
          onChange={setBudget}
          trackStyle={{ backgroundColor: "#4A90E2" }}
          handleStyle={{
            borderColor: "#4A90E2",
            height: 14,
            width: 14,
            marginLeft: -7,
            marginTop: -5,
            backgroundColor: "#fff",
          }}
          railStyle={{ backgroundColor: "#e1e1e1" }}
        />
        <div className="flex justify-between text-gray-700">
          <span>0 рублей</span>
          <span>{budget} рублей</span>
          <span>10000 рублей</span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-300 hover:bg-green-400 px-4 py-2 rounded-md font-semibold text-white"
      >
        Создать голосование
      </button>
    </div>
  );
}

export default Question5;

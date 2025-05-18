import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from "axios";

function Question5() {
  const [budget, setBudget] = useState(5000);
  const navigate = useNavigate();
  const location = useLocation();

  const collectAnswers = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      1: searchParams.get('q1'),
      2: searchParams.get('q2'),
      3: searchParams.get('q3'),
      4: searchParams.get('q4'),
      5: budget
    };
  };

  const handleSubmit = async () => {
    try {
      const answers = collectAnswers();

      const response = await axios.post("/api/votings/create", {
        answers: answers
      });

      if (response.data && response.data.id) {
        navigate(`/polls/${response.data.id}`);
      } else {
        navigate("/polls/test-poll-id");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating voting");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Вопрос 5: Бюджет путешествия</h2>
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
          <span>0 ₽</span>
          <span>{budget} ₽</span>
          <span>10000 ₽</span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold text-white"
      >
        Создать голосование
      </button>
    </div>
  );
}

export default Question5;

import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';

function QuestionDisplay({ currentQuestion, onNextQuestion }) {
  switch (currentQuestion) {
    case 1:
      return <Question1 onNext={onNextQuestion} />;
    case 2:
      return <Question2 onNext={onNextQuestion} />;
    case 3:
      return <Question3 onNext={onNextQuestion} />;
    case 4:
      return <Question4 onNext={onNextQuestion} />;
    case 5:
      return <Question5 onNext={onNextQuestion} />;
    default:
      return <p>Все вопросы пройдены!</p>; // Или перенаправление на результаты
  }
}

export default QuestionDisplay;

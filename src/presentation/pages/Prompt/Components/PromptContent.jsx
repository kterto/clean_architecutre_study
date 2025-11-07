import AnswerList from "./AnswerList";
import AnswerForm from "./AnswerForm";

export default function PromptContent({ prompt, handleSubmit }) {
  if (prompt.answered) {
    return <AnswerList answers={prompt.answers} />;
  }

  return <AnswerForm handleSubmit={handleSubmit} />;
}

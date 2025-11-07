export default function AnswerList({ answers }) {
  return (
    <>
      {answers.map((answer) => (
        <div key={answer.id}>
          <p>{answer.text}</p>
          <div>— {answer.author.name}</div>
        </div>
      ))}
    </>
  );
}

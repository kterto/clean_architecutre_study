export default function AnswerForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <textarea></textarea>
      <button>Submit</button>
    </form>
  );
}

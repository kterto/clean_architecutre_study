import { usePrompt } from "../../../domain/usePrompt";
import PromptContent from "./Components/PromptContent";
import RandomInspirationalQuote from "./Components/RandomInspirationalQuote";

export default function PromptPage() {
  const { prompt, handleSubmit } = usePrompt();

  if (prompt) {
    return (
      <>
        <h1>{prompt.title}</h1>
        <PromptContent prompt={prompt} handleSubmit={handleSubmit} />
      </>
    );
  }

  return <RandomInspirationalQuote />;
}

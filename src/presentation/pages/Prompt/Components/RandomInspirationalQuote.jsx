export default function RandomInspirationalQuote() {
  const quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. - Elon Musk",
    "Success is not in what you have, but who you are. - Bo Bennett",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <div style={{ fontStyle: "italic", margin: "20px 0" }}>"{randomQuote}"</div>
  );
}

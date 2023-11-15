

export default function getWeatherDescription(condition: string) {
  const words = condition.split(" ");
  if (words.length < 3) {
    return condition;
  }
  else {
    return (words[0] + " " + words[1]);
  }
}

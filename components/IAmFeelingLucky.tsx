import { BlogType } from "../utils/types";

export function IAmFeelingLucky() {
  async function handleClick() {
    const result = await fetch("/api/random");
    const item = (await result.json()) as {
      random: BlogType;
    };
    window.open(item.random.website, "_blank");
  }
  return <button onClick={handleClick}>I am feeling lucky</button>;
}

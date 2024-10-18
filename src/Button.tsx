import { createSignal } from 'solid-js';

export default function Button() {
  const [count, setCount] = createSignal(0);
  return (
    <button onClick={() => setCount(count => count + 1)}>
      Count Is {count()}
    </button>
  );
}

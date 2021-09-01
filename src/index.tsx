import ForgeUI, { useState, Button, Macro, render } from '@forge/ui';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Button
      text={`Count is ${count}`}
      onClick={() => {
        setCount(count + 1);
      }}
    />
  );
};

export const run = render(<Macro app={<App />} />);
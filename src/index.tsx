import ForgeUI, { render, Macro, Button, Text, useEffect, useState, Fragment } from '@forge/ui';

const sendLog = async () => Promise.resolve('send!');

const LogData = ({ counter }) => {
  const [logSend, setLogSend] = useState(null);

  useEffect(async () => {
    await sendLog();

    setLogSend(Date.now());
  }, [counter]);

  return <Text>Last log: {logSend}</Text>;
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <Button
        text={`Count is ${count}`}
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <LogData counter={count} />
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);

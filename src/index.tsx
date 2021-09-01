import ForgeUI, { useProductContext, Text, Macro, render } from '@forge/ui';

const App = () => {
  const context = useProductContext();
  return <Text>All info about my context: {JSON.stringify(context)}</Text>;
};

export const run = render(<Macro app={<App />} />);
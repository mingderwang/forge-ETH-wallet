import ForgeUI, {
  useConfig,
  Text,
  TextField,
  Macro,
  MacroConfig,
  render,
} from '@forge/ui';

const App = () => {
  // Retrieve the configuration
  const config = useConfig();
  console.log(config)

  // Use the configuration values
  return (
    <Text>
      {(config === undefined)?'x': (config.name === undefined)?'x':config.name} is {(config === undefined )?'x' : (config.age === undefined)?'x':config.age} years old.
    </Text>
  );
};

export const run = render(<Macro app={<App />} />);

// Function that defines the configuration UI
const Config = () => {
  return (
    <MacroConfig>
      <TextField name="name" label="Pet name" />
      <TextField name="age" label="Pet age" />
    </MacroConfig>
  );
};

export const config = render(<Config />);
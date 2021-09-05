import ForgeUI, {
  useConfig,
  Text,
  TextField,
  Macro,
  MacroConfig,
  render,
  useEffect,
} from '@forge/ui';
import { Sdk } from 'etherspot';

let sdk: Sdk


const App = () => {
  // Retrieve the configuration
  const config = useConfig();

useEffect(async () => {
  sdk = new Sdk({
    privateKey: '0xf56c89a940a55b09a97ae835b645b225c6d080fce0ba8dc9057dc87e12be6be6',
  });
  const signature = await sdk.signMessage({
    message: 'eu non nisi consectetur minim cillum velit pariatur ea magna',
  });
  console.log('signature', signature);
   
}, []);


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

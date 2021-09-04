import ForgeUI, {
  useEffect,
  useConfig,
  Text,
  TextField,
  Macro,
  MacroConfig,
  render,
  SectionMessage,
} from '@forge/ui'

const defaultConfig = {
  name: 'Unnamed Pet',
  age: '0',
}

import { Sdk } from 'etherspot'

let sdk: Sdk // current sdk instance
console.log(sdk)

const App = () => {
  // Retrieve the configuration
  const config = useConfig() || defaultConfig

  //  sdk = new Sdk('0xa3775904fafa1f7c522b08d45b2b9732af4d839fb7a97a0ff103754bcc208421')
  //  console.log(sdk)

  return
  ;<SectionMessage title="Heading" appearance="info">
    <Text>
      {config.name} is {config.age} years old.
    </Text>
    ;
  </SectionMessage>
}

export const run = render(<Macro app={<App />} />)

// Function that defines the configuration UI
const Config = () => {
  return (
    <MacroConfig>
      <TextField name="name" label="Pet name" />
      <TextField name="age" label="Pet age" />
    </MacroConfig>
  )
}

export const config = render(<Config />)

import ForgeUI, {
    render,
    TextField,
    MacroConfig,
    useConfig,
  } from "@forge/ui";
  import { Sdk, NetworkNames } from 'etherspot';
  
  const ConfigView = () => {
    let sdk: Sdk
    sdk = new Sdk({
      privateKey: '0x492a0ed9e5f29e9491ad4893f16634cfc50facac1d23d6035319b708f0023acc',
    });

    const { privateKey, title, fields, ...rest } = useConfig() || {};
    const legacyFieldsDefaultValue = Object.entries(rest)
      .sort((a, b) => Number(a[0].split("-")[0]) - Number(b[0].split("-")[0]))
      .map(([, value]) => value)
      .filter(value => value !== "").join(',');
    return (
      <MacroConfig>
         <TextField
          name="privateKey"
          label="What is your private key (optional, or random)"
          defaultValue={privateKey}
        />
        <TextField
          name="title"
          label="What are people signing up for? (optional)"
          defaultValue={title}
        />
        <TextField
          name="fields"
          label="Is there any extra information you would like to get?"
          description="Enter comma separated labels for each extra information field"
          defaultValue={fields || legacyFieldsDefaultValue}
        />
      </MacroConfig>
    );
  };
  
  export const run = render(<ConfigView />)
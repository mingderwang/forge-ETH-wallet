import ForgeUI, {
    render,
    TextField,
    MacroConfig,
    useConfig,
  } from "@forge/ui";
  
  const ConfigView = () => {
    const { title, fields, ...rest } = useConfig() || {};
    const legacyFieldsDefaultValue = Object.entries(rest)
      .sort((a, b) => Number(a[0].split("-")[0]) - Number(b[0].split("-")[0]))
      .map(([, value]) => value)
      .filter(value => value !== "").join(',');
    return (
      <MacroConfig>
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
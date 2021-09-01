import ForgeUI, { useAction, Button, Macro, render } from '@forge/ui'

const App = () => {
  const [count, setCount] = useAction(
    (currentCount, step: number) => currentCount + step,
    0,
  )
  return (
    <Button
      text={`Count is ${count}`}
      onClick={() => {
        // what we call "setCount" with will be "step" in reducer
        setCount(1)
      }}
    />
  )
}

export const run = render(<Macro app={<App />} />)

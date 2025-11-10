import { Input } from './components/Forms/Input';

function App() {


  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ]



  return (
    <div className="p-8 bg-white min-h-screen ">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        <div className="p-8 rounded-lg flex items-center justify-center gap-8">
          <Input.Root>
            <Input.Label floating>Teste</Input.Label>
            <Input.Box>
              <Input.Field />
            </Input.Box>
          </Input.Root>
          <Input.Root>
            <Input.Label floating>Teste</Input.Label>
            <Input.Box>
              <Input.Select options={options} />
            </Input.Box>
          </Input.Root>
        </div>

      </div>
    </div>
  );
}

export default App;

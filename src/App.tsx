import './App.css'
import { Input } from './components/Input'

function App() {

  return (
    <>
      <div className='w-screen h-screen flex justify-center align-center items-center flex-1'>
        <div className='w-1/4'>
          <Input.Root error={false} disabled={false} accentColor='primary'>
            <Input.Label floating={false}>Label</Input.Label>
            <Input.Box>
              <Input.Field placeholder='tesasdasasasdasdasdte' />
            </Input.Box>
          </Input.Root>
        </div>

      </div>
    </>
  )
}

export default App

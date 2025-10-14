import './App.css'
import { Button } from './components/Forms/Button'
import { Input } from './components/Forms/Input'
import { Typography } from './components/Forms/Typography'
import { Popper } from './components/Layout/Popper'

function App() {

  const selectOptions = [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3' },
  ];


  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center align-center items-center flex-1 gap-3'>
        <div className='w-1/4'>
          <Input.Root error={false} disabled={false} accentColor='primary'>
            <Input.Label floating={true}>Label</Input.Label>
            <Input.Box>
              <Input.Field type='text' placeholder='Placeholder' />
            </Input.Box>
          </Input.Root>
        </div>
        <div className='w-1/4'>
          <Input.Root error={false} disabled={false} accentColor='primary'>
            <Input.Label floating={true}>Label</Input.Label>
            <Input.Box>
              <Input.Select options={selectOptions} />
            </Input.Box>
          </Input.Root>
        </div>
        <div className='w-1/4 flex gap-2'>
          <Popper.Root orientation='bottom' >
            <Popper.TriggerHover>
              <Button >Button</Button>
            </Popper.TriggerHover>
            <Popper.Content>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Typography>
            </Popper.Content>
          </Popper.Root>
        </div>
        <div className='w-1/4 flex gap-2'>
          <Button variant='outline' color='primary' >Button</Button>
          <Button variant='text' color='primary' >Button</Button>
        </div>
        {/* <div className='w-1/4'>
          <Grid.Container gap={1}>
            <Grid.Item sm={12} md={3} lg={3}>
              <Button >Button fill</Button>
            </Grid.Item>
            <Grid.Item sm={12} md={3} lg={3}>
              <Button variant='text'>Button text</Button>
            </Grid.Item>
            <Grid.Item sm={12} md={3} lg={3}>
              <Button variant='outline'>Button outline</Button>
            </Grid.Item>
            <Grid.Item sm={12} md={3} lg={3}>
              <Button loading>Button loader</Button>
            </Grid.Item>
            <Grid.Item sm={12} md={3} lg={3}>
              <Button disabled>Button disabled</Button>
            </Grid.Item>
          </Grid.Container>
        </div> */}
      </div>
    </>
  )
}

export default App

import { Step } from '../interfaces/Step';
import WidgetModal from './WidgetModal';

interface appProps {
  steps: Step[]
}

const App = ({ steps }: appProps): JSX.Element => {


  return (
    <>
      <WidgetModal steps={steps} />
    </>
  )
}

export default App

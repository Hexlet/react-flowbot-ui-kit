import { AppProps } from '../interfaces/Step';
import WidgetModal from './WidgetModal';


const App = ({ steps }: AppProps): JSX.Element => {
  return (
    <>
      <WidgetModal steps={steps} />
    </>
  )
}

export default App

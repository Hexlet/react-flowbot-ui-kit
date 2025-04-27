import { AppProps } from '../interfaces/Step'
import WidgetModal from './WidgetModal'
import '../scss/styles.scss'

const App = ({ steps }: AppProps): React.JSX.Element => {
  return (
    <>
      <WidgetModal steps={steps} />
    </>
  )
}

export default App

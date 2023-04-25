import { compose } from 'ramda'
import App from './App'
import { withAntDesign } from './antd/withAntDesign'

export default compose(withAntDesign)(App)

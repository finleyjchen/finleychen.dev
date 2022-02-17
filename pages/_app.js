import '../styles/globals.scss'
import { StoreProvider } from '../context/store'
function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default App

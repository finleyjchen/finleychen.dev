import Header from "./header"
import Footer from "./footer"
const Layout = ({ meta, children }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
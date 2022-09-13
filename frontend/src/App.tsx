import NotificationButton from "./compents/NotificationButton"
import Header from "./compents/Header"
import SalesCard from "./compents/SalesCard"

function App() {
  return(
    <>
    <Header/>
    <main>
        <section id="sales">
            <div className="dsmeta-container">
              <SalesCard/>
            </div>
        </section>
    </main>
    </>
  )
} 

export default App

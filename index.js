

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function Temp() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Temp/>, document.querySelector('#root'))
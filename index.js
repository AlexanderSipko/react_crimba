


function Header() {
    return (
        <header>
            <nav className='nav-line'>
                <img className='nav-img' src='test-image.png'></img>
                <ul className='nave-items'>
                    <li>Practing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <content>
            <h1>Hello</h1>
            <ul>
                <li>components</li>
                <li>what i really want</li>
                <li>i want write a code and create intrasting app</li>
            </ul>
        </content>
    )
}

function Footer() {
    // wrote the bottom 
    return (
        <footer>
            <smal>@2022 Ziroll development. All rights reserved</smal>
        </footer>
    )
}

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
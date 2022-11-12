


function Header() {
    return (
        <header>
            <nav>
                <img src='test-image.png' width='50px'></img>
            </nav>
        </header>
    )
}

function Content() {
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
            <Content />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Temp/>, document.querySelector('#root'))
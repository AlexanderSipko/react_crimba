
/*
9. Build a react info site
    Goodby, CDNs
*/

// import React from "react"
// import ReactDOM from "react-dom"

const page = (
   <div>
       <h1>My awesome website in React</h1>
       <h3>Reason i love React</h3>
       <ol>
           <li>It's composable</li>
           <li>It's declarative</li>
           <li>It's a hareableskill</li>
           <li>It's actively maintained by skilled people</li>
       </ol>
   </div>
)

ReactDOM.render(page, document.querySelector('#root'))
// document.querySelector('#root').append(JSON.stringify(page))

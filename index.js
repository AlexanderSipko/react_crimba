
/* 
    - Create a new h1 lement
    - Give it some textContnetn
    - Giv it a class name of "header"
    - append it as child of the div#root  
*/

// const h1 = document.createElement('h1')
// h1.textContent = 'Some text there'
// h1.classList.add('header')
// document.querySelector('#root').append(h1)

const element = (
    <div>
        <h1>Hi everyone</h1>
        <h1 className='header'>I was created React</h1>  
        <p><a href="https://www.youtube.com/watch?v=bMknfKXIFA8">
            stopping time 38 "Build a React info site Goodbye, CDNs!"</a></p>
    </div>
)


ReactDOM.render(element, document.querySelector('#root'))
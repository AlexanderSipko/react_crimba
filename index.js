

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


ReactDOM.render(<h1 className='header'>I was created React</h1>, document.querySelector('#root'))
import React from 'react'

const Services = () => {
  return (
    <div >

      <nav className='navbar navbar-dark' style={{ backgroundColor: 'GrayText' }}>
        <h1 >Learn Bootstrap Today!</h1>
        <div >
          <a href="https://twitter.com/akhanrade">Twitter</a>
          <a href="https://youtube.com/khanradcoder">Youtube</a>
          <a href="https://github.com/KhanradCoder">Github</a>
        </div>
      </nav>

      <h2>Why should I learn Bootstrap?</h2>
      <ol>
        <li>It's easy</li>
        <li>You can create beautiful websites</li>
        <li>Only the cool kids do it!</li>
      </ol>

      <h3>Take <a href="https://www.udemy.com/user/adamkhanradeubanks/">the course now</a></h3>
      <h3>Tons of <a href="http://v4-alpha.getbootstrap.com/components">new features</a> in bootstrap 4</h3>

      <p>The following form does absolutely nothing:</p>
      <form>
        Email:
        <input type="text" placeholder='enter your email here' />
        <button>Sign Up</button>
      </form>

      <p>Find Me:</p>
    </div>
  )
}

export default Services
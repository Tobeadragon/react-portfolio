import './Contact.css'

const Contact = () => {
    return(
      <div className='Contact'>
          <main>
          <h1>
              My Contact
          </h1>
          <form action="">
            <input type="text" name='lastname' id='ln' required placeholder='Last Name'/>
          </form>
          </main>
      </div>
    )
  }
  export default Contact
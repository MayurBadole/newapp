import React from 'react'

function Contact() {
  return (
    <div className='contact'>
       <main>
        <h1>Contact me </h1>
        <form>
            <div>
                <label> Name </label>
                <input type="text" required placeholer ="abc"/>
            </div>

            <div>
                <label> Email </label>
                <input type="text" required placeholer ="abc"/>
            </div>

            <div>
                <label> Name </label>
                <input type="email" required placeholer ="Abc@gmail.cpm"/>
            </div>

            <div>
                <label> Message </label>
                <input type="text" required placeholer ="Tell us about your query..."/>
            </div>

            <button type="submit" > Send</button>
        </form>
       </main> 
    </div>
  )
}

export default Contact
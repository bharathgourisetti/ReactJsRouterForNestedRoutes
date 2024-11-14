import React from 'react'

const Contactform = () => {
    return (
        <div>
            <form class="contactForm">
                <input type='email' placeholder='Email'></input>
                <input type="number" placeholder="Phone"></input>
                <textarea placeholder="Address" ></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contactform
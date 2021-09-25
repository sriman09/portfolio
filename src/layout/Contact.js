import React, {useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        if(name === '' && email === '' && message === ''){
            alert('Please Enter all the fields')
        }else{
            emailjs.send('service_olu1cxg', 'template_g1xp0ss',{
                name: `${name}`,
                message: `${message}`,
                reply_to: `${email}`,
                },"user_BAfQCPYEdHmUaKBeGRO1y")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert('Message Sent!')
        }
        setMessage('')
        setEmail('')
        setName('')
    }
    return(
        <section>
            <div className="container px-20 py-9 mx-auto" id="contact">
                <h1 className="lg:w-2/3 sm:text-5xl lg:text-5xl text-5xl font-medium title-font mb-4 text-White text-left text-red-500">Connect with me</h1>
                <div className="lg:w-1/12 w-20 bg-red-500 h-2"></div>
                <div className="flex flex-col lg:w-7/12 sm:w-full pt-12">
                <div className="py-5">
                        <input 
                            className="w-full py-3 px-3 bg-gray-700 text-white text-2xl" 
                            type='text' 
                            placeholder='Name'
                            value={name}
                            onChange={handleName}
                            required
                        />
                    </div>
                    <div className="py-5">
                        <input 
                            className="w-full py-3 px-3 bg-gray-700 text-white text-2xl" 
                            type='email' 
                            placeholder='Email'
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                    </div>
                    <div className="py-5">
                        <input className="bg-gray-700 py-3 px-3 w-full text-white text-2xl" 
                            type='text'
                            placeholder='Message'
                            value={message}
                            onChange={handleMessage}
                            required 
                        />
                    </div>
                    <div className="py-9 flex justify-end">
                        <button 
                            className="text-white bg-red-500 hover:bg-red-600 px-10 py-2 text-xl shadow-lg flex"
                            onClick={handleSubmit}   
                        > 
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
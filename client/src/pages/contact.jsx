import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all fields')
            return
        }

        console.log('Form submitted:', formData)
        toast.success('Message sent successfully!')
        
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className='py-16 flex flex-col items-center mb-12 min-h-screen'>
            <div className='flex flex-col items-center w-max mb-8'>
                <p className='text-2xl font-medium uppercase'>Contact Us</p>
                <div className='w-16 h-0.5 bg-primary rounded-full mt-2'></div>
            </div>

            <div className='w-full max-w-2xl bg-white p-8 rounded-lg shadow-md border'>
                <p className='text-gray-600 mb-6 text-center'>
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium mb-2'>
                            Full Name
                        </label>
                        <input 
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            placeholder='John Doe'
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium mb-2'>
                            Email Address
                        </label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            placeholder='john@example.com'
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='message' className='block text-sm font-medium mb-2'>
                            Message
                        </label>
                        <textarea 
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            rows='6'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none'
                            placeholder='Type your message here...'
                        ></textarea>
                    </div>
                    
                    <button 
                        type='submit'
                        className='w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium'
                    >
                        Send Message
                    </button>
                </form>

                <div className='mt-8 pt-8 border-t text-center'>
                    <p className='text-sm text-gray-600'>
                        Or reach us directly at:{' '}
                        <a href='mailto:support@greencart.com' className='text-primary hover:underline'>
                            support@greencart.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Enter your web3 froms access key below
    formData.append("access_key", "1016962b-e248-4075-a848-25fe1fe8e832");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
      // <div className="min-h-screen bg-blue-50 flex justify-center items-center">
    <motion.div
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center text-gray-700 mb-2 text-lg font-grosky'>
      Connect with me</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-grosky font-semibold'>
      Get in touch</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center text-gray-700 max-w-2xl mx-auto mt-5 mb-12 font-grosky'>
      I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

      <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

            <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[1px] border-blue-200 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>

            <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[1px] border-blue-200 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>

        </div>
        <motion.textarea 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        rows='6' placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[1px] border-blue-200 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>

        <motion.button
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between shadow-2xl gap-2 bg-blue-600 text-white rounded-full mx-auto transition-transform duration-300 hover:scale-110'
        >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
      // </div>
  )
}

export default Contact

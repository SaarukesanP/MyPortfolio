import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Enter your web3 forms access key below
        formData.append("access_key", "1016962b-e248-4075-a848-25fe1fe8e832");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
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
        <div id="contact" className="w-full px-[12%] scroll-mt-24 bg-no-repeat bg-center bg-[length:90%_auto] mb-12">
            {/* Heading */}
            <h4 className="text-base text-gray-600 text-center max-w-2xl mx-auto animate-fade-in font-grosky mb-2">
                Connect with me
            </h4>

            <h2 className="text-center text-4xl font-light tracking-tight text-blue-950 font-grosky">
                Get in touch
            </h2>

            <p className="text-base text-gray-600 text-center max-w-2xl mx-auto animate-fade-in font-grosky mt-2 mb-8">
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            {/* Form */}
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="flex-1 p-3 outline-none border-[1px] border-blue-200 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
                        name="name"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 p-3 outline-none border-[1px] border-blue-200 rounded-md bg-white"
                        name="email"
                    />
                </div>

                {/* Message Textarea */}
                <textarea
                    rows="6"
                    placeholder="Enter your message"
                    required
                    className="w-full p-4 outline-none border-[1px] border-blue-200 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
                    name="message"
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="py-3 px-8 w-max flex items-center justify-between shadow-xl shadow-blue-600/20 gap-2 bg-blue-600 text-white rounded-full mx-auto transition-transform duration-300 hover:scale-110"
                >
                    Submit now <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </button>

                {/* Result Message */}
                <p className="text-center">{result}</p>
            </form>
        </div>
    );
};

export default Contact;
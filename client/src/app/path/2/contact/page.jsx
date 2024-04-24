"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function Contact() {
    const [state, handleSubmit] = useForm("xwkganlp");

    if (state.succeeded) {
        alert("Email sent successfully");
    }

    return (
        <>
            <div className="fixed top-0 right-0 z-10 flex justify-between">
                <Link href="/path/2" className="fixed top-5 text-sm sm:text-4xl left-12">
                    <FaArrowLeft />
                </Link>
            </div>
            <form 
                onSubmit={handleSubmit}
                className='fixed top-12 bottom-12 right-12 left-12 border-solid border-2 border-gray-300 flex flex-col justify-evenly z-1 rounded-3xl'
            >
                <div>
                    <Image 
                        src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png"
                        alt="Email icon"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Return address'
                />
                <div className="g-recaptcha" data-sitekey="kg oqiwugnuigrksgc grw ir"></div>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500"
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='message'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500"
                />
                <input
                    type="submit"
                    disabled={state.submitting}
                    title="Send"
                />
            </form>
        </>    
    );
}

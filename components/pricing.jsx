import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Pricing = () => {
    return (
        <section className='py-20' id='pricing'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold  mb-6">
                        Simple{" "}
                        <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                            Pricing

                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 ">
                        Start free and upgrade as you grow. Our flexible pricing plans are designed to fit your needs, whether you're just getting started or scaling up your creative projects.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Pricing
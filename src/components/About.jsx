import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Education Card */}
        <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>Education</h3>
          <ul className='space-y-3 text-gray-600'>
            <li>
              <p className='font-medium'>Bachelor of Technology</p>
              <p className='text-sm'>Computer Science & Engineering</p>
              <p className='text-sm text-gray-500'>2023 -2027</p>
            </li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>Experience</h3>
          <ul className='space-y-3 text-gray-600'>
            <li>
             
            </li>
          </ul>
        </div>

        {/* Skills Card */}
        <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>Skills</h3>
          <div className='flex flex-wrap gap-2'>
            {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS' , 'c++' , 'c' ].map((skill) => (
              <span 
                key={skill}
                className='px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests Card */}
        <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>Interests</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Machine Learning</li>
            <li>Open Source</li>
          </ul>
        </div>

        {/* Contact Card */}
       
      </div>
    </div>
  )
}

export default About
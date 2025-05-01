import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "c", level: 85 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "GitHub", level: 85 }
      ]
    }
  ]

  return (
    <div className='container mx-auto px-4 py-16'>
      <h2 className='text-4xl font-bold text-center mb-12'>Skills</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {skillCategories.map((category, index) => (
          <div key={index} className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <h3 className='text-2xl font-semibold mb-6 text-gray-800'>{category.category}</h3>
            <div className='space-y-4'>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-700'>{skill.name}</span>
                    <span className='text-sm text-gray-500'>{skill.level}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div 
                      className='bg-gray-800 h-2 rounded-full transition-all duration-500 ease-out'
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects')
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white relative">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Krish Desai</h1>
            <h2 className="text-2xl mb-6">Flutter Developer</h2>
            <p className="text-xl mb-8">Building engaging, user-centric mobile experiences with Flutter and Firebase</p>
            
            <div className="flex space-x-4 mb-12">
              <a href="https://github.com/iamkrishdesai" className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/iamkrishdesai" className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="mailto:your.email@example.com" className="flex items-center hover:text-blue-200">
                <Mail className="w-4 h-4 mr-2" />
                your.email@example.com
              </a>
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (+91) 8200236545
              </span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('content')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Main Content */}
      <div id="content" className="container mx-auto px-6 py-16">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-12">
          {['projects', 'skills', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Section */}
        <div className={`space-y-8 ${activeTab === 'projects' ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Reader App"
              description="A feature-rich reader app for saving articles and highlights"
              features={[
                "Home Widget for quick access to highlights",
                "Social media sharing with custom snapshot feature",
                "Offline reading capability"
              ]}
              tags={["Flutter", "Firebase", "SharedPreferences"]}
            />
            
            <ProjectCard
              title="To-Do App"
              description="A clean and efficient task management application"
              features={[
                "Local data persistence using SharedPreferences",
                "Clean and intuitive UI",
                "Task categorization and priority setting"
              ]}
              tags={["Flutter", "SharedPreferences", "UI Design"]}
            />

            <ProjectCard
              title="Weather App"
              description="Real-time weather information application"
              features={[
                "API integration for live weather data",
                "Custom UI components",
                "Location-based weather updates"
              ]}
              tags={["Flutter", "REST API", "UI Design"]}
            />

            <ProjectCard
              title="UI Design Clones"
              description="High-fidelity clones of popular app interfaces"
              features={[
                "Pixel-perfect recreations",
                "Focus on visual consistency",
                "Attention to micro-interactions"
              ]}
              tags={["Figma", "UI/UX", "Design Systems"]}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className={`${activeTab === 'skills' ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard
              title="Development"
              skills={[
                "Dart",
                "Flutter",
                "JavaScript",
                "Firebase",
                "REST APIs",
                "Git"
              ]}
            />
            
            <SkillCard
              title="Tools"
              skills={[
                "Android Studio",
                "VS Code",
                "Figma",
                "Git",
                "Firebase Console"
              ]}
            />
            
            <SkillCard
              title="Design"
              skills={[
                "UI Design",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Design Systems"
              ]}
            />
            
            <SkillCard
              title="Soft Skills"
              skills={[
                "Problem Solving",
                "Attention to Detail",
                "Quick Learning",
                "Team Collaboration",
                "Project Management"
              ]}
            />
          </div>
        </div>

        {/* About Section */}
        <div className={`${activeTab === 'about' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-600 mb-6">
              Curious and detail-oriented, I approach both design and coding with a focus on precision and quality. 
              I enjoy getting into the intricacies of projects, ensuring that each element feels purposeful. 
              Currently expanding my skills through the TCP INDIA bootcamp, I'm passionate about creating 
              impactful mobile experiences that users love.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Education</h4>
              <div className="space-y-2">
                <p className="text-gray-600">• TCP India Bootcamp – Flutter Development</p>
                <p className="text-gray-600">• JavaScript Course – DOM Manipulation & Web Development</p>
              </div>
              
              <h4 className="text-xl font-medium mt-6">Interests</h4>
              <p className="text-gray-600">
                Outside of coding, I'm an avid reader and am currently learning to play the piano. 
                I believe in continuous learning and regularly explore new technologies and design trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ title, description, features, tags }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 text-sm">• {feature}</li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const SkillCard = ({ title, skills }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default Portfolio

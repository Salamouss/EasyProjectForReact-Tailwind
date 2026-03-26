import React from 'react'
const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

function HeroSection() {
  return (
    <section id='home' className='app-container  pt-24 pb-12 overflow-hidden sm:overflow-visible'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            <span className="gradient-text">Artificiel intelligence</span>
            <br />
            <span className='text-[#e54d9e]'>For a smarter future</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-lg pt-2'>
            Artificial intelligence (AI) is a branch of computer science focused on creating machines that can mimic human intelligence, such as learning and problem-solving.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <a href="#" className='btn-primary'>Explore AI solutions </a>
            <a href="#" className='btn-outline'>Learn More</a>
          </div>       
          <div className="pt-4 flex items-center space-x-4">
            <div className='flex -space-x-2'>
              {images.map((img,i) => (
                <img 
                key={i}
                className='avatar'
                src={img}
                alt={`User ${i+1}`} />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by {" "}
            <span className='font-bold text-primary'> 5,000 </span> People worldwide
            </p>
          </div>
            

          
        </div>

        {/* right content */}
        <div className=" relative w-full h-80 md:h-150">
              <img src="https://images.unsplash.com/photo-1734597949889-f8e2ec87c8ea?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className='w-full h-full object-cover rounded-2xl'
              alt="hero section" />
              <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
              <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>    

      </div>
    </section>
    
    
    
  )
}

export default HeroSection

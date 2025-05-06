const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-200 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Jeanette - Virtual Assistant"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              About <span className="text-primary-500">Me</span>
            </h2>
            
            <p className="text-neutral-700 mb-4 leading-relaxed">
              Hello! I'm Jeanette, a dedicated virtual assistant with over 5 years of experience supporting entrepreneurs, small businesses, and busy professionals.
            </p>
            
            <p className="text-neutral-700 mb-6 leading-relaxed">
              I specialize in administrative support, email management, scheduling, and research - allowing you to focus on growing your business and doing what you love.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-medium text-neutral-900">Organized</h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Meticulous attention to detail and excellent organizational skills
                </p>
              </div>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-medium text-neutral-900">Tech-Savvy</h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Proficient with modern tools and software to streamline your workflow
                </p>
              </div>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-medium text-neutral-900">Reliable</h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Consistent, dependable support you can count on
                </p>
              </div>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-medium text-neutral-900">Proactive</h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  Anticipating needs and solving problems before they arise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

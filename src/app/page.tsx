import Link from "next/link";

// Add this component definition at the top of the file, after the imports
const MissionBox = () => (
  <div className="bg-black bg-opacity-40 backdrop-blur-sm p-6 sm:p-8 rounded-lg text-white">
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
      Our Mission
    </h3>
    
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>More natural, regeneratively grown food to more people.</li>
      <li>More independence for farmers.</li>
      <li>Less than a day to set up.</li>
    </ul>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 px-8 py-6 flex justify-between items-center text-white">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sprout-icon lucide-sprout"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
            <span className="font-semibold text-xl">LittleFarma</span>
          </div>
          
          {/* Contact info */}
          <div className="text-sm mr-8 hidden md:block">
            <div></div>
            <div className="text-xs">rob@littlefarma.io</div>
          </div>
        </div>
        
        {/* Main Navigation
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-green-200">Home</Link>
          <Link href="/marketplace" className="text-white hover:text-green-200">Marketplace</Link>
          <Link href="/blog" className="text-white hover:text-green-200">Blog</Link>
          <Link href="/community" className="text-white hover:text-green-200">Community</Link>
        </nav> */}
        
        {/* Auth Buttons */}
        {/* <div className="flex items-center space-x-4">
          <Link href="/signup" className="text-white hover:text-green-200">Sign Up</Link>
          <Link href="/login" className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full flex items-center">
            <span className="mr-1">•</span> Log in
          </Link>
        </div> */}
      </header>
      
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/little-farma-hero-v2.webp')` }}>
          <div className="absolute inset-0 bg-opacity-40"></div>
        </div>
        
        <div className="relative h-full flex items-center pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Hero Left Content */}
              <div className="text-white">
                <div className="inline-block mb-3 sm:mb-4 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-black">Supporting Regenerative Agriculture</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Bringing Greater Independence to Your Farming Journey.
                </h1>
                
                <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
                  Get your product to your loyal customers with minimal setup and greater reach.
                </p>

                <div className="lg:hidden block mb-8">
                  <MissionBox />
                </div>
                
                <Link href="mailto:rob@littlefarma.com" className="inline-flex items-center bg-green-400 hover:bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium">
                  Contact Me
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
              {/* Hero Right Content - Mission Box */}
              <div className="hidden lg:block mb-8">
                <MissionBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex space-x-4 mb-12 overflow-x-auto">
            <Link href="#about" className="px-6 py-3 bg-green-100 rounded-full text-green-800 font-medium">
              About Us
            </Link>
            <Link href="#journey" className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 font-medium hover:bg-gray-200">
              Journey
            </Link>
            <Link href="#vision" className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 font-medium hover:bg-gray-200">
              Vision
            </Link>
            <Link href="#mission" className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 font-medium hover:bg-gray-200">
              Mission
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                Who We Are at Farmora
              </h3>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                With years of expertise in both farming and tech, we're committed to helping farmers grow smarter and achieve better yields. Together, we're shaping the future of farming for a more sustainable world.
              </h2>
              
              <p className="text-gray-600 mb-8">
                By combining innovation with sustainability, we empower farmers to increase productivity, reduce waste, and contribute to a healthier planet. Together, we are shaping the future of farming, ensuring it thrives for generations to come.
              </p>
              
              <Link href="/about" className="inline-block border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full text-gray-700 font-medium">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="bg-gray-100 rounded-xl overflow-hidden relative">
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/images/farmer-1.jpg')` }}></div>
              <div className="p-6 relative">
                <div className="absolute -top-12 right-6 bg-black rounded-full p-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
                
                <h3 className="text-4xl font-bold mb-2">10+</h3>
                <h4 className="text-xl font-semibold mb-4">Years of Agricultural Innovation</h4>
                
                <p className="text-gray-600">
                  With a decade of experience, we've pioneered advancements in precision agriculture, helping farmers increase yields by 30% while reducing water consumption by 25%.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden relative">
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/images/urban-farming.jpg')` }}></div>
              <div className="p-6 relative">
                <div className="absolute -top-12 right-6 bg-black rounded-full p-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-xl overflow-hidden relative">
              <div className="p-6 relative">
                <div className="absolute top-6 right-6 bg-black rounded-full p-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
                
                <h3 className="text-4xl font-bold mb-2">85%</h3>
                <h4 className="text-xl font-semibold mb-4">Customer Satisfaction Rate</h4>
                
                <p className="text-gray-700">
                  With an 85% customer satisfaction rate, our users trust us to deliver valuable tools and support that enable them to work smarter and grow better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

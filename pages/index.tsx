import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>CodeXcape Technologies | Next-Gen Web, App & IT Solutions</title>
        <meta name="description" content="Elevate your business with CodeXcape Technologies. We deliver futuristic web design, mobile app development, and cutting-edge IT solutions." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl font-orbitron">C</div>
            <h1 className="text-2xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">CodeXcape</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 font-roboto group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 font-roboto group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 font-roboto group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 px-4 py-4">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-roboto">About</a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-roboto">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-roboto">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-4363-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold font-orbitron mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-glow">Next-Gen Web, App & IT Solutions</h2>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 font-roboto animate-fadeIn animation-delay-200">Elevate your business with futuristic solutions that redefine digital innovation.</p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-full font-semibold text-lg font-roboto hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 animate-pulse">Launch Your Future</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 animate-fadeIn">
                <h3 className="text-4xl font-bold font-orbitron mb-6 text-blue-400">About Us</h3>
                <p className="text-lg text-gray-300 leading-relaxed font-roboto">
                  CodeXcape Technologies is at the forefront of digital innovation, delivering cutting-edge web design, mobile app development, and IT solutions. We empower businesses to thrive in a tech-driven world with solutions that are as bold as they are effective.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg animate-parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fadeIn animation-delay-200">
              <svg className="w-12 h-12 text-blue-400 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v2m-6-8h6m-3-4v8"></path></svg>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">Web Design & Development</h4>
              <p className="text-gray-300 font-roboto">Futuristic, responsive websites that captivate and convert.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fadeIn animation-delay-400">
              <svg className="w-12 h-12 text-blue-400 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">Mobile App Development</h4>
              <p className="text-gray-300 font-roboto">High-performance apps for iOS and Android with a modern edge.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fadeIn animation-delay-600">
              <svg className="w-12 h-12 text-blue-400 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">UI/UX Design</h4>
              <p className="text-gray-300 font-roboto">Immersive designs that engage and delight users.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fadeIn animation-delay-200">
              <svg className="w-12 h-12 text-blue-400 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">SEO & Digital Marketing</h4>
              <p className="text-gray-300 font-roboto">Amplify your reach with strategic digital solutions.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fadeIn animation-delay-400">
              <svg className="w-12 h-12 text-blue-400 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v18m6-18v18M3 9h18M3 15h18"></path></svg>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">E-commerce Solutions</h4>
              <p className="text-gray-300 font-roboto">Scalable platforms to supercharge your online business.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fadeIn animation-delay-600">
              <svg className="w-12 h-12 text-blue-400 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">Software Development</h4>
              <p className="text-gray-300 font-roboto">Custom solutions to streamline your operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">Our Projects</h3>
          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
            <div className="relative min-w-[300px] snap-center">
              <div className="h-64 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 rounded-lg"></div>
              <div className="absolute bottom-0 p-6">
                <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">Transaction App</h4>
                <p className="text-gray-300 font-roboto">A secure app for seamless financial transactions.</p>
              </div>
            </div>
            <div className="relative min-w-[300px] snap-center">
              <div className="h-64 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 rounded-lg"></div>
              <div className="absolute bottom-0 p-6">
                <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400">Corporate Website</h4>
                <p className="text-gray-300 font-roboto">A futuristic website for a global corporation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">Our Process</h3>
          <div className="relative flex overflow-x-auto snap-x snap-mandatory pb-4">
            <div className="flex space-x-8">
              <div className="min-w-[250px] snap-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold font-orbitron animate-pulse">1</div>
                  <div>
                    <h4 className="text-xl font-semibold font-orbitron text-blue-400">Discovery</h4>
                    <p className="text-gray-300 font-roboto">We analyze your needs and goals.</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[250px] snap-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold font-orbitron animate-pulse">2</div>
                  <div>
                    <h4 className="text-xl font-semibold font-orbitron text-blue-400">Design & Planning</h4>
                    <p className="text-gray-300 font-roboto">We craft a strategic roadmap.</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[250px] snap-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold font-orbitron animate-pulse">3</div>
                  <div>
                    <h4 className="text-xl font-semibold font-orbitron text-blue-400">Development</h4>
                    <p className="text-gray-300 font-roboto">We build with precision.</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[250px] snap-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold font-orbitron animate-pulse">4</div>
                  <div>
                    <h4 className="text-xl font-semibold font-orbitron text-blue-400">Launch & Support</h4>
                    <p className="text-gray-300 font-roboto">We launch and support your project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold font-orbitron mb-4 text-blue-400 animate-glow">500+</div>
              <p className="text-lg font-roboto text-gray-300">Projects Delivered</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold font-orbitron mb-4 text-blue-400 animate-glow animation-delay-200">50+</div>
              <p className="text-lg font-roboto text-gray-300">Expert Team Members</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold font-orbitron mb-4 text-blue-400 animate-glow animation-delay-400">98%</div>
              <p className="text-lg font-roboto text-gray-300">Client Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold font-orbitron mb-4 text-blue-400 animate-glow animation-delay-600">10+</div>
              <p className="text-lg font-roboto text-gray-300">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-rotate-3">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400 text-center">Jane Doe</h4>
              <p className="text-gray-300 mb-2 text-center font-roboto">CEO & Founder</p>
              <p className="text-gray-300 text-center font-roboto">Leading innovation with 15+ years in tech.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-rotate-3">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400 text-center">John Smith</h4>
              <p className="text-gray-300 mb-2 text-center font-roboto">Lead Developer</p>
              <p className="text-gray-300 text-center font-roboto">Crafting scalable tech solutions.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-rotate-3">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h4 className="text-xl font-semibold font-orbitron mb-2 text-blue-400 text-center">Emily Johnson</h4>
              <p className="text-gray-300 mb-2 text-center font-roboto">Head of Design</p>
              <p className="text-gray-300 text-center font-roboto">Designing immersive user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">What Our Clients Say</h3>
          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto snap-x snap-mandatory pb-4">
            <div className="min-w-[300px] snap-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-blue-500 animate-glow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div>
                <p className="text-gray-300 italic mb-4 font-roboto">"CodeXcape redefined our digital presence with a futuristic website. Their team delivered beyond expectations!"</p>
                <p className="text-blue-400 font-semibold font-orbitron">— Sarah Miller, CEO of ShopEasy</p>
              </div>
            </div>
            <div className="min-w-[300px] snap-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-blue-500 animate-glow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div>
                <p className="text-gray-300 italic mb-4 font-roboto">"The app CodeXcape built for us is a masterpiece. Their innovation set us apart in the market."</p>
                <p className="text-blue-400 font-semibold font-orbitron">— Mark Thompson, Founder of TechTrend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold font-orbitron mb-12 text-center text-blue-400 animate-fadeIn">Contact Us</h3>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h4 className="text-2xl font-semibold font-orbitron mb-4 text-blue-400">Get in Touch</h4>
              <p className="flex items-center mb-4 font-roboto">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-gray-300">+254-743-546-677</span>
              </p>
              <p className="flex items-center mb-4 font-roboto">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@codexcape.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">info@codexcape.com</a>
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-gray-700">
                <h4 className="text-2xl font-semibold font-orbitron mb-4 text-blue-400">Send a Message</h4>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full py-3 px-4 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                  <input type="email" placeholder="Your Email" className="w-full py-3 px-4 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                  <textarea placeholder="Your Message" rows={4} className="w-full py-3 px-4 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"></textarea>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-roboto">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl font-orbitron">C</div>
                <h4 className="text-xl font-semibold font-orbitron text-blue-400">CodeXcape</h4>
              </div>
              <p className="text-gray-400 font-roboto">Redefining digital innovation with futuristic solutions.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-orbitron mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-roboto">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-roboto">Services</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-roboto">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-roboto">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-orbitron mb-4 text-blue-400">Newsletter</h4>
              <p className="text-gray-400 mb-4 font-roboto">Stay ahead with our latest updates.</p>
              <div className="flex space-x-2">
                <input type="email" placeholder="Your email" className="w-full py-3 px-4 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 py-3 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300 font-roboto">Subscribe</button>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-orbitron mb-4 text-blue-400">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.67 3.149 4.916 4.916 0 003.19 9.723a4.902 4.902 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.916 4.916 0 004.59 3.415A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.557z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3H4.385A1.385 1.385 0 003 4.385v15.23A1.385 1.385 0 004.385 21h8.308v-6.923H9.692V10.5h3V8.077c0-2.923 1.846-4.538 4.538-4.538.923 0 1.846.077 2.769.154v3.23h-1.846c-1.462 0-1.846.692-1.846 1.692V10.5h3.692l-.461 3.577h-3.231V21h4.154A1.385 1.385 0 0021 19.615V4.385A1.385 1.385 0 0019.615 3z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c5.523 0 10 4.477 10 10 0 5.523-4.477 10-10 10-1.197 0-2.348-.21-3.43-.595l-3.543 1.215a.5.5 0 01-.62-.62l1.215-3.543A9.957 9.957 0 012 12.163c0-5.523 4.477-10 10-10zm0-2.163C5.373 0 0 5.373 0 12c0 2.1.54 4.087 1.49 5.833L0 24l6.167-1.49A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8 font-roboto">© {new Date().getFullYear()} CodeXcape Technologies. All rights reserved.</p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Roboto', sans-serif;
        }
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.5); }
          100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes parallax {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-glow {
          animation: glow 2s infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-parallax {
          animation: parallax 10s ease-in-out infinite alternate;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default Home;
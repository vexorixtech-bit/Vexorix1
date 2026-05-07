import { useState, useEffect } from 'react'
import './index.css'

const services = [
  { icon: '🌐', title: 'Website Development', desc: 'Custom websites built with modern technologies for optimal performance and SEO.' },
  { icon: '🛒', title: 'E-commerce Solutions', desc: 'Full-featured online stores with secure payments and inventory management.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered designs that engage visitors and drive conversions.' },
  { icon: '⚡', title: 'Full-Stack Applications', desc: 'Scalable backend systems with powerful APIs and databases.' },
]

const projects = [
  { id: 1, category: 'Business', title: 'Restaurant Website', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Online reservation-enabled restaurant website designed to improve customer engagement and increase bookings.', demo: 'https://u-me-couple-cafe.vercel.app/' },
  { id: 2, category: 'Healthcare', title: 'Hospital Management System', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'MySQL'], desc: 'Smart hospital management system simplifying appointments, doctor scheduling, and patient communication.', demo: 'https://hospital-system-management.vercel.app/' },
  { id: 3, category: 'E-commerce', title: 'Department Store', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'PostgreSQL'], desc: 'Conversion-focused online store with structured catalog, cart system, and smooth checkout experience.', demo: '#' },
  { id: 4, category: 'Portfolio', title: 'Photography Portfolio', img: 'https://images.unsplash.com/photo-1452587925706-56dedf209dad?w=600&h=400&fit=crop', tech: ['React', 'TypeScript'], desc: 'Visually rich portfolio designed to attract clients and showcase professional photography work.', demo: 'https://vicky-photography.vercel.app/' },
  { id: 5, category: 'Fitness', title: 'Gym & Fitness Website', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'MongoDB'], desc: 'High-conversion fitness website to boost memberships and highlight training programs.', demo: 'https://vikramgym.vercel.app/' },
  { id: 6, category: 'Events', title: 'Event Management', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'MySQL'], desc: 'Complete event booking platform built to generate leads and streamline event management.', demo: 'https://atozevent.netlify.app/' },
  { id: 7, category: 'Real Estate', title: 'Real Estate Website', img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'PostgreSQL'], desc: 'Modern real estate platform for showcasing properties and capturing buyer enquiries.', demo: 'https://real-estate-project-rose-tau.vercel.app/' },
  { id: 8, category: 'Business', title: 'Business Website', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Professional business website designed for new companies to establish a strong online presence, showcase services, and attract potential clients from day one.', demo: '#' },
]

const testimonials = [
  { name: 'Sarah Johnson', company: 'TechStart Inc.', text: 'Vexorix delivered an exceptional website that boosted our conversions by 40%. Their attention to detail is remarkable.', rating: 5 },
  { name: 'Michael Chen', company: 'FoodieHub', text: 'Professional, timely, and creative. Our restaurant platform exceeded all expectations.', rating: 5 },
  { name: 'Emily Davis', company: 'HealthFirst', text: 'The hospital management system transformed our operations. Best investment we made.', rating: 5 },
]

const pricingPlans = [
  { name: 'Basic', price: '$499', features: ['Single Page Website', 'Responsive Design', 'Contact Form', 'Social Links'], popular: false },
  { name: 'Standard', price: '$999', features: ['Multi-page Website', 'CMS Integration', 'E-commerce Ready', 'SEO Optimization', 'Analytics'], popular: true },
  { name: 'Premium', price: '$1,999', features: ['Full-Stack App', 'Custom Features', 'API Development', 'Database Setup', 'Priority Support'], popular: false },
]

function App() {
  const [filter, setFilter] = useState('All')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 })
  const [activeSection, setActiveSection] = useState('home')
  const [formSent, setFormSent] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((scroll / docHeight) * 100)

      const sectionIds = ['home', 'about', 'services', 'portfolio', 'why-choose', 'testimonials', 'pricing', 'contact']
      let currentSection = 'home'

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const offset = window.scrollY + rect.top
          if (scroll >= offset - 200) {
            currentSection = id
          }
        }
      }

      setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const targets = { projects: 7, clients: 20, years: 3 }
    const interval = setInterval(() => {
      setCounters(prev => {
        if (prev.projects >= targets.projects) {
          clearInterval(interval)
          return prev
        }
        return {
          projects: Math.min(prev.projects + 1, targets.projects),
          clients: Math.min(prev.clients + 1, targets.clients),
          years: Math.min(prev.years + 1, targets.years),
        }
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] z-50 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>

      <nav className="fixed top-0 left-0 right-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/vexorix.tech.png" alt="Vexorix Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold gradient-text" style={{fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em'}}>Vexorix.tech</h1>
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" className={`transition-colors text-sm lg:text-base ${activeSection === 'home' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Home</a>
            <a href="#about" className={`transition-colors text-sm lg:text-base ${activeSection === 'about' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>About</a>
            <a href="#services" className={`transition-colors text-sm lg:text-base ${activeSection === 'services' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Services</a>
            <a href="#portfolio" className={`transition-colors text-sm lg:text-base ${activeSection === 'portfolio' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Portfolio</a>
            <a href="#why-choose" className={`transition-colors text-sm lg:text-base ${activeSection === 'why-choose' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Why Us</a>
            <a href="#testimonials" className={`transition-colors text-sm lg:text-base ${activeSection === 'testimonials' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Testimonials</a>
            <a href="#pricing" className={`transition-colors text-sm lg:text-base ${activeSection === 'pricing' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Pricing</a>
            <a href="#contact" className={`transition-colors text-sm lg:text-base ${activeSection === 'contact' ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}>Contact</a>
          </div>
          <button 
            className="md:hidden w-10 h-10 glass rounded-full flex items-center justify-center text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-[#1f1f2e] px-6 py-4">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'home' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'about' ? 'text-[#FFD700]' : 'text-gray-300'}`}>About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'services' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'portfolio' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Portfolio</a>
              <a href="#why-choose" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'why-choose' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Why Us</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'testimonials' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Testimonials</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'pricing' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Pricing</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${activeSection === 'contact' ? 'text-[#FFD700]' : 'text-gray-300'}`}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFE44D]/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFE44D]/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 text-center px-6 animate-slide-up">
          <div className="mb-8 inline-block">
            <img src="/vexorix.tech.png" alt="Vexorix Logo" className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.5)] animate-float" style={{backgroundColor: 'transparent'}} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Build Modern<br />
            <span className="gradient-text">Websites That Convert</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Freelance web development services tailored to grow your business
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#portfolio" className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full font-semibold hover:scale-105 transition-transform">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 glass rounded-full font-semibold hover:scale-105 transition-transform hover:bg-white/10">
              Hire Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 p-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 scroll-mt-20 slide-in-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Vexorix</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            We are a freelance web development agency specializing in building modern, high-converting websites and web applications. With expertise across multiple industries, we deliver tailored digital solutions that help businesses grow their online presence and achieve their goals.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                To empower businesses with cutting-edge web solutions that drive growth, engagement, and success in the digital landscape.
              </p>
              <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2"><span className="text-[#FFD700]">✓</span> Custom website development</li>
                <li className="flex items-center gap-2"><span className="text-[#FFD700]">✓</span> E-commerce solutions</li>
                <li className="flex items-center gap-2"><span className="text-[#FFD700]">✓</span> Full-stack applications</li>
                <li className="flex items-center gap-2"><span className="text-[#FFD700]">✓</span> UI/UX design</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Why Vexorix?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#FFD700] text-xl">🚀</span>
                  <div>
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-gray-400 text-sm">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FFE44D] text-xl">🎨</span>
                  <div>
                    <h4 className="font-semibold">Modern Design</h4>
                    <p className="text-gray-400 text-sm">Pixel-perfect UIs that convert visitors to customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FFD700] text-xl">⚡</span>
                  <div>
                    <h4 className="font-semibold">Scalable Solutions</h4>
                    <p className="text-gray-400 text-sm">Built to grow with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 scroll-mt-20 slide-in-right">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className={`glass rounded-2xl p-6 hover-lift scale-up stagger-${idx + 1}`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-[#12121a] scroll-mt-20 fade-in">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Showcasing our best work across various industries
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {['All', 'Business', 'Healthcare', 'E-commerce', 'Portfolio', 'Fitness', 'Events', 'Real Estate'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full transition-all ${filter === cat ? 'bg-gradient-to-r from-[#FFD700] to-[#FFE44D]' : 'glass hover:bg-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="glass rounded-2xl overflow-hidden hover-lift group">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-xs">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline inline-flex items-center gap-1">Live Demo →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-24 px-6 scroll-mt-20 slide-in-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{counters.projects}+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{counters.clients}+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{counters.years}+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Fast Delivery', 'Modern UI', 'Scalable Backend', 'Client Satisfaction'].map((item, idx) => (
              <div key={idx} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFE44D] flex items-center justify-center text-2xl">✓</div>
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-[#12121a] scroll-mt-20 slide-in-right">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-center mb-16">What our clients say about us</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 scroll-mt-20 fade-in">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-center mb-16">Choose the plan that fits your needs</p>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`glass rounded-2xl p-8 relative ${plan.popular ? 'gradient-border' : ''}`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full text-xs font-semibold">Most Popular</span>}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold gradient-text mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400">
                      <span className="text-[#FFD700]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 rounded-full font-semibold text-center transition-all ${plan.popular ? 'bg-gradient-to-r from-[#FFD700] to-[#FFE44D] hover:scale-105' : 'glass hover:bg-white/10'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-[#12121a] scroll-mt-20 slide-in-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-16">Let's build something amazing together</p>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              {formSent ? (
                <div className="glass rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Message Ready!</h3>
                  <p className="text-gray-400">Your email app will open with the message. Just click send!</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
                  const subject = encodeURIComponent('New Message from ' + name)
                  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)
                  window.location.href = `mailto:vexorix.tech@gmail.com?subject=${subject}&body=${body}`
                  setFormSent(true)
                }}>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input name="name" type="text" required className="w-full px-6 py-4 bg-[#0a0a0f] border border-[#1f1f2e] rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input name="email" type="email" required className="w-full px-6 py-4 bg-[#0a0a0f] border border-[#1f1f2e] rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                    <textarea name="message" required className="w-full px-6 py-4 bg-[#0a0a0f] border border-[#1f1f2e] rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors h-40 resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-xl font-semibold hover:scale-[1.02] transition-transform">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <div className="space-y-4 text-gray-400">
                  <p>📧 vexorix.tech@gmail.com</p>
                  <p>📱 +91 9655058949</p>
                  <p>📍 2/544 Anna Nagar, Chennai - 600002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <footer className="py-12 px-6 border-t border-[#1f1f2e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold gradient-text">Vexorix.tech</h2>
            <p className="text-gray-500 text-sm mt-1">© 2026 Vexorix. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/vexorix.io_?igsh=aHV4cWsxemdwNHMx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/919655058949?text=Hello%20Vexorix.tech%20👋%0A%0AI%20saw%20your%20website%20and%20I'm%20interested%20in%20building%20a%20professional%20solution%20for%20my%20business.%0A%0APlease%20contact%20me%20regarding:%0A•%20Project%20discussion%0A•%20Website%20Development%0A•%20Posters%20%26%20Logo%0A•%20Demo%20availability.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform z-40" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.7zM12 21.4c-1.7 0-3.3-.5-4.9-1.4l-.4-.2-3.5 1 1-3.4-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.7 0-5.8 4.7-10.5 10.5-10.5 2.8 0 5.4 1.1 7.4 3.1 2 2 3.1 4.6 3.1 7.4 0 5.8-4.7 10.5-10.5 10.5zM17.4 14.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.2.2-.4.2-.7.1-.3-.1-1.3-.4-2.5-1.3-.9-.7-1.5-1.6-1.6-1.9-.2-.3 0-.4.1-.5.1-.1.2-.3.4-.1.2-.3.3-.4.1-.1.2-.3.3-.4.1-.2.1-.3 0-.4-.1-.1-.5-1.2-.7-1.6 0-.9.5-2.1-.5-1.9-.5-.9 0-1.7.5-2.6 1-1 2.6-3.9 4.5-6.5 1.5-1.2 2.8-2.9 3-4.8.1-.5.1-1 .1-1.5v-.4c0-.2 0-.4.1-.6 0-.2.2-.4.3-.5.1-.1.1-.2.2-.3.3-.3.2-.1.5-.1h.3c.2 0 .4.1 .6.3.2.2.8.8 1.9 0 1.1.8 2.2 1 2.4.1.2 1.6 2.5 4 3.5 2.4 1 2.4.7 2.8.6 1.2 1 1.8 2.2 2 3.4.5 1.2.8 1.9 1.1 2.9.3 1.2.5 2.2.7 3.4.2 1.2.3 2.5.4 3.8l1.2 1.1z"/></svg>
      </a>
      <a href="tel:+919655058949" className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform z-40" aria-label="Call Us">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  )
}

export default App
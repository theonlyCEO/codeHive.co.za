import React from 'react'
import { Layout, Smartphone, Zap, Shield, RefreshCw, Search } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: 'Custom Web Development',
      description: 'Tailored websites built with React.js, Next.js, and modern frameworks.',
      features: ['Responsive Design', 'Performance Optimized', 'SEO Ready']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'iOS-inspired interfaces that prioritize mobile experience.',
      features: ['Touch Optimized', 'Native Feel', 'Gesture Support']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with optimized loading and smooth animations.',
      features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Secure hosting, regular updates, and ongoing maintenance.',
      features: ['SSL Certificates', 'Regular Backups', 'Security Updates']
    },
    {
      icon: RefreshCw,
      title: 'Continuous Updates',
      description: 'Agile development process with regular updates and enhancements.',
      features: ['Iterative Development', 'User Feedback', 'Feature Updates']
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Optimized for search engines with integrated analytics tracking.',
      features: ['SEO Optimization', 'Analytics Setup', 'Performance Tracking']
    }
  ]

  return (
    // <section id="services" className="section" style={{ backgroundColor: 'var(--color-background)' }}>
    //   <div className="container">
    //     <h2 className="section-title">Our Services</h2>
    //     <p className="section-subtitle">
    //       Comprehensive web solutions that combine beautiful design with powerful functionality
    //     </p>
        
    //     <div style={{
    //       display: 'grid',
    //       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    //       gap: 'var(--spacing-lg)',
    //       marginTop: 'var(--spacing-2xl)'
    //     }}>
    //       {services.map((service, index) => (
    //         <div key={index} className="card">
    //           <div style={{
    //             display: 'inline-flex',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             width: '64px',
    //             height: '64px',
    //             backgroundColor: 'rgba(0, 122, 255, 0.1)',
    //             color: 'var(--color-primary)',
    //             borderRadius: 'var(--radius-lg)',
    //             marginBottom: 'var(--spacing-lg)'
    //           }}>
    //             <service.icon size={32} />
    //           </div>
              
    //           <h3 style={{
    //             fontSize: '24px',
    //             fontWeight: '700',
    //             marginBottom: 'var(--spacing-sm)',
    //             color: 'var(--color-text-primary)'
    //           }}>{service.title}</h3>
              
    //           <p style={{
    //             color: 'var(--color-text-secondary)',
    //             marginBottom: 'var(--spacing-lg)',
    //             lineHeight: '1.6'
    //           }}>{service.description}</p>
              
    //           <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
    //             {service.features.map((feature, idx) => (
    //               <li key={idx} style={{
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 gap: 'var(--spacing-sm)',
    //                 color: 'var(--color-text-secondary)',
    //                 fontSize: '14px',
    //                 marginBottom: 'var(--spacing-xs)'
    //               }}>
    //                 <span style={{
    //                   width: '6px',
    //                   height: '6px',
    //                   backgroundColor: 'var(--color-primary)',
    //                   borderRadius: '50%'
    //                 }}></span>
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
  <div className="container">
    <h2 className="section-title">Our Services</h2>
    <p className="section-subtitle">
      Comprehensive web solutions that combine beautiful design with powerful functionality
    </p>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-2xl)'
    }}>
      {services.map((service, index) => (
        <div key={index} className="card" style={{ 
          backgroundColor: 'var(--color-surface-light)',
          border: '1px solid var(--color-border-light)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
            color: 'var(--color-primary)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            <service.icon size={32} />
          </div>
          
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--color-text-primary)'
          }}>{service.title}</h3>
          
          <p style={{
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.6'
          }}>{service.description}</p>
          
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {service.features.map((feature, idx) => (
              <li key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                color: 'var(--color-text-secondary)',
                fontSize: '14px',
                marginBottom: 'var(--spacing-xs)'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '50%'
                }}></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Services
import React from 'react'
import { MessageSquare, PenTool, Code2, TestTube, Rocket, CheckCircle, ChevronRight } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery',
      description: 'We start by understanding your goals, audience, and requirements through detailed consultations to build the perfect strategy.',
      number: '01'
    },
    {
      icon: PenTool,
      title: 'Design',
      description: 'Creating wireframes and mockups with iOS-inspired design principles that prioritize user experience and visual appeal.',
      number: '02'
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building your website with React.js and modern technologies, ensuring clean code, performance, and scalability.',
      number: '03'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Rigorous testing across all devices and browsers to ensure flawless performance and optimal user experience.',
      number: '04'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploying with proper hosting, security implementations, and performance optimizations for a successful go-live.',
      number: '05'
    },
    {
      icon: CheckCircle,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and dedicated support to ensure your website continues to perform at its best.',
      number: '06'
    }
  ]

  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--color-background)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: 'var(--color-text-primary)',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Our Process
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A structured approach that ensures quality, transparency, and timely delivery
          </p>
        </div>
        
        {/* Desktop Timeline (horizontal) */}
        <div style={{ 
          display: 'none',
          '@media (min-width: 1024px)': {
            display: 'grid'
          },
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '24px',
          position: 'relative',
          marginTop: '40px'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative' }}>
              {/* Step Card */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px 24px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 122, 255, 0.1)',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                {/* Step Number */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-primary), #5856D6)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'rgba(0, 122, 255, 0.08)',
                  color: 'var(--color-primary)',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}>
                  <step.icon size={28} />
                </div>
                
                {/* Title */}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                
                {/* Description */}
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  {step.description}
                </p>
              </div>
              
              {/* Desktop Connector */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-24px',
                  width: '24px',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(0, 122, 255, 0.3), rgba(0, 122, 255, 0.1))',
                  zIndex: 1,
                  transform: 'translateY(-50%)'
                }}>
                  <div style={{
                    position: 'absolute',
                    right: '-4px',
                    top: '-3px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%'
                  }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Timeline (vertical) */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          position: 'relative',
          paddingLeft: '32px',
          '@media (min-width: 1024px)': {
            display: 'none'
          }
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--color-primary) 0%, rgba(0, 122, 255, 0.2) 100%)',
            zIndex: 1
          }}></div>
          
          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative' }}>
              {/* Step Indicator */}
              <div style={{
                position: 'absolute',
                left: '-32px',
                top: '0',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-primary), #5856D6)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: '600',
                zIndex: 2,
                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
              }}>
                {step.number}
              </div>
              
              {/* Step Card */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 122, 255, 0.1)',
                marginLeft: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  {/* Icon */}
                  <div style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(0, 122, 255, 0.08)',
                    color: 'var(--color-primary)',
                    borderRadius: '12px'
                  }}>
                    <step.icon size={24} />
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'var(--color-text-primary)',
                      marginBottom: '8px'
                    }}>
                      {step.title}
                    </h3>
                    
                    <p style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile Progress Arrow */}
                {index < steps.length - 1 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    color: 'var(--color-primary)',
                    opacity: 0.6
                  }}>
                    <ChevronRight size={20} style={{ transform: 'rotate(90deg)' }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tablet Layout (2 columns) */}
        <div style={{ 
          display: 'none',
          '@media (min-width: 768px) and (max-width: 1023px)': {
            display: 'grid'
          },
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginTop: '40px'
        }}>
          {steps.map((step, index) => (
            <div key={index}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px 24px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 122, 255, 0.1)',
                height: '100%'
              }}>
                {/* Step Number and Icon Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary), #5856D6)',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    flexShrink: 0
                  }}>
                    {step.number}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(0, 122, 255, 0.08)',
                    color: 'var(--color-primary)',
                    borderRadius: '12px',
                    flexShrink: 0
                  }}>
                    <step.icon size={24} />
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Summary */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '40px',
          backgroundColor: 'rgba(0, 122, 255, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 122, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '16px'
          }}>
            Why Our Process Works
          </h3>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '17px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our structured workflow ensures every project receives the attention to detail it deserves, 
            resulting in websites that not only look beautiful but perform exceptionally.
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .section {
            padding: 60px 0;
          }
          
          h2 {
            font-size: 32px;
          }
          
          p {
            font-size: 18px;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .container > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}

export default Process
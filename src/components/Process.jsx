import React from 'react'
import { MessageSquare, PenTool, Code2, TestTube, Rocket, CheckCircle } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery',
      description: 'Understanding your goals, audience, and requirements through detailed consultations.',
      number: '01'
    },
    {
      icon: PenTool,
      title: 'Design',
      description: 'Creating wireframes and mockups with iOS-inspired design principles.',
      number: '02'
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building your website with React.js, ensuring clean code and performance.',
      number: '03'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers for flawless performance.',
      number: '04'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploying with proper hosting, security, and performance optimizations.',
      number: '05'
    },
    {
      icon: CheckCircle,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and support for smooth operation.',
      number: '06'
    }
  ]

  return (
    // <section id="process" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
    //   <div className="container">
    //     <h2 className="section-title">Our Process</h2>
    //     <p className="section-subtitle">
    //       A structured approach that ensures quality, transparency, and timely delivery
    //     </p>
        
    //     <div style={{
    //       display: 'grid',
    //       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    //       gap: 'var(--spacing-2xl)',
    //       position: 'relative',
    //       marginTop: 'var(--spacing-3xl)'
    //     }}>
    //       {steps.map((step, index) => (
    //         <div key={index} style={{ position: 'relative' }}>
    //           <div style={{
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //             textAlign: 'center'
    //           }}>
    //             <div style={{
    //               fontSize: '14px',
    //               fontWeight: '700',
    //               color: 'var(--color-primary)',
    //               backgroundColor: 'rgba(0, 122, 255, 0.1)',
    //               width: '32px',
    //               height: '32px',
    //               borderRadius: '50%',
    //               display: 'flex',
    //               alignItems: 'center',
    //               justifyContent: 'center',
    //               marginBottom: 'var(--spacing-lg)',
    //               position: 'relative',
    //               zIndex: 2
    //             }}>
    //               {step.number}
    //             </div>
                
    //             <div className="card" style={{ position: 'relative', zIndex: 2 }}>
    //               <div style={{
    //                 display: 'inline-flex',
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 width: '48px',
    //                 height: '48px',
    //                 backgroundColor: 'rgba(0, 122, 255, 0.1)',
    //                 color: 'var(--color-primary)',
    //                 borderRadius: 'var(--radius-md)',
    //                 marginBottom: 'var(--spacing-lg)'
    //               }}>
    //                 <step.icon size={24} />
    //               </div>
                  
    //               <h3 style={{
    //                 fontSize: '20px',
    //                 fontWeight: '700',
    //                 marginBottom: 'var(--spacing-sm)',
    //                 color: 'var(--color-text-primary)'
    //               }}>{step.title}</h3>
                  
    //               <p style={{
    //                 color: 'var(--color-text-secondary)',
    //                 fontSize: '15px',
    //                 lineHeight: '1.5'
    //               }}>{step.description}</p>
    //             </div>
    //           </div>
              
    //           {/* Connector Line */}
    //           {index < steps.length - 1 && (
    //             <div style={{
    //               position: 'absolute',
    //               top: '16px',
    //               right: '-25%',
    //               width: '50%',
    //               height: '2px',
    //               background: 'linear-gradient(90deg, var(--color-primary), transparent)',
    //               zIndex: 1
    //             }}></div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
        
    //     <style>{`
    //       @media (max-width: 768px) {
    //         section > div > div > div > div > div:last-child {
    //           display: none !important;
    //         }
    //       }
    //     `}</style>
    //   </div>
    // </section>
    <section id="process" className="section" style={{ backgroundColor: 'var(--color-background)' }}>
  <div className="container">
    <h2 className="section-title">Our Process</h2>
    <p className="section-subtitle">
      A structured approach that ensures quality, transparency, and timely delivery
    </p>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-2xl)',
      position: 'relative',
      marginTop: 'var(--spacing-3xl)'
    }}>
      {steps.map((step, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'var(--color-primary)',
              backgroundColor: 'rgba(0, 122, 255, 0.1)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-lg)',
              position: 'relative',
              zIndex: 2
            }}>
              {step.number}
            </div>
            
            <div className="card" style={{ 
              position: 'relative', 
              zIndex: 2,
              backgroundColor: 'var(--color-surface-light)',
              border: '1px solid var(--color-border-light)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                color: 'var(--color-primary)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <step.icon size={24} />
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--color-text-primary)'
              }}>{step.title}</h3>
              
              <p style={{
                color: 'var(--color-text-secondary)',
                fontSize: '15px',
                lineHeight: '1.5'
              }}>{step.description}</p>
            </div>
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '-25%',
              width: '50%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--color-primary), rgba(0, 122, 255, 0.2))',
              zIndex: 1
            }}></div>
          )}
        </div>
      ))}
    </div>
    
    <style>{`
      @media (max-width: 768px) {
        section > div > div > div > div > div:last-child {
          display: none !important;
        }
      }
    `}</style>
  </div>
</section>
  )
}

export default Process
import React from 'react'
import { ArrowRight, Sparkles, Code, Smartphone } from 'lucide-react'

const Hero = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
            color: 'var(--color-primary)',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            borderRadius: 'var(--radius-full)',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <Sparkles size={16} />
            <span>Crafting Digital Excellence</span>
          </div>
          
          {/* Title */}
          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: 'var(--spacing-lg)'
          }}>
            We Build Websites That{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--color-primary), #5856D6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Work Beautifully</span>
          </h1>
          
          {/* Description */}
          <p style={{
            fontSize: '22px',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-2xl)',
            lineHeight: '1.6'
          }}>
            CodeHive specializes in creating clean, intuitive, and high-performing websites 
            using modern technologies. We blend iOS-inspired design principles with 
            cutting-edge development to deliver exceptional digital experiences.
          </p>
          
          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-3xl)',
            flexWrap: 'wrap'
          }}>
            <a href="#contact" className="btn btn-primary">
              Start Your Project
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary">
              View Our Work
            </a>
          </div>
          
          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-3xl)',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              textAlign: 'left'
            }}>
              <div style={{
                color: 'var(--color-primary)',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                padding: 'var(--spacing-sm)',
                borderRadius: 'var(--radius-md)'
              }}>
                <Code size={24} />
              </div>
              <div>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'var(--color-text-primary)'
                }}>150+</div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>Projects Delivered</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              textAlign: 'left'
            }}>
              <div style={{
                color: 'var(--color-primary)',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                padding: 'var(--spacing-sm)',
                borderRadius: 'var(--radius-md)'
              }}>
                <Smartphone size={24} />
              </div>
              <div>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'var(--color-text-primary)'
                }}>100%</div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>Mobile Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
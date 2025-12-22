import React, { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Sparkles, X } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: 'loading', message: 'Sending message...' })

    // Get current timestamp for the email
    const currentTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          time: currentTime,
          form_submitted_at: new Date().toISOString()
        }
      )
      .then(
        () => {
          setIsLoading(false)
          setShowSuccessPopup(true)
          form.current.reset()
          
          setTimeout(() => {
            setShowSuccessPopup(false)
          }, 5000)
        },
        (error) => {
          console.log('Email sending failed:', error.text)
          setStatus({ 
            type: 'error', 
            message: 'Failed to send message. Please try again or email us directly at codehive356@gmail.com.' 
          })
          setIsLoading(false)
        }
      )
  }

  const closePopup = () => {
    setShowSuccessPopup(false)
  }

  return (
    <>
      <section id="contact" className="section" style={{ 
        backgroundColor: 'var(--color-background)',
        paddingTop: '60px',
        paddingBottom: '60px'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px'
          }}>
            {/* Contact Info */}
            <div>
              <h2 className="section-title" style={{ 
                textAlign: 'left',
                fontSize: '36px',
                marginBottom: '20px'
              }}>Get in Touch</h2>
              <p style={{
                fontSize: '18px',
                color: 'var(--color-text-secondary)',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Ready to start your project? Let's discuss how we can help bring your vision to life.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <Mail size={20} color="var(--color-primary)" />
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:codehive356@gmail.com" style={{
                      fontSize: '17px',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)'
                    }}>
                      codehive356@gmail.com
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <Phone size={20} color="var(--color-primary)" />
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', marginBottom: '4px' }}>Phone</div>
                    <a href="tel:+27 81 214 7233" style={{
                      fontSize: '17px',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)'
                    }}>
                      +27 81 214 7233
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <MapPin size={20} color="var(--color-primary)" />
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', marginBottom: '4px' }}>Location</div>
                    <div style={{ fontSize: '17px', color: 'var(--color-text-primary)' }}>Johannesburg, Gauteng SA</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <Clock size={20} color="var(--color-primary)" />
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', marginBottom: '4px' }}>Response Time</div>
                    <div style={{ fontSize: '17px', color: 'var(--color-text-primary)' }}>Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card" style={{ 
              boxShadow: 'var(--shadow-md)',
              backgroundColor: 'var(--color-surface-light)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <form ref={form} onSubmit={handleSubmit} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '24px'
              }}>
                <input type="hidden" name="form_submitted_at" value={new Date().toISOString()} />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    placeholder="John Appleseed"
                    required
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="company" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Company</label>
                  <input
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Apple Inc."
                  />
                </div>
                
                {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="budget" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Project Budget *</label>
                  <select
                    id="budget"
                    name="budget"
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div> */}
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="phone" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    placeholder="+27 81 214 7233"
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="website" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Website/Project URL</label>
                  <input
                   
                    id="website"
                    name="website"
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    placeholder="specify website name"
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-primary)' }}>Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    style={{
                      padding: '16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      backgroundColor: 'white',
                      color: 'var(--color-text-primary)',
                      transition: 'all 0.2s ease',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                {/* Status Message (for errors) */}
                {status.type === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '15px',
                    backgroundColor: 'rgba(255, 59, 48, 0.1)',
                    color: 'var(--color-error)',
                    border: '1px solid rgba(255, 59, 48, 0.2)'
                  }}>
                    <AlertCircle size={20} />
                    {status.message}
                  </div>
                )}
                
                {/* ===========================================
                    SUBMIT BUTTON - VISIBLE AND STYLED
                    =========================================== */}
                <div style={{ 
                  marginTop: '20px',
                  display: 'block !important',
                  visibility: 'visible !important',
                  opacity: '1 !important'
                }}>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      background: 'linear-gradient(135deg, #007AFF, #5856D6)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '18px',
                      fontWeight: '600',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '60px'
                    }}
                  >
                    {/* Animated background effect */}
                    <span style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transform: 'translateX(-100%)',
                      animation: isLoading ? 'shimmer 1.5s infinite' : 'none'
                    }}></span>
                    
                    {isLoading ? (
                      <>
                        <div style={{
                          width: '22px',
                          height: '22px',
                          border: '3px solid rgba(255,255,255,0.3)',
                          borderTopColor: 'white',
                          borderRadius: '50%',
                          animation: 'spin 0.8s linear infinite'
                        }}></div>
                        <span>Sending Your Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={22} />
                        <span>Send Message & Launch Project </span>
                        <Sparkles size={18} />
                      </>
                    )}
                  </button>
                  
                  <p style={{
                    textAlign: 'center',
                    color: '#666',
                    fontSize: '14px',
                    marginTop: '12px',
                    fontStyle: 'italic'
                  }}>
                    Click the button above to submit. We'll respond within 24 hours!
                  </p>
                </div>
                {/* ===========================================
                    END OF SUBMIT BUTTON
                    =========================================== */}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Success Popup */}
      {showSuccessPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            <button 
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#999',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
                transition: 'all 0.2s ease'
              }}
            >
              <X size={24} />
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #34C759, #2ECC71)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <CheckCircle size={48} color="white" />
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#000',
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #007AFF, #5856D6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Message Sent Successfully! 🎉
              </h3>
              
              <p style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                <strong>Thank you so much for reaching out!</strong> We're excited to work with you.
              </p>
              
              <button 
                onClick={closePopup}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #007AFF, #5856D6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Sparkles size={18} />
                Awesome, Let's Continue!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 122, 255, 0.4) !important;
        }
        
        button:active:not(:disabled) {
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}

export default Contact
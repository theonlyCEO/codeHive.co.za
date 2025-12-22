import React from 'react'
import { Globe,Facebook,Instagram, Linkedin, Github, ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--spacing-3xl) 0 var(--spacing-xl)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-3xl)',
          marginBottom: 'var(--spacing-3xl)'
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              <Globe size={28} color="var(--color-primary)" />
              <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-text-primary)' }}>CodeHive</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', lineHeight: '1.6' }}>
              Crafting beautiful, functional websites with iOS-inspired design principles.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <a target='_blank' href="https://www.facebook.com/profile.php?id=61585606888166" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-secondary)',
                borderRadius: '50%',
                transition: 'all var(--transition-fast)',
                textDecoration: 'none'
              }}>
                <Facebook size={20} />
              </a>
              <a target="_blank" href="https://www.instagram.com/webhive_sa/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-secondary)',
                borderRadius: '50%',
                transition: 'all var(--transition-fast)',
                textDecoration: 'none'
              }}>
                <Instagram size={20} />
              </a>
              <a href="#" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-secondary)',
                borderRadius: '50%',
                transition: 'all var(--transition-fast)',
                textDecoration: 'none'
              }}>
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>Services</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Web Development</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>UI/UX Design</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Performance</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>Company</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#process" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Our Process</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#contact" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Contact</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Careers</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>Legal</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Privacy Policy</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Terms of Service</a></li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '15px' }}>Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--spacing-xl)',
          borderTop: '1px solid var(--color-border)'
        }}>
          <div style={{ color: 'var(--color-text-tertiary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            © {new Date().getFullYear()} CodeHive. Made with <Heart size={16} color="var(--color-error)" /> 
          </div>
          
          <button 
            onClick={scrollToTop} 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
      
      {/* Hover effects */}
      <style>{`
        footer a:hover {
          color: var(--color-primary) !important;
        }
        
        footer button:hover {
          background-color: var(--color-primary) !important;
          color: white !important;
          border-color: var(--color-primary) !important;
          transform: translateY(-2px);
        }
        
        @media (min-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 2fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
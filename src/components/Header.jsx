import React, { useState } from 'react'
import { Menu, X, Globe, Smartphone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      backdropFilter: 'blur(20px)',
      // backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--spacing-md) 0'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <Globe size={28} color="var(--color-primary)" />
            <span style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--color-text-primary)'
            }}>CodeHive</span>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--spacing-xl)'
          }}>
            <ul style={{
              display: 'flex',
              gap: 'var(--spacing-xl)',
              listStyle: 'none'
            }}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} style={{
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: '17px',
                    fontWeight: '500',
                    padding: 'var(--spacing-xs) 0',
                    position: 'relative',
                    transition: 'color var(--transition-fast)'
                  }}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              <Smartphone size={20} />
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: 'var(--spacing-xs)'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            padding: 'var(--spacing-md)',
            animation: 'slideDown 0.3s ease'
          }}>
            <ul style={{
              listStyle: 'none',
              marginBottom: 'var(--spacing-md)'
            }}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: 'var(--spacing-md)',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      fontSize: '17px',
                      fontWeight: '500',
                      borderRadius: 'var(--radius-md)',
                      transition: 'background-color var(--transition-fast)'
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Start Project
            </a>
          </div>
        )}
      </div>

      {/* Add animation */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (min-width: 768px) {
          nav > div:nth-child(2) {
            display: flex !important;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
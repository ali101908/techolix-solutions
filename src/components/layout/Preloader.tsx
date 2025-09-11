'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

 function Preloader() {
    const [loading, setLoading] = useState(true)
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [hasVisited, setHasVisited] = useState(false)
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    // Additional effect to ensure proper cleanup after component unmounts
    useEffect(() => {
        const handlePageLoad = () => {
            // Force cleanup of any remaining styles
            setTimeout(() => {
                document.body.style.overflow = ''
                document.body.style.overflowX = ''
                document.documentElement.style.overflowX = ''
            }, 100)
        }

        if (document.readyState === 'complete') {
            handlePageLoad()
        } else {
            window.addEventListener('load', handlePageLoad)
        }

        return () => {
            window.removeEventListener('load', handlePageLoad)
        }
    }, [])

    useEffect(() => {
        // Check if user has visited before (using sessionStorage for first visit detection)
        const visited = sessionStorage.getItem("techolix-visited")
        
        if (visited) {
            setHasVisited(true)
            setLoading(false)
            return
        }

        // Set black background immediately to prevent flash
        document.documentElement.style.backgroundColor = '#000000'
        document.body.style.backgroundColor = '#000000'
        document.body.style.overflow = 'hidden'
        document.body.style.overflowX = 'hidden'
        document.documentElement.style.overflowX = 'hidden'
        
        // Mark as visited
        sessionStorage.setItem("techolix-visited", "true")
        
        const timer = setTimeout(() => {
            setLoading(false)
            // Restore original styles after animation
            setTimeout(() => {
                document.documentElement.style.backgroundColor = ''
                document.body.style.backgroundColor = ''
                document.body.style.overflow = ''
                document.body.style.overflowX = ''
                document.documentElement.style.overflowX = ''
                // Force reflow to prevent layout issues
                document.body.offsetHeight
            }, 1000) // Increased delay to ensure animations complete
        }, 3000) // Extended to 3 seconds for better experience

        return () => {
            clearTimeout(timer)
            document.documentElement.style.backgroundColor = ''
            document.body.style.backgroundColor = ''
            document.body.style.overflow = ''
            document.body.style.overflowX = ''
            document.documentElement.style.overflowX = ''
            // Force reflow
            document.body.offsetHeight
        }
    }, [])

    // Don't show preloader if user has already visited
    if (hasVisited || !loading) {
        // Ensure overflow is reset when preloader is not shown
        if (typeof document !== 'undefined') {
            document.body.style.overflow = ''
            document.body.style.overflowX = ''
            document.documentElement.style.overflowX = ''
        }
        return null
    }

    return (
        <div 
            className={`preloader ${!loading ? 'preloader-hidden' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000000',
                zIndex: 9999,
                overflow: 'hidden'
            }}
        >
            <div className="preloader-curtain preloader-curtain-left"></div>
            <div className="preloader-curtain preloader-curtain-right"></div>
            <div className="preloader-content">
                <div className="preloader-logo">
                    <img 
                        src="/images/logo-light.png" 
                        alt="Techolix Solutions"
                        style={{
                            width: '180px',
                            height: 'auto',
                            maxWidth: '180px',
                            display: 'block',
                            margin: '0 auto',
                            opacity: '0',
                            transition: 'opacity 0.5s ease'
                        }}
                        onLoad={(e) => {
                            (e.target as HTMLImageElement).style.opacity = '1';
                            setLogoLoaded(true);
                        }}
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            setLogoLoaded(true);
                        }}
                    />
                </div>
                <div className="preloader-welcome">
                    <h1>Welcome to</h1>
                    <h2>Techolix Solutions</h2>
                    <p>Digital Innovation Starts Here</p>
                </div>
                <div className="preloader-rocket">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#ff7425"/>
                        <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" fill="#ff4500"/>
                        <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" fill="#ff4500"/>
                    </svg>
                </div>
                <div className="preloader-loading">
                    <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
          overflow: hidden;
        }

        .preloader-hidden {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          overflow-x: hidden !important;
          max-width: 100vw !important;
        }

        .preloader::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 116, 37, 0.1) 0%, transparent 70%);
          z-index: 1;
        }

        .curtain {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #ff7425 0%, #ff4500 50%, #cc3300 100%);
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 10001;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3);
          will-change: transform;
        }

        .curtain::before {
          content: '';
          position: absolute;
          top: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          right: 0;
        }

        .curtain-left {
          left: 0;
          transform-origin: left center;
        }

        .curtain-left::before {
          right: 0;
        }

        .curtain-right {
          right: 0;
          transform-origin: right center;
        }

        .curtain-right::before {
          left: 0;
        }

        .preloader-content {
          position: relative;
          z-index: 10000;
          text-align: center;
          color: white;
        }

        .welcome-text {
          opacity: 0;
          transform: translateY(50px);
          animation: none;
          margin-bottom: 40px;
        }

        .welcome-text h1 {
          font-size: 2.2rem;
          font-weight: 300;
          margin: 0;
          margin-bottom: 10px;
          color: #e0e0e0;
          letter-spacing: 2px;
        }

        .welcome-text h2 {
          font-size: 3.8rem;
          font-weight: 700;
          margin: 0;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #ff7425 0%, #ff4500 50%, #ffaa00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 116, 37, 0.3);
        }

        .welcome-text p {
          font-size: 1.2rem;
          color: #b0b0b0;
          margin: 0;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .rocket-container {
          position: relative;
          margin: 30px auto;
          opacity: 0;
          width: 60px;
          height: 60px;
        }

        .rocket {
          transform: translateY(0) rotate(0deg);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: drop-shadow(0 0 20px rgba(255, 116, 37, 0.5));
        }

        .rocket svg {
          animation: rocketFloat 2s ease-in-out infinite;
        }

        .rocket-trail {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 30px;
          background: linear-gradient(to bottom, #ff7425, #ff4500, transparent);
          border-radius: 3px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
          opacity: 0;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #ff7425;
          border-radius: 50%;
          animation: dotPulse 1.5s infinite ease-in-out;
        }

        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* Animation States */
        .preloader.welcome .welcome-text {
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .preloader.welcome .loading-dots {
          opacity: 1;
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
        }

        .preloader.rocket .rocket-container {
          opacity: 1;
          animation: fadeIn 0.5s ease;
        }

        .preloader.rocket .rocket-trail {
          opacity: 1;
          height: 60px;
          animation: trailGrow 0.5s ease;
        }

        .preloader.rocket .rocket {
          transform: translateY(-120vh) rotate(15deg) scale(0.3);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .preloader.curtain-open .curtain-left {
          transform: translateX(-100%);
        }

        .preloader.curtain-open .curtain-right {
          transform: translateX(100%);
        }

        .preloader.curtain-open .preloader-content {
          opacity: 0;
          transform: scale(0.9) translateY(-20px);
          transition: all 0.8s ease;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes rocketFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes trailGrow {
          from {
            height: 0px;
            opacity: 0;
          }
          to {
            height: 60px;
            opacity: 1;
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .welcome-text h1 {
            font-size: 1.8rem;
          }
          
          .welcome-text h2 {
            font-size: 2.5rem;
          }
          
          .rocket {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .welcome-text h1 {
            font-size: 1.4rem;
          }
          
          .welcome-text h2 {
            font-size: 2rem;
          }
          
          .rocket {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

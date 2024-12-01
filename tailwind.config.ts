import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 5s ease-in-out",
        slideUp: "slideUp 5s ease-in-out",
        zoomIn: "zoomIn 5s ease-in-out",
        rotateIn: "rotateIn 5s ease-in-out",
        bounceIn: "bounceIn 5s ease-in-out",
        slideFromRight: "slideFromRight 5s ease-out",
        slideFromLeft: "slideFromLeft 5s ease-out",
        scaleUp: "scaleUp 5s ease-out",
        blurIn: "blurIn 5s ease-out",
        shimmerIn: "shimmerIn 5s ease-in-out",
        perspectiveRotate: "perspectiveRotate 5s ease-out",
        wavyIn: "wavyIn 5s ease-in-out",
        staggeredSlideUp: "staggeredSlideUp 1s ease-out",
        glitchReveal: "glitchReveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        morphIn: "morphIn 2s ease-in-out",
        randomScatter: "randomScatter 1.5s ease-out",
        revealBorder: "revealBorder 1.5s ease-in-out",
        textReveal: "textReveal 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-180deg)", opacity: "0" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blurIn: {
          "0%": { filter: "blur(120px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        shimmerIn: {
          "0%": { 
            transform: "skewX(-12deg) translateX(-100%)", 
            opacity: "0" 
          },
          "50%": { 
            transform: "skewX(12deg) translateX(50%)", 
            opacity: "0.5" 
          },
          "100%": { 
            transform: "skewX(0) translateX(0)", 
            opacity: "1" 
          }
        },
        perspectiveRotate: {
          "0%": { 
            transform: "perspective(500px) rotateY(90deg)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "perspective(500px) rotateY(0)", 
            opacity: "1" 
          }
        },
        wavyIn: {
          "0%": { 
            transform: "translateY(50px) rotate(-5deg)", 
            opacity: "0" 
          },
          "50%": { 
            transform: "translateY(-10px) rotate(3deg)", 
            opacity: "0.5" 
          },
          "100%": { 
            transform: "translateY(0) rotate(0)", 
            opacity: "1" 
          }
        },
        staggeredSlideUp: {
          "0%": { 
            transform: "translateY(50px)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "translateY(0)", 
            opacity: "1" 
          }
        },
        glitchReveal: {
          "0%, 100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" 
          },
          "50%": { 
            clipPath: "polygon(0 10%, 100% 0, 90% 100%, 0% 90%)" 
          }
        },
        morphIn: {
          "0%": { 
            transform: "scale(0.5) rotate(-45deg)", 
            borderRadius: "50%",
            opacity: "0" 
          },
          "50%": { 
            transform: "scale(1.2) rotate(15deg)", 
            opacity: "0.5" 
          },
          "100%": { 
            transform: "scale(1) rotate(0deg)", 
            borderRadius: "0%",
            opacity: "1" 
          }
        },
        randomScatter: {
          "0%": { 
            transform: "translate(-100px, 100px) rotate(45deg)", 
            opacity: "0" 
          },
          "50%": { 
            transform: "translate(50px, -50px) rotate(-20deg)", 
            opacity: "0.5" 
          },
          "100%": { 
            transform: "translate(0) rotate(0)", 
            opacity: "1" 
          }
        },
        revealBorder: {
          "0%": { 
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" 
          },
          "100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" 
          }
        },
        textReveal: {
          "0%": { 
            clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" 
          },
          "100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" 
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Ensure this line is present
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    flowbite.content()
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        'xs': '400px',  // Custom smaller breakpoint for 200px
        'sm': '480px', // Small breakpoint
        'md': '768px',  // Medium breakpoint
        'lg': '1024px', // Large breakpoint
        'xl': '1280px', // Extra large breakpoint
        '1xl':'1340px', // Extra large breakpoint
        '2xl': '1440px', // Custom 2xl breakpoint
        '3xl': '1880px', // Custom 3xl breakpoint
      },
    },
    extend: {
      fontSize: {
        'semi-lg': '1rem', // 17px = 17/16 rem
      },
      colors: {
        cream: {
          DEFAULT: '#FFFDD0', // Typical cream color
          light: '#FFF9C4',   // Lighter cream
          lighter: '#FFFDE6', // Even lighter cream, closer to white
          lightest: '#FFFEF0', // Very light cream, almost white
          dark: '#FDF5D0',    // Darker cream
          darker: '#FAF3E0',  // Slightly darker cream
          darkest: '#F7F7EF', // Very close to white, but with a cream tint
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        custom: "1px 1px 20px gray",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Custom keyframes for slide-in animations
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Custom animations
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      backgroundColor: ["dark"], // Ensure background color variants include dark mode
    },
  },
  plugins: [require("tailwindcss-animate"),
  flowbite.plugin(),],
  
};

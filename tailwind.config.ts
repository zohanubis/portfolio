import type { Config } from 'tailwindcss'

export default {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#ffffff',
        darkHover: '#292A2D',
        hologram: { 
          100: '#A2D2FF',  // Ánh kim xanh nhạt
          200: '#3B82F6',  // Xanh lam neon
          300: '#7A4D9C',  // Tím gradient
          400: '#0D0D0D',  // Đen huyền bí
          500: '#1A1A1A',  // Xám đậm (Dưới cùng)
        },
        lightTheme: {
          100: '#DFF2EB',  // Màu sáng 1
          200: '#B9E5E8',  // Màu sáng 2
          300: '#7AB2D3',  // Màu sáng 3
          400: '#4A628A',  // Màu sáng 4
        },
        darkTheme: {
          100: '#201E43',  // Màu tối 1
          200: '#134B70',  // Màu tối 2
          300: '#508C9B',  // Màu tối 3
          400: '#EEEEEE',  // Màu tối 4
        },
      },
      backgroundImage: {
        'light-theme': 'linear-gradient(180deg, #DFF2EB, #B9E5E8, #7AB2D3, #4A628A)', // Gradient cho lightTheme
        'dark-theme': 'linear-gradient(180deg, #201E43, #134B70, #508C9B, #B9E5E8, #201E43)', // Gradient cho darkTheme
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'sans-serif'],
      },
      boxShadow: {
        black: '4px 4px 0px #000',
        white: '4px 4px 0px #fff',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  darkMode: 'class', // Đảm bảo dark mode hoạt động theo class
  plugins: [],
} satisfies Config

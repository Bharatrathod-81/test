/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'bg-left':'#d9d9d9',
      'dark-green':'#115E59',
      'light-green':'#86EFAC',
      'light-green-bg':'#F0FDF4',
      'light-green-100':'#F0FDF4',
      'light-green-200':'#86EFAC',
      'gray':'#6B7280',
      'gray-100':'#E5E7EB',
      'gray-200':'#9CA3AF',
      'gray-300':'#4B5563',
      'gray-400':'#374151',
      'gray-500':'#F3F4F6',
      'warning':'#F59E0B',
      'warning-100':'#FEFCE8',
      'warning-200':'#FDE68A',
      'warning-300':'#F87171',
      'warning-400':'#FEF9C3',
      'warning-500':'#A16207',
      'danger-100':'#FECACA',
      'danger-200':'#FEE2E2',
      'dark-blue':'#2563EB',
      'light-blue':'#DBEAFE',
    },
    container: {
      center: true,
      DEFAULT: '1rem',
      'max-width':'100%',
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    lineHeight: {
      'unset': '0rem',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ] 
}
}

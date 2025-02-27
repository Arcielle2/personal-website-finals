import { motion } from 'framer-motion';
import '@/assets/styles.css'; // Add a linked CSS file for styling

export default function TangledHome() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-purple-900 to-yellow-300 overflow-hidden">
      {/* Floating Lanterns */}
      <motion.div 
        className="absolute w-16 h-16 bg-yellow-300 rounded-full opacity-70"
        animate={{ y: [-20, -200], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeOut" }}
        style={{ top: '80%', left: '50%' }}
      />
      
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold tracking-wide drop-shadow-lg">Welcome to My Fairytale</h1>
        <p className="text-lg mt-3 max-w-lg italic">"Venture beyond the tower and explore my world of creativity and code!"</p>
        <motion.button 
          className="mt-5 px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >Enter My World</motion.button>
      </div>
    </div>
  );
}

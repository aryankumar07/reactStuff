import { Search, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const SimpleKanbanNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your theme switching logic here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full">
      {/* Left side - Logo and menu icon */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Your Board</span>
      </div>

      {/* Center - Search input */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Search tasks..."
          />
        </div>
      </div>

      {/* Right side - Theme toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </nav>
  );
};

export default SimpleKanbanNavbar;

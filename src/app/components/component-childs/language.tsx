"use client";
import React, { useState, useRef, useEffect } from 'react';

interface Language {
  code: string;
  flag: string;
  name: string;
}

const languages: Language[] = [
  {
    code: 'en',
    flag: 'https://w.ladicdn.com/s400x350/66e18ea9521baa00137153a3/co-01-20250730034604-rikvm.png',
    name: 'English'
  },
  {
    code: 'vi',
    flag: 'https://w.ladicdn.com/s400x350/66e18ea9521baa00137153a3/co-02-20250730034604-lddcc.png',
    name: 'Tiếng Việt'
  }
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* hiển thị ngôn ngữ hiện tại */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-transparent border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          className="w-10 h-6 object-cover rounded-sm"
        />
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {languages.map((language) => (
            <div
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors duration-150 ${
                selectedLanguage.code === language.code ? 'bg-gray-800 text-purple-400' : 'text-gray-300'
              }`}
            >
              <img
                src={language.flag}
                alt={language.name}
                className="w-10 h-6 object-cover rounded-sm"
              />
              <span className="text-sm font-medium">{language.name}</span>
              {selectedLanguage.code === language.code && (
                <svg
                  className="w-4 h-4 ml-auto text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
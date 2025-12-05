function Header() {
  return (
    <header className="w-full py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg mb-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
        <span className="text-2xl font-bold text-white tracking-wide">GminiAI</span>
        <nav>
          <a href="#about" className="text-white hover:text-pink-200 px-3">About</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 px-3">GitHub</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

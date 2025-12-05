function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-900 text-center text-gray-400 mt-8">
      <div className="max-w-4xl mx-auto px-4">
        &copy; {new Date().getFullYear()} GminiAI. Made with <span className="text-pink-400">♥</span> by Govinda.
      </div>
    </footer>
  );
}

export default Footer;

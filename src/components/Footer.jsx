function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Ing Kea Meng
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Crafting digital experiences with passion
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className=" text-gray-400 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <i className="fa-brands fa-github text-gray-400 text-3xl  hover:text-purple-400 transition duration-300"></i>
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <i className="fa-brands fa-linkedin text-gray-400 text-3xl  hover:text-purple-400 transition duration-300"></i>
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <i className="fa-brands fa-telegram text-gray-400 text-3xl  hover:text-purple-400 transition duration-300"></i>
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <i className="fa-brands fa-instagram text-gray-400 text-3xl  hover:text-purple-400 transition duration-300"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Ing Kea Meng. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
    </footer>
  );
}

export default Footer;

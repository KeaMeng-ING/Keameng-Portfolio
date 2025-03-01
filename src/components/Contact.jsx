import contact from "../assets/contact.svg";

function Contact() {
  return (
    <div className="min-h-screen bg-black px-20 xl:px-100 pt-5 flex items-center">
      <div className="w-full">
        <h1 className="text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Contact Me
        </h1>
        <p className="text-xl text-gray-400 mt-6 text-center">
          Let's connect and create something amazing together!
        </p>

        <div className="flex mt-10 gap-20 items-center">
          <img src={contact} alt="" className="w-120 xl:w-6/12" />
          <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">
              Send a Message
            </h2>
            <form action="">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value="name"
                  className="w-full px-3 py-2 pr-20 xl:pr-80 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value="message"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Information</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Get in touch with us for any inquiries about our services or to start your investment journey.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a
                    href="https://www.google.com/maps?q=Kosta+Lulchev+Str.+58,+Sofia+1113,+Bulgaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <p>Kosta Lulchev Str. 58</p>
                    <p className="mt-1">Sofia 1113, Bulgaria</p>
                  </a>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a href="mailto:contact@calvinbells.gold" className="hover:underline">
                    contact@calvinbells.gold
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Send us a message</h2>
            <div className="mt-9">
              <form className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

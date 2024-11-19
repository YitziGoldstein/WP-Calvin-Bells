import { Coins, LineChart, ShieldCheck } from 'lucide-react';

const Services = () => {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Precious Metals & Investment Gold
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Precious Metals Trading</h3>
              <p className="mt-4 text-gray-500">
                Trade in rare and valuable metals including gold, silver, platinum, and palladium with expert guidance and secure transactions.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Investment Solutions</h3>
              <p className="mt-4 text-gray-500">
                Expert advice on investment gold opportunities, including bars and coins, tailored to your investment goals.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure Storage</h3>
              <p className="mt-4 text-gray-500">
                State-of-the-art storage solutions ensuring the safety and security of your precious metal investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
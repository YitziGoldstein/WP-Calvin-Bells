import { DollarSign, ExternalLink } from 'lucide-react';

const Price = () => {
  return (
    <div id="prices" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transparent Market Rates
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-yellow-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our precious metal prices align with global standards, guided by the London Bullion Market Association (LBMA). Check current rates at{' '}
                  <a 
                    href="https://www.lbma.org.uk/prices-and-data/precious-metal-prices#/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                  >
                    LBMA Precious Metals Price
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  {' '}or through daily updates on{' '}
                  <a 
                    href="https://www.goldrate24.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                  >
                    GoldRate24
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  .
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Calvin Bells offers unique trading terms to ensure our clients benefit from competitive and transparent pricing, aligned with market integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
import { Shield, Award, Scale } from 'lucide-react';

const About = () => {
  const features = [
    {
      name: 'Licensed & Regulated',
      description: 'Registered under the Ministry of Economy and Industry of Bulgaria (number 7649)',
      icon: Shield
    },
    {
      name: 'Market Expertise',
      description: 'Specialized knowledge in precious metals and investment gold trading',
      icon: Award
    },
    {
      name: 'Fair Pricing',
      description: 'Transparent pricing aligned with LBMA standards',
      icon: Scale
    }
  ];

  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Precious Metals Trading
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Since 2018, Calvin Bells has been a trusted name in foreign trade transactions with precious metals and investment gold.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
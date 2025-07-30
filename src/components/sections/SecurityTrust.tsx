export default function SecurityTrust() {
  const securityFeatures = [
    {
      icon: 'fas fa-lock',
      title: 'Secure Data Transmission',
      description: 'All data encrypted in transit with HTTPS/TLS'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Privacy-First Design',
      description: 'GDPR compliant data handling and user control'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Enterprise Cloud Infrastructure',
      description: 'Built on industry-leading cloud platforms with enterprise-grade security'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Enterprise-Grade Security
          </h3>
          <p className="text-gray-600">
            Your privacy and data security are our top priorities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <i className={`${feature.icon} text-white text-lg`} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
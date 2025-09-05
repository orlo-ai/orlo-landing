import Image from 'next/image';

export default function CrossPlatformSupport() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Desktop: Left-Right layout, Mobile: Top-Bottom */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* Multi-device showcase image */}
          <div className="mb-12 lg:mb-0 order-2 lg:order-1">
            <Image
              src="/img/multi-device-showcase.png"
              alt="Orlo running on iPhone, Android, and Desktop devices"
              width={800}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Right side: Buttons and text */}
          <div className="lg:pl-8 order-1 lg:order-2">
            
            {/* Title and subtitle - only on desktop right side */}
            <div className="hidden lg:block mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Orlo goes wherever you go
              </h2>
              <p className="text-xl text-gray-600">
                Available on all your devices
              </p>
            </div>
            
            {/* Mobile title - centered */}
            <div className="text-center mb-12 lg:hidden">
              <h2 className="text-3xl font-bold mb-4">
                Orlo goes wherever you go
              </h2>
              <p className="text-xl text-gray-600">
                Available on all your devices
              </p>
            </div>
            
            {/* Buttons - horizontal on all screen sizes */}
            <div className="flex flex-row gap-3 justify-center lg:justify-start mb-6">
              
              <a
                href="/install-guide#ios"
                className="group flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <i className="fab fa-apple text-lg mr-2" />
                <span className="font-medium">Get for iPhone</span>
              </a>
              
              <a
                href="/install-guide#android"
                className="group flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <i className="fab fa-android text-lg mr-2" />
                <span className="font-medium">Get for Android</span>
              </a>
              
            </div>

            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm">
                Also works perfectly on{" "}
                <a 
                  href="/install-guide#desktop" 
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Desktop
                </a>
                {" "}and Web browsers
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
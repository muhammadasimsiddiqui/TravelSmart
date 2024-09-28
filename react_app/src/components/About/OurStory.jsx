import React from "react";

export default function OurStory() {
  return (
    <>
      <div className="container">
        <section className="w-full  mx-auto py-10 dark:text-white p-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-4xl font-bold leading-tight">
            Our Mission
          </h1>
          <div className=" mx-auto flex flex-wrap justify-between  gap-4">
            {/* Card 1 */}
            <div className="max-w-xs rounded-lg shadow-md overflow-hidden bg-gray-100 dark:bg-gray-900 transition-transform duration-200 hover:scale-105">
              <img
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Card Image"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Our Humble Beginnings
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                  A brief story of our journey, focusing on our commitment to
                  quality and creativity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-xs rounded-lg shadow-md overflow-hidden bg-gray-100 dark:bg-gray-900 transition-transform duration-200 hover:scale-105">
              <img
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Card Image"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  A Vision for the Future
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                  Looking ahead with a commitment to innovation and customer
                  satisfaction.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-xs rounded-lg shadow-md overflow-hidden bg-gray-100 dark:bg-gray-900 transition-transform duration-200 hover:scale-105">
              <img
                className="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Card Image"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Commitment to Quality
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                  Our unwavering commitment to craftsmanship and excellence in
                  every product.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

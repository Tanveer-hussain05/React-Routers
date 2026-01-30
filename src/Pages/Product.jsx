import React from 'react'

const Product = () => {
  return (
    <section id="product" className="w-full py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-4">
          Our Product
        </h2>

        <p className="text-gray-600 mb-6">
          Ye hamara main product hai jo fast, secure aur user-friendly hai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-500">
              High quality material aur best performance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-500">
              Fast loading aur smooth experience.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-500">
              24/7 customer support available.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


export default Product

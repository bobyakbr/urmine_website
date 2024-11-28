



'use client';


import ProductCard from './product';




    
    const products = [
        {
          id: 1,
          name: 'IOT',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee',
          image: 'pic2.webp',
        },
        {
          id: 2,
          name: 'Artificial Intelligence',
          description: 'lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee',
          image: 'pic4.webp',
        },
        {
          id: 3,
          name: 'Big Data ',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee.',
          image: 'pic8.webp',
        },
        {
          id: 4,
          name: 'Cyber Security',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee',
          image: 'pic10.webp',
        },
        // Add more products as needed
      ];
      ;
      
  
      const Solutions = () => {
        return (
          <div className="max-w-7xl mx-auto px-4 py-12" id="solution">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Our Solutions</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      };
      


export default Solutions;
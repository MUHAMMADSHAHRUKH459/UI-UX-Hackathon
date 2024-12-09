// import Image from 'next/image';
// import React from 'react';
// import { FaCartShopping } from "react-icons/fa6";

// export default function FeaturedProducts() {
//   const Data = [
//     '/Logo1.png',
//     '/Logo2.png',
//     '/Logo3.png',
//     '/Logo4.png',
//     '/Logo5.png',
//     '/Logo6.png',
//   ];

//   const FeatureImage = [
//     '/image/product1.png',
//     '/imagge/prod2.png',
//     '/image/prod3.png',
//     '/image/prod4.png',
//   ];

//   return (
//     <div className="px-4 sm:px-8 md:px-48 py-8">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
//         {Data.map((val, i) => (
//           <div key={i} className="flex justify-center">
//             <Image
//               src={val}
//               alt={`Logo${i}`}
//               width={1000}
//               height={1000}
//               className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
//             />
//           </div>
//         ))}
//       </div>

//       <div>
//         <h1 className="text-2xl font-bold mb-4 pl-4">Featured Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//           {FeatureImage.map((val, i) => (
//             <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//               <div className="w-full h-64 overflow-hidden">
//                 <Image
//                   src={val}
//                   alt={`yr${i}`}
//                   width={400}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex justify-between w-full px-4 py-2">
//                 <div className="flex flex-col items-start">
//                   <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
//                   <span className="text-black text-lg font-bold">$20</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

export default function FeaturedProducts() {
  const FeatureImage = [
    '/image/product1.png',
    '/image/prod5.png', // Corrected the folder name
    '/image/prod3.png',
    '/image/prod4.png',
  ];

  return (
    <div className="px-4 sm:px-8 md:px-48 py-8">
      <div>
        <h1 className="text-2xl font-bold mb-4 pl-4">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {FeatureImage.map((val, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src={val}
                  alt={`prod5${i}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between w-full px-4 py-2">
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                  <span className="text-black text-lg font-bold">$20</span>
                </div>
                <div className="flex items-center">
                  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


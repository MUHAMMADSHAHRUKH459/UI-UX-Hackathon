// Import necessary React components
import * as React from "react";

// Define types for each product component
interface ProductImageProps {
  imageUrl: string;
  badgeText?: string;
  badgeColor?: string;
}

interface ProductDetailsProps {
  title: string;
  price: number;
  originalPrice?: number;
  iconUrl: string;
}

interface ProductCardProps {
  imageUrl: string;
  badgeText?: string;
  badgeColor?: string;
  title: string;
  price: number;
  originalPrice?: number;
  iconUrl: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, badgeText, badgeColor }) => (
  <div className="flex relative flex-col items-start px-5 pt-5 pb-64 w-full text-sm font-medium leading-none text-black capitalize whitespace-nowrap rounded-xl aspect-square max-md:pb-24 max-md:mt-6 bg-white sm-">
    <img
      loading="lazy"
      src={imageUrl}
      alt={badgeText ? `Product with ${badgeText} badge` : "Product image"}
      className="object-cover absolute inset-0 size-full"
    />
    {badgeText && (
      <div className={`relative gap-2.5 px-2.5 py-1.5 ${badgeColor} rounded`}>
        {badgeText}
      </div>
    )}
  </div>
);

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, price, originalPrice, iconUrl }) => (
  <div className="flex flex-1 gap-3 text-black">
    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
      <div className="text-base leading-tight">{title}</div>
      <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
        <div className="self-stretch my-auto text-lg font-semibold">${price}</div>
        {originalPrice && (
          <div className="self-stretch my-auto text-sm text-zinc-400">${originalPrice}</div>
        )}
      </div>
    </div>
    <img
      loading="lazy"
      src={iconUrl}
      alt=""
      className="object-contain shrink-0 my-auto w-11 rounded-none aspect-square"
    />
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  badgeText,
  badgeColor,
  ...props
}) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <ProductImage
      imageUrl={imageUrl}
      badgeText={badgeText}
      badgeColor={badgeColor}
    />
  </div>
);

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/70b0d0e952fe89c9e655cc56c90cd96427434b98025c230259224f8fd3a33665?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997",
      badgeText: "New",
      badgeColor: "bg-emerald-600",
      title: "Library Stool Chair",
      price: 20,
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/bceed32bad627e49107325de91b44cbcf31b75ecc743f024f466507e3c3a1d13?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/44ca6870cd88d066e9cec1f199c8ae1598a80871d99636307e717eae1366f32c?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997",
      badgeText: "Sales",
      badgeColor: "bg-orange-400",
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 39,
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4ebb803d839f868416ccd2981101a69ec9cff349067e9b566edc27ed824a38?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f39e547b8d4a7de521aef03638c6a373d4171e21ba6e7a2f1beae6359076e70?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997",
      title: "Library Stool Chair",
      price: 20,
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdab30b864094cb2c2c5871e0dae57fe1652b56ee4bac3708766197be47f0b84?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/563a5ed01cfdd9e04ac9a920775b81fe892edd74376d3be9f8637c282fb16d84?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997",
      title: "Library Stool Chair",
      price: 20,
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdab30b864094cb2c2c5871e0dae57fe1652b56ee4bac3708766197be47f0b84?placeholderIfAbsent=true&apiKey=d996d21fad324bbda21d7a6e5cf1d997"
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center bg-white text-black" aria-label="Featured Products">
      <header className="flex flex-wrap gap-10 justify-between items-center self-stretch px-72 w-full text-3xl font-semibold leading-none capitalize max-md:px-5 max-md:max-w-full text-black">
        <h2 className="self-stretch my-auto">Featured Products</h2>
        <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px]" />
      </header>
      <div className="mt-10 w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-3.5 w-full capitalize max-w-[1320px] max-md:max-w-full">
        {products.map((product, index) => (
          <ProductDetails key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

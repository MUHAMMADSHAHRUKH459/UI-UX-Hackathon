import * as React from "react";
import Image from "next/image"; // Import Next.js Image Component

// PartnerLogo Component
export const PartnerLogo: React.FC<{ src: string; width: string; aspectRatio: string }> = ({ src, width, aspectRatio }) => {
  return (
    <div className={`relative ${width} ${aspectRatio}`} style={{ position: "relative" }}>
      <Image
        loading="lazy"
        src={src}
        alt=""
        layout="fill"
        objectFit="contain"
        className="shrink-0 self-stretch my-auto"
      />
    </div>
  );
};

// PartnerLogos Component
const partnerData = [
  { src: "/image/zapier.png", width: "w-[85px]", aspectRatio: "aspect-[0.98]" },
  { src: "/image/pipe.png", width: "w-[107px]", aspectRatio: "aspect-[0.98]" },
  { src: "/image/cib.png", width: "w-[135px]", aspectRatio: "aspect-[0.97]" },
  { src: "/image/zz.png", width: "w-[63px]", aspectRatio: "aspect-[0.97]" },
  { src: "/image/burn.png", width: "w-[98px]", aspectRatio: "aspect-[0.97]" },
  { src: "/image/panda.png", width: "w-[113px]", aspectRatio: "aspect-[0.98]" },
  { src: "/image/moz.png", width: "w-[84px]", aspectRatio: "aspect-[0.97]" },
];

export const PartnerLogos: React.FC = () => {
  return (
    <section 
      aria-label="Partner Logos" 
      className="flex overflow-hidden flex-wrap gap-10 justify-between items-center bg-white p-6"
    >
      {partnerData.map((partner, index) => (
        <PartnerLogo
          key={`partner-${index}`}
          src={partner.src}
          width={partner.width}
          aspectRatio={partner.aspectRatio}
        />
      ))}
    </section>
  );
};

import Image from "next/image";

const Ads = () => {
  return (
    <div className="flex flex-col max-w-7xl mt-10 mx-auto p-6 justify-center items-center">
      <h1 className="text-2xl font-semibold text-[#2264D1] text-center max-w-5xl">
        Lebih dari 1000 Pekerjaan kami selesai dari perusahaan Terkemuka di
        kepri yang telah mempercayai dan memilih layanan sirapi
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row items-center justify-center gap-20 mt-10">
        <Image 
            src='/ads-1.png'
            alt="ads"
            width={200}
            height={40}
        />
        <Image 
            src='/ads-2.png'
            alt="ads"
            width={120}
            height={30}
        />
        <Image 
            src='/ads-3.png'
            alt="ads"
            width={105}
            height={80}
        />
        <Image 
            src='/ads-4.png'
            alt="ads"
            width={92}
            height={70}
        />
      </div>
    </div>
  );
};

export default Ads;

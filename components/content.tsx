import Image from "next/image";

const Content = () => {
  return (
    <div className="flex flex-col max-w-7xl mt-10 mx-auto p-6">
      <h1 className="text-[#2264D1] text-center lg:text-start font-semibold text-2xl text-balance">
        Langkah Mudah Dalam Mencari Rantai Pasok Di{" "}
        <span className="text-[#F6D100]"> Sirapi</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex border border-[#F6D100] h-[120px] w-[120px] rounded-full bg-[#F6D100] items-center justify-center text-center">
            <Image
              src="/search.png"
              alt="search icon"
              width={80}
              height={80}
              className="flex items-center justify-center text-center object-contain"
            />
          </div>
          <p className="text-[#2264D1] text-center lg:text-start font-semibold text-xl text-balance mt-5">
            Cari
          </p>
          <span className="text-center font-normal text-lg text-[#2264D1] mt-5">
            cari dan pilih mitra berdasarkan bidang kapabilitas dan ulasan
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex border border-[#F6D100] h-[120px] w-[120px] rounded-full bg-[#F6D100] items-center justify-center text-center">
            <Image
              src="/conversation.png"
              alt="conversation"
              width={80}
              height={80}
              className="flex items-center justify-center text-center object-contain"
            />
          </div>
          <p className="text-[#2264D1] text-center lg:text-start font-semibold text-xl text-balance mt-5">
            Berdiskusi
          </p>
          <span className="text-center font-normal text-lg text-[#2264D1] mt-5">
            diskusikan detail pekerjaan atau ruang lingkup pekerjaan yang anda
            inginkan lalu meminta penawaran harga dari mitra
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex border border-[#F6D100] h-[120px] w-[120px] rounded-full bg-[#F6D100] items-center justify-center text-center">
            <Image
              src="/thumbs-up.png"
              alt="thumbs-up"
              width={80}
              height={80}
              className="flex items-center justify-center text-center object-contain"
            />
          </div>
          <p className="text-[#2264D1] text-center lg:text-start font-semibold text-xl text-balance mt-5">
            Setujui dan berikan ulasan
          </p>
          <span className="text-center font-normal text-lg text-[#2264D1] mt-5">
            Setujui hasil kerja mitra dan berikan ulasan ketika mitra sudah
            menyelesaikan pekerjaannya
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;

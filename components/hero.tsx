import Image from "next/image";

import Fitur from "@/components/fitur";
import { Button } from "@/components/ui/button";
import Category from "@/components/category";
import Content from "@/components/content";
import Ads from "./ads";

const MainPage = () => {
      const industri = [
        {
          name: "Elektronika dan Telematika ICT",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Farmasi, Kosmetik, Alkes",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Pembangkit Energi",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Pangan",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Hulu agro",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Tekstil, kulit, alas kaki, Aneka",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Kimia Dasar",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Logam Dasar dan Bahan Galian Non Logam",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Barang modal, Komponen, Bahan Penolong dan Jasa Industri",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Kimia Dasar, Migas dan Batu Bara",
          ikm: 600,
          ib: 1120,
        },
        {
          name: "Alat Transportasi",
          ikm: 600,
          ib: 1120,
        },
      ];
  return (
    <>
      <section className="flex flex-col items-center justify-between p-6 max-w-7xl mx-auto space-x-4 lg:space-x-6 mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center flex-col justify-start">
            <h1 className="text-[#2264D1] text-center lg:text-start font-semibold text-5xl text-balance">
              Sistem Informasi Rantai Pasok{" "}
              <span className="text-[#F6D100]"> Industri</span>
            </h1>
            <p className="text-xl text-[#8594AD] text-center lg:text-start font-normal mt-5 text-balance">
              Menghubungkan Industri Kecil dan Menengah dengan Industri Besar
              melalui Integrasi Rantai Pasok Industri
              <Button className="hidden lg:flex justify-self-start mt-5">
                Daftar Sekarang
              </Button>
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="/hero-image.png"
              alt="hero image"
              width={768}
              height={457}
            />
          </div>
        </div>
        <Button className="flex items-center justify-center text-center w-3/4 lg:hidden">
          Daftar Sekarang
        </Button>
      </section>
      <div className="bg-[#EBF8FE] w-screen flex mt-10 justify-center items-center">
        <Fitur />
      </div>
      <div className="flex flex-col max-w-7xl mt-10 mx-auto p-6">
        <div className="items-start">
          <h1 className="text-2xl font-semibold text-[#2264D1]">
            Cari <span className="text-[#F6D100]"> Industri</span> Unggulan
            Dengan Kategori
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-6 gap-y-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {industri.map((item) => (
            <Category
              key={item.name}
              name={item.name}
              ikm={item.ikm}
              ib={item.ib}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#EBF8FE] w-screen flex mt-10 justify-center items-center">
        <Content />
      </div>
      <Ads />
    </>
  );
};

export default MainPage;

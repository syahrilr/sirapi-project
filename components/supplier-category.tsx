import { supplierCategory } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ColumnProps = {
  title: string;
};

const SupplierColumn = ({ title }: ColumnProps) => (
  <div className="footer_column text-[#8594AD] mt-10 hover:text-gray-800">
    <Link href="/" className="font-semibold text-lg">
      {title}
    </Link>
  </div>
);

const SupplierCategory = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-row items-center justify-around p-6 mx-auto max-w-7xl lg:space-x-6">
        <div className="grid grid-cols-4 text-center md:grid-cols-5 lg:grid-cols-7 gap-3">
          <SupplierColumn
            title={supplierCategory[0].title}
          />
          <SupplierColumn
            title={supplierCategory[1].title}
          />
          <SupplierColumn
            title={supplierCategory[2].title}
          />
          <SupplierColumn
            title={supplierCategory[3].title}
          />
          <SupplierColumn
            title={supplierCategory[4].title}
          />
          <SupplierColumn
            title={supplierCategory[5].title}
          />
          <SupplierColumn
            title={supplierCategory[6].title}
          />
          <SupplierColumn
            title={supplierCategory[7].title}
          />
          <SupplierColumn
            title={supplierCategory[8].title}
          />
          <SupplierColumn
            title={supplierCategory[9].title}
          />
        </div>
      </div>
    </div>
  )
};

export default SupplierCategory;

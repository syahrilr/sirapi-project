import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from "next/image";

interface CategoryProps {
    name: string,
    ikm: number,
    ib: number,
}

const Category: React.FC<CategoryProps> = ({name, ikm, ib}) => {
  return (
    <Card className="bg-[#EBF8FE] border-none items-center justify-center flex flex-col">
      <CardHeader>
        <CardTitle className="text-center text-[#2264D1] font-semibold text-lg">{name}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-row items-center justify-between gap-10">
        <div className="flex flex-row gap-1.5">
          <Image src="/store.png" height={10} width={10} alt="store" />
          <p className="text-xs">{ikm}</p>
        </div>
        <div className="flex flex-row gap-1.5">
          <Image src="/store.png" height={10} width={10} alt="store" />
          <p className="text-xs">{ib}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Category;

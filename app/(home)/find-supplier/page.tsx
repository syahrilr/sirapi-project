import Footer from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import SupplierCategory from "@/components/supplier-category";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <>
        <MainNav />
        <Separator />
        <SupplierCategory />
        <Separator />
        <Footer />
    </>
  )
};

export default Page;

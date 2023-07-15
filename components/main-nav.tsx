"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog } from "@headlessui/react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      href: "/",
      label: "Beranda",
      active: pathname === "/",
    },
    {
      href: "/cari-proyek",
      label: "Cari Proyek",
      active: pathname === "/cari-proyek",
    },
    {
      href: "/find-supplier",
      label: "Cari Supplier",
      active: pathname === "/find-supplier",
    },
  ];

  return (
    <nav className="flex flex-row items-center justify-between p-6 max-w-7xl mx-auto space-x-4 lg:space-x-6">
      <div className="flex items-center gap-3">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/logo.png"
            width={100}
            height={75}
            alt="logo"
            className="items-center mr-6"
          />
        </div>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md hidden md:flex lg:flex font-medium transition-colorshover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex lg:flex gap-4 items-center">
        <div className="w-full h-10 flex items-center px-2 py-2 border border-black rounded-3xl divide-x divide-gray-300">
          <span className="flex ml-2 pr-3 items-center justify-center">
            <Search size={18} />
            <Input type="text" placeholder="Cari ..." />
          </span>
          <span className="flex pl-3">
            Industri
            <ChevronDown size={18} className="ml-2" />
          </span>
        </div>
        <Button className="flex flex-end mx-auto" onClick={() => router.push('/login')}>Masuk</Button>
      </div>
      {/*  Mobile Menu */}
      <div className="flex lg:hidden md:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/logo.png"
                width={100}
                height={75}
                alt="logo"
                className="items-center mr-5"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {routes.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
}

'use client'

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from 'react-hook-form'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Label } from './ui/label';

const formSchema = z.object({
  username: z.string().min(2).max(50),
});


const Login = () => {
    const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-6">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer justify-self-start ml-20"
        >
          <Image
            src="/logo.png"
            width={100}
            height={75}
            alt="logo"
            className="justify-self-start mb-10 lg:ml-40"
          />
        </div>
        <div className="w-full flex flex-col mx-auto">
          <h1 className="text-center text-3xl font-semibold mb-1">Masuk</h1>
          <p className="text-center text-lg font-semibold mb-7">
            Selamat Datang kembali
          </p>
          <div className="flex justify-center items-center w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <div className="w-full h-10 flex items-center px-2 py-2 border border-gray-300 rounded-xl">
                          <span className="flex ml-2 pr-3 items-center justify-center">
                            <Mail size={18} />
                            <Input
                              type="text"
                              placeholder="Masukkan email anda"
                              className="max-w-[320px] lg:w-[320px] placeholder:whitespace-normal placeholder:text-xs"
                            />
                          </span>
                        </div>
                      </FormControl>
                      <br />
                      <FormLabel>Kata Sandi*</FormLabel>
                      <FormControl>
                        <div className="h-10 flex items-center px-2 py-2 border border-gray-300 rounded-xl">
                          <span className="flex ml-2 pr-3 items-center justify-center">
                            <Lock size={18} />
                            <Input
                              type="text"
                              placeholder="Masukkan kata sandi anda"
                              className="max-w-[320px] placeholder:whitespace-normal placeholder:text-xs"
                            />
                          </span>
                        </div>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2 max-w-lg justify-center">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-normal text-[#A8A8A8] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-balance"
                  >
                    Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan
                    Privasi, dan Kebijakan Cookie kami.
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full text-center justify-center"
                >
                  Submit
                </Button>
                <p className="justify-center text-sm text-center">
                  Belum memiliki akun ?{" "}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Daftar</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center justify-center">
                          <Image
                            src="/login.png"
                            alt="login"
                            width={100}
                            height={100}
                          />
                        </DialogTitle>
                        <DialogDescription className="flex flex-col items-center justify-center">
                          <p className="text-xl font-semibold bg-[#F6D100] text-black mt-10">
                            Harap mendaftar melewati SIINAS
                          </p>
                          <p className='text-md text-black font-normal items-center justify-center text-center mt-10'>
                            Untuk pertanyaaan lebih lanjut silahkan hubungi call
                            center disperindag provinsi kepri
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/login-image.png"
          alt="login-image"
          className="flex w-full max-h-screen items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Login;

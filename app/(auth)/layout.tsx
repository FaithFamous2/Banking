import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex main-h-screen w-full justify-between font-inner">
      {children}
      <div className="auth-asset">
        <div>
          <Image
          src ="/icons/auth-image1.svg"
          width={500}
          height={500}
          alt="Auth image"
          />
        </div>
      </div>
      </main>
    );
  }

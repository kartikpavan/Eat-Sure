import Header from "@/components/Header";
import Hero from "@/components/Hero";

type LayoutProps = {
   children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
   return (
      <div className="min-h-screen flex flex-col">
         <Header />
         <Hero />
         {/* Children */}
         <div className="container mx-auto flex-1 py-10">{children}</div>
         {/* Footer */}
         <div>Footer</div>
      </div>
   );
}

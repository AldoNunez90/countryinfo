'use client'
import Countries from "./countries/page";
import { ThemeProvider } from "next-themes";

export default function Home({children}) {

  


  return (
    <ThemeProvider enableSystem={false} attribute="selector"  defaultTheme="system">
    <main>
    <Countries />
    </main>
    </ThemeProvider>
  );
}

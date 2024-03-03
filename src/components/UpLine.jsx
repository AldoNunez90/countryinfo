import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const UpLine = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  if(!mounted) return null
  const currentTheme = theme === "system" ? "light" : theme;

  return (
    <div className="upline">
      <h2 className="up-line__content">Where in the world?</h2>
      <div className="up-line__content select">
        {currentTheme == "light" ? (
          <>
            <Image
              src="/moon.svg"
              alt="moon"
              className="moon"
              width={15}
              height={15}
              onClick={() => setTheme("dark")}
            />
            <p>Dark Mode</p>
          </>
        ) : (
          <>
            <Image
              src="/moon.svg"
              alt="moon"
              className="moon"
              width={15}
              height={15}
              onClick={() => setTheme("light")}
            />
            <p>Light Mode</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UpLine;

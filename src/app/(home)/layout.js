'use client';

import "@fontsource/rubik/latin.css";
import "@fontsource/raleway/latin.css";
import "@fontsource/red-hat-text/latin.css";
import "@fontsource/barlow/latin.css";
import "@fontsource/heebo/latin.css";
import "@fontsource/open-sans/latin.css";
import "@fontsource/mukta/latin.css";
import "@/assets/vendors/tolak-icons/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "react-circular-progressbar/dist/styles.css";
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/icofont/icofont.min.css";
import "@/assets/vendors/tolak-icons-two/style.css";
import ThemeProvider from "@/Provider/ThemeProvider";

import "aos/dist/aos.css";

import "@/assets/css/tolak-landing.css";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home5 if the user visits the root path
    if (pathname === "/") {
      router.replace("/home");
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body
        className={`custom-cursor ${
          pathname === "/home5" ||
          pathname === "/home5-one" ||
          pathname === "/home6" ||
          pathname === "/home6-one" ||
          pathname === "/home7" ||
          pathname === "/home7-one" ||
          pathname === "/home-boxed"
            ? pathname.replace("/", "").replace("-one", "")
            : ""
        }`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

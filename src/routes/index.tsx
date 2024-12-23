import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";

import Header from "~/components/header/header";
import Products from "~/components/products/products";

export default component$(() => {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "AppleEmpire",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

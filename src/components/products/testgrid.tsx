import { component$, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  useVisibleTask$(() => {
    import("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs").then(({ default: Swiper }) => {
      // Initialize Swiper
      new Swiper(".mySwiper", {
        slidesPerView: 3, // Number of columns
        grid: {
          rows: 2, // Number of rows
        },
        spaceBetween: 30, // Spacing between slides
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }).catch((error) => {
      console.error("Error loading Swiper:", error);
    });
  });

  return (
    <>
      {/* Swiper CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      {/* Swiper Structure */}
      <div class="swiper mySwiper max-w-[1000px] m-auto">
        <div class="swiper-wrapper"
        style={{display:"grid !important"}}
        >
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 1</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 2</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 3</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 4</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 5</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 6</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 7</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 8</div>
          <div class="swiper-slide bg-gray-300"
            style={{display:"flex", justifyContent:"center", height:"auto"}}
          >Slide 9</div>
        </div>
        {/* Pagination */}
        <div class="swiper-pagination"></div>
      </div>
    </>
  );
});

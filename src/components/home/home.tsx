import { component$ } from "@builder.io/qwik";
import Banner from "~/components/banner/banner";
import TopCategories from "~/components/products/top_categories";
import Products from "~/components/products/products"

const Home = component$( ()=> {
    return (
        <>
            <Banner />
            <TopCategories />
            <Products />
        </>
    )
})

export default Home
import { component$ } from "@builder.io/qwik";
import type ProductsType from "~/interface/products/products";
//import image start
import iphone12 from '~/asset/images/products/iphone12.jpg'
import xiome14ultra from '~/asset/images/products/xiome14ultra.jpg'
import galaxcys20 from '~/asset/images/products/galaxcy.jpg';
import { Link } from "@builder.io/qwik-city";
//import image end

const productList = [
    {
        name: "Xiome 14 Ultra",
        brand: "Xiome",
        model: "14 Ultra",
        category: "Smart Phone",
        description: "Xiome 14 Ultra 2024",
        price: 500,
        image: xiome14ultra
    },
    {
        name: "IPhone 12",
        brand: "Apple",
        model: "I Phone 12 Ultra Pro",
        category: "Smart Phone",
        description: "I Phone 12 Ultra Pro 2024",
        price: 700,
        image: iphone12
    },
    {
        name: "Samsung Galaxcy s20",
        brand: "Samsung",
        model: "Galaxcy s20",
        category: "Smart Phone",
        description: "Samsung Galaxcy s20 2024",
        price: 600,
        image: galaxcys20
    },
    {
        name: "Xiome 14 Ultra",
        brand: "Xiome",
        model: "14 Ultra",
        category: "Smart Phone",
        description: "Xiome 14 Ultra 2024",
        price: 500,
        image: xiome14ultra
    },
    {
        name: "IPhone 12",
        brand: "Apple",
        model: "I Phone 12 Ultra Pro",
        category: "Smart Phone",
        description: "I Phone 12 Ultra Pro 2024",
        price: 700,
        image: iphone12
    },
    {
        name: "Samsung Galaxcy s20",
        brand: "Samsung",
        model: "Galaxcy s20",
        category: "Smart Phone",
        description: "Samsung Galaxcy s20 2024",
        price: 600,
        image: galaxcys20
    },
    {
        name: "Samsung Galaxcy s20",
        brand: "Samsung",
        model: "Galaxcy s20",
        category: "Smart Phone",
        description: "Samsung Galaxcy s20 2024",
        price: 600,
        image: galaxcys20
    },

];



const CreateProducts = ({ products }: { products: Array<ProductsType> }) => {
    const items = products.map((product, index) => (
        <Link  href="/products/details" key={index}>
            <div class="product lg:max-h-96 xl:w-60 p-3 bg-[#F5EFFF]">
                <div class="image max-w-full h-[80%]">
                    <img width="100" height="100" src={product.image} alt="iphone12" class="w-full h-full" />
                </div>
                <div class="w-full px-2 pt-2 flex justify-between">
                    <div class="title">
                        <h3>{product.name}</h3>
                        <h3>{product.category}</h3>

                    </div>
                    <div class="price">
                        ${product.price}
                    </div>
                </div>
            </div>
        </Link>
    ));

    return items
}

const Products = component$(() => {
    return (
        <>
            {/* <div class="products max-w-[1440px] flex flex-wrap m-auto">
                <CreateProducts products={productList} />
            </div> */}
            <div class="products max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 pt-28 m-auto">
                <CreateProducts products={productList} />
            </div>
            {/* <ProductDetails /> */}

        </>
    )
});

export default Products;
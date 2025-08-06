import ProductCard from "./components/ProductCard"

function App() {

const ProductList = [
 {
    id: 1,
    name: "Classic White Shirt",
    price: 1200,
    rating: 4.5,
    description: "A comfortable and versatile white shirt suitable for both formal and casual wear.",
    image: "https://picsum.photos/seed/shirt1/300/300",
   
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 1800,
    rating: 4.2,
    description: "Stylish slim-fit jeans made from premium stretch denim.",
    image: "https://picsum.photos/seed/pant1/300/300",
 
  },
  {
    id: 3,
    name: "Formal Blue Shirt",
    price: 1350,
    rating: 4.6,
    description: "Elegant formal shirt in a deep blue tone, perfect for office wear.",
    image: "https://picsum.photos/seed/shirt2/300/300",

  },
  {
    id: 4,
    name: "Black Chinos",
    price: 1650,
    rating: 4.3,
    description: "Classic black chinos that offer a clean and modern look.",
    image: "https://picsum.photos/seed/pant2/300/300",

  },
  {
    id: 5,
    name: "Polo T-Shirt",
    price: 950,
    rating: 4.1,
    description: "Casual polo t-shirt made from breathable cotton fabric.",
    image: "https://picsum.photos/seed/tshirt1/300/300",

  },
  {
    id: 6,
    name: "Cargo Pants",
    price: 1750,
    rating: 4.0,
    description: "Functional cargo pants with multiple pockets and rugged comfort.",
    image: "https://picsum.photos/seed/pant3/300/300",
   
  },
  {
    id: 7,
    name: "Hooded Sweatshirt",
    price: 1500,
    rating: 4.4,
    description: "Warm and cozy hoodie, perfect for chilly days.",
    image: "https://picsum.photos/seed/sweatshirt/300/300",

  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 2200,
    rating: 4.7,
    description: "Timeless denim jacket with a modern fit and durable stitching.",
    image: "https://picsum.photos/seed/jacket1/300/300",
   
  },
  {
    id: 9,
    name: "Khaki Shorts",
    price: 1100,
    rating: 4.0,
    description: "Light and comfortable khaki shorts for summer outings.",
    image: "https://picsum.photos/seed/shorts1/300/300",
    
  },
  {
    id: 10,
    name: "Graphic T-Shirt",
    price: 1050,
    rating: 4.3,
    description: "Trendy graphic t-shirt with unique artwork design.",
    image: "https://picsum.photos/seed/tshirt2/300/300",
    
  }
 
]



  return (
    <>
    <div className="flex flex-wrap justify-center items-center gap-4 p-6 bg-gray-100 min-h-screen"> 
       {
        ProductList.map((product)=> <ProductCard key={product.id} product ={product} />)
      }  
      </div>
    </>
  
     
  )
}

export default App

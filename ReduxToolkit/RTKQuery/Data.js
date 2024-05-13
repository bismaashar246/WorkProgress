import {useGetAllProductsQuery, useGetProductQuery,} from "./apiSlice";

export const Data = () => {
  
  const {data: allProductsData, isLoading} = useGetAllProductsQuery();
  
  const { data: singleProductData } = useGetProductQuery("iphone");


  const handleAllProductsClick = () => {
    console.log(allProductsData);
  }

  const handleIphoneClick = () => {

    console.log(singleProductData);
  }

  if (isLoading) return <h1> Loading...</h1>;
  return (
  <div> 
    <button onClick={handleAllProductsClick}>All Products</button>
    <br /><br />
    <button onClick={handleIphoneClick}>Iphone</button>
    <h3></h3>
  </div>
  
);};

import React, { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import HomePageImage from "../assets/PoductPage.png";
import Loading from "../components/Loading.jsx";



const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const loadPage =async ()=>{

  //   try
  //   {
  //     setIsLoading(true);
  //     const res =await fetch();
  //      const data =await res.json();
  //      setProducts(setProducts(data));
  //       setIsError(false)

  //   }
  //   catch (error)
  //   {
  //     setIsError(true)
  //     setErrorMessage("Error Fetching the API");
  //   }

  //   finally
  //   {
  //     setIsLoading(false); 
  //   }
    

   


      
  // }

  // useEffect(() =>
  // {
    
  //   await loadPage();


  // },[])

  // const LoadPage = async() => {
  //   const res =await fetch("");
  //   const data =res.json();

  // };

  return (
    <>
      {/* <div>
        {
          console.log()
          // //    if(isLoading)
          // {

          // }
          // //  <Loading />
        }
      </div> */}
    </>
  );
};

export default Product;

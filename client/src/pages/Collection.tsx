import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductsItem from "../components/ProductsItem";

const Collection = () => {
  const { products , search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [fillterProducts,setFillterProducts]= useState<any>([])
  const [category,setCategory] = useState<any>([])
  const [subCategory,setSubCategory] = useState<any>([])
  const [sortType,setSortType] = useState("relavent")


  const toggleCategory = (e: any)=>{
    if(category.includes(e.target.value)){
      setCategory((prev:any)=>prev.filter((item:any)=> item!== e.target.value))
    }else{
      setCategory((prev:any)=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e:any)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory((prev:any)=>prev.filter((item:any)=> item!== e.target.value))
    }else{
      setSubCategory((prev:any)=>[...prev,e.target.value])
    }
  }

  const FilterProduct = ()=>{
    let productCoppy = products.slice()
   
    if(showSearch && search){
      productCoppy = productCoppy.filter((item:any)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0 ){
      productCoppy = productCoppy.filter((item:any)=> category.includes(item.category))
    }
    if(subCategory.length>0 ){
      productCoppy = productCoppy.filter((item:any)=> subCategory.includes(item.subCategory))
    }

    setFillterProducts(productCoppy)
  }

  const sortProduct = ()=>{
    let ftCopy = fillterProducts.slice()
    switch (sortType) {
      case 'high-low':
        setFillterProducts(ftCopy.sort((a:any,b:any)=>(b.price - a.price)))
        break;

      case 'low-high':
        setFillterProducts(ftCopy.sort((a:any,b:any)=>(a.price - b.price)))
        break;
      
      default:
        FilterProduct()
        break;
    }
  }

  useEffect(()=>{
    sortProduct()
  },[sortType])

  useEffect(()=>{
    setFillterProducts(products)
  },[])
  useEffect(()=>{
    FilterProduct()
  },[category,subCategory,search,showSearch])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*FILTER*/}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img className={`h-3 sm:hidden ${showFilter? 'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/*CATEGORY FILTER*/}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={(e)=>toggleCategory(e)} value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={(e)=>toggleCategory(e)} value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={(e)=>toggleCategory(e)} value={"Kids"} /> Kids
            </p>
          </div>
        </div>

        {/*SUBCATEGORY FILTER*/}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={(e)=>toggleSubCategory(e)} value={"Topwear"} /> Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={(e)=>toggleSubCategory(e)} value={"Bottomwear"} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={(e)=>toggleSubCategory(e)} value={"Winterwear"} /> Winterwear
            </p>
          </div>
        </div>
      </div>

        {/*Right Side*/}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4 ">
            <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
            <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
              <option value="relavent">Sort by : Relavent</option>
              <option value="low-high">Sort by : Low to High</option>
              <option value="high-low">Sort by : High to Low</option>
            </select>
          </div>

        {/*Map product*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-4">
            {
              fillterProducts.map((item:any,index:number)=>(
                <ProductsItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}></ProductsItem>
              ))
            }
          </div>
        </div>
    </div>
  );
};

export default Collection;

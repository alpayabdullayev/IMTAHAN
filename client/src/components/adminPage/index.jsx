import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminPage = () => {

    const [data, setdata] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [search, setsearch] = useState('')
  const [sort, setsort] = useState(null)


  async function getAllProduct() {
    try {
      const res = await axios.get("http://localhost:3000/api/product");
      setdata(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteProduct(id) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/product/${id}`);
        getAllProduct()
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  const toLowerCase = (item) =>{
    if (typeof item === "string") {
        return item.toLocaleLowerCase()
    }
    return item
  }

  function handleSearch(e) {
    setsearch(e.target.value)
  }

  return (
    <>
    
    <section className='py-20 min-h-screen'>
        <div className="wrapper">
            <div className='flex justify-between flex-wrap py-10  items-center'>
                <h1 className='[font-size:_clamp(2em,2vw,10em)] font-bold '> 
                    Admin Page
                </h1> 
                <div>
                    <button className='py-2 px-2 bg-blue-800 text-white rounded-md'>
                        Add Page
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 flex-wrap'>
                <div>
                    <button onClick={()=>setsort({propert : "name" , acc : true})} className='py-2 px-2 bg-blue-800 text-white rounded-md'>A-Z</button>
                </div>
                <div>
                    <button onClick={()=>setsort({propert : "name" , acc : false})} className='py-2 px-2 bg-blue-800 text-white rounded-md'>Z-A</button>
                </div>
                <div>
                    <button onClick={()=>setsort({propert : "price" , acc : false})} className='py-2 px-2 bg-blue-800 text-white rounded-md'>PRICE</button>
                </div>
                <div>
                    <button onClick={()=>setsort(null)} className='py-2 px-2 bg-blue-800 text-white rounded-md'>DEFAULT</button>
                </div>
                <div>
                    <input type="text" value={search} onChange={(e)=>handleSearch(e)} className='border border-black py-1 px-2 outline-none'   placeholder='Search...'/>
                </div>
            </div>
            <div className=' overflow-auto py-10'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='py-2 px-2 border'>Image</th>
                            <th className='py-2 px-2 border'>Name</th>
                            <th className='py-2 px-2 border'>Price</th>
                            <th className='py-2 px-2 border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            IsLoading ? <p>Loading...</p> : data && data.filter((item)=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .sort((a,b)=>{
                                if (sort && sort.acc === true) {
                                    return (toLowerCase(a[sort.propert]) > toLowerCase(b[sort.propert])) ? 1 : ((toLowerCase(b[sort.propert]) > toLowerCase(a[sort.propert])) ? -1 : 0)
                                }
                                else if(sort && sort.acc === false ){
                                    return (toLowerCase(a[sort.propert]) < toLowerCase(b[sort.propert])) ? 1 : ((toLowerCase(b[sort.propert]) < toLowerCase(a[sort.propert])) ? -1 : 0)
                                }
                                else{
                                    return 0
                                }
                            })
                            .map((item)=>(
                                <tr key={item._id}>
                                    <td className='py-2 px-2 border'><img src={item.image} alt="" className='w-32 h-32' /></td>
                                    <td className='py-2 px-2 border'>{item.name}</td>
                                    <td className='py-2 px-2 border'>{item.price}</td>
                                    <td className='py-2 px-2 border'>
                                        <button onClick={()=>deleteProduct(item._id)} className='py-2 px-2 bg-red-800 text-white rounded-md'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    </>
  )
}

export default AdminPage
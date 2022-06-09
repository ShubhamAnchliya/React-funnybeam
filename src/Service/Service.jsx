import React from 'react';
import Navbar from '../Navbar/Navbar';
import Cards from './Cards';
import "./Service.css";
import Sdata from './Sdata';
import Footer from '../Footer/Footer';

const Service = () => {
  return (
    <>
         <Navbar/>
      
          <div>

            {/* <h1 className='text-center fst-italic  mt-2'>DESIGNED FOR SUCCESS.</h1> */}

            <h2 className='text-center mt-4'>Our Services</h2>



            <div className="card-category-2 mt-4">

              {/* <span class="category-name">Image Cards</span> <br/><br/> */}
            

               {/* <Cards/> */}
            
                
                {
                  Sdata.map((val, ind) => {
                    return <Cards
                      key={ind}
                      title={val.title}
                      imgSrc={val.imgSrc}
                      site={val.siteD}

                    />

                  })
                }
              
             

            </div>


            

          </div>

          <br />

          <Footer/>
         
       
    </>
  )
}

export default Service;
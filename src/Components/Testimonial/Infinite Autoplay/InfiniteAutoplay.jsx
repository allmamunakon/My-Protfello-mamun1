import React from 'react'
import './InfiniteAutoplay.css'
import TickNewser from '../../Ticker/TickNewser'
import '../../Sass/Sass.scss'



function InfiniteAutoplay() {
  return (
    <div className='container'>
        
             
      <div className=' text-center pt-2 d-flex justify-content-center text-align-center'>
      <div className=' bg-danger p-2 text-light d-flex link-itemInfine outer-shadow hover-in-shadow ' >
      <div className=' '>News</div>
      <div className='ms-1'> update</div>
      
  
      </div>
    
    <p className="SassStyle marquee text-light p-2 ms-3 link-itemInfine outer-shadow hover-in-shadow "> <span>আগামী ৩০ জানুয়ারি বিএনপির কালো পতাকা মিছিলের দিন সারাদেশে নেতাকর্মীদের সতর্ক থাকার আহ্বান জানিয়েছেন আওয়ামী লীগের সাধারণ সম্পাদক ও সেতুমন্ত্রী ওবায়দুল কাদের। তিনি বলেন, বিএনপি ৩০ তারিখ আবারও কালো পতাকা মিছিলের ডাক দিয়েছে। সেদিন আপনারা লাল-সবুজ পতাকা নিয়ে গণতন্ত্র, শান্তি, উন্নয়ন সমাবেশ করবেন। সারাদেশে আমাদের নেতাকর্মীরা পাহারায় থাকবেন।</span></p>

    </div>    
      <div className=' text-center pt-2 d-flex justify-content-center text-align-center'>
      <div className=' p-2 text-light d-flex link-itemInfine outer-shadow hover-in-shadow ' >
      <div className=' '>News</div>
      <div className='ms-1'> update</div>
      
  
      </div>
    
    {/* <p className="marquee text-light p-2 ms-3 link-itemInfine outer-shadow hover-in-shadow "> <span>আওয়ামী লীগ সভাপতি ও প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, দেশের একটা গোষ্ঠী অস্বাভাবিক পরিস্থিতি তৈরি করতে চাচ্ছে; কিন্তু এ বাংলাদেশে আর কোনোদিন অস্বাভাবিক পরিস্থিতি হতে দেওয়া হবে না।</span></p> */}
   
    <TickNewser />
    </div>    
        

        
        </div>
  )
}

export default InfiniteAutoplay
import React from 'react'

const Overlay = ({setShowOverlay}) => {
  return (
        <div>
           
                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white px-8 py-6 rounded-xl shadow-2xl text-center animate-scaleIn">
                    <div className='flex justify-between items-center '> 
                            <h1 className="text-2xl font-bold text-green-600">
                                Completed ✅ Order Sent to Kitchen
                            </h1>
                            
                    </div>
                    <p className="text-gray-600 mt-2">
                        Please prepare the order
                    </p>

                    <button  onClick={()=>setShowOverlay(false)} className='w-full bg-[#E74C3C] py-2 rounded-xl mt-4 hover:scale-105 transition-all duration-500 text-white text-lg cursor-pointer'> Close </button>
                    </div>
                </div>
        </div>

)
}
export default Overlay
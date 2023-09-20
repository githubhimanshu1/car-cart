import { Modal } from "@/types"

export default function Modal({isVisible,onClose}:Modal){
    if(!isVisible)return null
    return (
        <div className="inset-0 flex justify-center fixed bg-black bg-opacity-25 background-blur-sm items-center overflow-hidden w-screen h-screen z-20">
                <div className="bg-white w-[600px] h-64 overflow-auto px-2 py-2 opacity-100 rounded-lg">
                    <div className="w-full px-2 py-2 bg-gray-100 inline-flex h-24 align-middle">
                        <div className="w-64 px-2 py-2 justify-center text-center bg-yellow-600 text-white">
                            <span className="font-extrabold align-middle inline-block mt-auto">Atlanta Airline</span>
                        </div>
                        <div className="inline-flex w-auto px-2 overflow-hidden py-1 text-sm">
                        Air Atlanta Icelandic is a charter and ACMI airline based in Kópavogur, Iceland. It specialises in leasing aircraft on an ACMI and wet lease basis to airlines worldwide needing extra passenger and cargo capacity. It also operates charter services.
                        </div>
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur accusamus expedita id maiores enim, reiciendis blanditiis cum laborum consectetur. Alias ad ex atque dolore vel, velit fugiat doloremque odio!</span><br/>
                    <button className="bg-blue-600 text-white px-2 py-1 mx-auto mt-4 justify-center flex text-sm rounded-md" onClick={()=>onClose()}>Close</button>
                </div>
        </div>
    )
}
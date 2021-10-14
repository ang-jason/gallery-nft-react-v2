import React from 'react'

export default function Navbar({setPage}) {
    return (
        <div>
         {/* <button>NFT</button>   
         <button>Watchlist</button> */}

         <nav className="flex items-center justify-end flex-wrap bg-blue-700 p-4">
         
        <div className="block lg:flex-grow lg:inline-block flex items-center justify-start ">nft reacting wf ja</div>
    <div className="w-full block flex items-center lg:flex lg:items-center lg:w-auto ">
    <div className="text-2xl">

        <button className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4"
            onClick={()=> setPage('gallery')}
            >
            Gallery
        </button>
        <button className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4"
            onClick={()=> setPage('Watchlist')}
            >
            Stash
        </button>
        </div>
        {/* <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div> */}
     </div>
</nav>
        </div>
    )
}

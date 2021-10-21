import React, {useContext} from 'react'
import { WatchlistCard } from 'domains/watchlist'
import { GalleryContext } from 'App'


export default function Watchlist({watchList}) {
    // console.log("Watchlist",watchList)
    // console.log("Watchlist",watchList.length)

    const {
        findItemwatchList,
        removewatchList
    } = useContext(GalleryContext)

    return (
        <div>
            <div className="flex justify-center pt-4 "><div className="text-semibold text-pink-400 text-5xl">STASH</div> </div>
        {watchList.length >0 ? 
        (                
            
            <div className="overflow-y-hidden m-5">
       
            <div className="grid grid-cols-4 gap-1">
                {watchList.map(item=> {
                return ( <WatchlistCard 
                key={item.id} 
                item={item} 
                findItemwatchList={findItemwatchList(item)} 
                handleRemoveListClick={()=>removewatchList(item)}
                />
                )})}

            </div>
            </div>
        )
        :
        <div className="font-bold text-xl mb-2 flex justify-center text-green-500 m-5">No items in Stash, go add some luck..</div> 
        }



    
    </div>
    )
}

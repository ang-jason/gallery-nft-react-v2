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

        {watchList ? 
        (                
            
            <div className="overflow-y-hidden m-5">
       
            <div className="grid grid-cols-5 gap-7">
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

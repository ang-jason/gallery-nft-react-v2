import React, {useContext} from 'react'
import WatchlistCard from '../components/watchlist-card'
import { GalleryContext } from '../App'


export default function Watchlist({watchList}) {
    // console.log("Watchlist",watchList)
    // console.log("Watchlist",watchList.length)

    const {
        findItemwatchList,
        removewatchList
    } = useContext(GalleryContext)

    return (
        <div>

        {watchList.length > 0 ? 
        (                
            
            <div className="overflow-y-hidden m-3">
       
            <div className="grid grid-cols-5 gap-4 ">
                {watchList.map(item=> {
                return ( <WatchlistCard 
                key={item.id} 
                item={item} findItemwatchList={findItemwatchList} 
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

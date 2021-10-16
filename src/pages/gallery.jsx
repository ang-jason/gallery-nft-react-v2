import React, { useContext } from 'react'
import { GalleryContext } from 'App'
import {Card} from 'domains/gallery'
import { Button } from 'components/button'
import Loader from 'components/loader'


export default function Gallery({data, status}) {
    // console.log(data,status)
    const {     
        addwatchList,
        removewatchList,
        findItemwatchList,
        nextPagination,
        prevPagination
    } = useContext(GalleryContext)


    return (
        <div>

    
    
            <div className="flex content-center items-center justify-center mt-4">
                <div className="flex gap-4">     
                
                <Button variant="outline" onClick={prevPagination}>PREV</Button>
                <Button variant="outline" onClick={nextPagination}>NEXT</Button>
                
                </div>
               
            </div>

                {status === 'loading' && (<Loader/>)
            }
            {status === 'error' && (<div>Error fetching data</div>)
            }
            {status === 'success' && 

            (   
                <div className="overflow-y-hidden">
       
                <div className="grid grid-cols-3 gap-4 ">
                {data.asset_events.map(asset =>{
                    return <Card 
                    key={asset.id} 
                    asset={asset} 
                    handleRemoveListClick={()=>removewatchList(asset)}
                    handleWatchListClick={()=>{
                        addwatchList(asset)  
                    }}
                    handlefindItem={findItemwatchList(asset)}

                     />

                }
                )}</div>
                </div>
            )
            }
        </div>
    )
}

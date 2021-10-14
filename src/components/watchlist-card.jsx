import React from 'react'
import RemoveListBanner from './removelistbanner'



export default function WatchlistCard({item,handleRemoveListClick}) {
    // console.log(item)

    const inNotInside = () => {
            handleRemoveListClick()
            console.log('in watchlist cards')
    }


    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={item.asset.image_url} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1">{item.asset.name}</div>
                {/* <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. HERE
                </p> */}
                </div>
                <div className="px-6 pt-1 pb-2 flex justify-center justify-items-center justify-self-center items-center">
                <a className="inline-block bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 items-center"
                href={item.asset.permalink}>{item.id}</a>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"><RemoveListBanner inNotInside={inNotInside}/></span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                </div>
                </div>
        </div>
    )
}
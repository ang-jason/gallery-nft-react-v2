import React from 'react'
import RemoveListBanner from 'components/removelistbanner'
import { Badge } from 'components/badge'


export function WatchlistCard({item,handleRemoveListClick}) {

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
                <div className="font-bold text-xl mb-1 flex justify-center justify-items-center justify-self-center items-center">{item.asset.name}</div>
                {/* <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. HERE
                </p> */}
                </div>
                <div className="px-6 pt-1 pb-2 flex justify-center justify-items-center justify-self-center items-center">

                <div className="flex gap-3">
                <Badge
                color="green"
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                render={(bProps) => <a {...bProps} href={item.asset.permalink} />}
                >
                {item.id}
                </Badge>

                <Badge color="purple">
                <RemoveListBanner inNotInside={inNotInside}/>
                </Badge>

                </div>
                </div>
                </div>
        </div>
    )
}

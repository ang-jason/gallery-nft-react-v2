import React from 'react'
import RemoveListBanner from 'components/removelistbanner'
import AddListBanner from 'components/addlistbanner'
import { Badge } from 'components/badge'


export default function Card(props) {
    // const AddListBanner = props.watchlistComponent
    const { image_url, name, id, permalink, description } = props.asset.asset

    // const { descCollection } = props.asset.asset.collection
    // const ownership  = (props.asset.creator.user.username) ? (props.asset.creator.user.username) :(props.asset.owner.user.username)
    // const {ownership}  = (props.asset.asset.owner.user)
    // console.log(name)
    const inInside = () => {
        props.handleWatchListClick()
    }

    const inNotInside = () => {
        if (props.handlefindItem){
            props.handleRemoveListClick()
            console.log('NO WAY')
        }
    }

    const tempImg = "http://clipart-library.com/images/pioAgkojT.png"

    return (
        <div className="">
        <div className="rounded overflow-hidden shadow-lg m-5">
        <img className="w-full h-80 transform hover:scale-150 transition duration 150" src={image_url || tempImg} alt={name}/>
        {/* <div className="transform hover:scale-105 text-black  ">{description}</div> */}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
                        {description}
            </p>
        </div>
        <div className="px-6 pt-1 pb-2 flex">
        
            <Badge color="green" className="px-3 py-1" href="https://google.com">{id}
                </Badge>
            <a className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 items-center"
            href={permalink}>{id}</a>
            <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 align-middle"
            onClick={inInside}> {props.handlefindItem ? <RemoveListBanner inNotInside={inNotInside} />:<AddListBanner/>}
            </span>
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {usd_price}</span> */}
            
        </div>
        </div>
        </div>
    )
}

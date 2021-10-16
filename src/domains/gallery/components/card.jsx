import React from 'react'
import RemoveListBanner from 'components/removelistbanner'
import AddListBanner from 'components/addlistbanner'
import { Badge } from 'components/badge'


export function Card(props) {
    // const AddListBanner = props.watchlistComponent
    const { image_url, name, id, permalink, description } = props.asset.asset
    // console.log(image_url)
    // const { descCollection } = props.asset.asset.collection
    // const ownership  = (props.asset.creator.user.username) ? (props.asset.creator.user.username) :(props.asset.owner.user.username)
    // const {ownership}  = (props.asset.asset.owner.user)
    // console.log(name)
    // const inInside = () => {
    //     () => {props.handleWatchListClick()}
    // }

    const inNotInside = () => {
        props.handleRemoveListClick()
    }

    const tempImg = "https://picsum.photos/id/237/500/500"

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
        <div className="px-6 pt-1 pb-5 flex">

            <div className="flex gap-3">
                        <Badge
                color="green"
                render={(bProps) => <a {...bProps} href={permalink} />}
                >
                {id}
                </Badge>

             <Badge color="purple" onClick={()=>props.handleWatchListClick()}>

             <AddListBanner/>
             </Badge>

            {/* <Badge color="purple" onClick={inInside}>
            {props.handlefindItem ? <AddListBanner/>: <RemoveListBanner inNotInside={inNotInside} />}
            </Badge> */}

            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {usd_price}</span> */}
            </div>
        </div>
        </div>
        </div>
    )
}

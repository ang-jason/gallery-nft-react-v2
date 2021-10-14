import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'

export default function RemoveListBanner({inNotInside}) {
    return (
        <button className="flex items-center content-center" onClick={inNotInside}>
            <span className="font-semibold">Unstash</span>
            <HeartIcon className="h-5 w-5 text-yellow-400"/>
        </button>
    )
}

import React, { useState } from 'react'

export default function Search({getQuery}) {

    const [text,setText] = useState('')

    const onChange=(q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <div>
            <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-green-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-green-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Characters" aria-label="Search Bar"

                value={text}
                onChange={(e)=> onChange(e.target.value)}

                />

            </div>
            </form>
        </div>
    )
}

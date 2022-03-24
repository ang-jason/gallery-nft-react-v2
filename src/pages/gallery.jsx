import React, { useContext, useState } from 'react'
import { useQuery } from "react-query";
import { GalleryContext } from 'App'
import {Card} from 'domains/gallery'
import { Button } from 'components/button'
import Loader from 'components/loader'

const apiKey = process.env.REACT_APP_NOT_SECRET_CODE

const fetchGallery = async (pagination) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-KEY": apiKey,
      },
    };
  
    const url = pagination
      ? `https://api.opensea.io/api/v1/events?cursor=${pagination}`
      : `https://api.opensea.io/api/v1/events?`;
  
    return await fetch(url, options).then((response) => {
        

        return (response.json())
        
    });
  };
  
  export default function Gallery({ watchlist }) {
    const { addwatchList, removewatchList, findItemwatchList } =
      useContext(GalleryContext);
  
    const [pagination, setPagination] = useState(null);
  
    const { data, status } = useQuery(["gallery", pagination], () =>
        {
            const fetchResults = fetchGallery(pagination)
            console.log(Promise.resolve(fetchResults))
            return fetchResults
        }  
    );
  

    const nextPagination = () => {
        console.log('next',data.next)
      if (data.next != null) {
        setPagination(data.next);
      }
    };
  
    const prevPagination = () => {
        console.log('previous',data.previous)      
      if (data.previous != null) {
        setPagination(data.previous);
      }
    };
  
    return (
      <div>
        {/* <Search/> */}
  
        <div className="flex content-center items-center justify-center mt-6">
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={prevPagination}
              disabled={status === "loading"}
            >
              PREV
            </Button>
            <Button
              variant="outline"
              onClick={nextPagination}
              disabled={status === "loading"}
            >
              NEXT
            </Button>
          </div>
        </div>
  
        {status === "loading" && <Loader />}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
          <div className="overflow-y-hidden">
            <div className="grid grid-cols-3 m-5 2xl:grid-cols-5 gap-1 2xl:m-2 2xl:p-4">
              {data.asset_events?.map((asset) => {
                return (
                  <Card
                    key={asset.id}
                    asset={asset}
                    watchlist={watchlist}
                    handleRemoveListClick={() => removewatchList(asset)}
                    handleAddListClick={() => {
                      addwatchList(asset);
                    }}
                    handlefindItem={() => findItemwatchList(asset)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
  
import { LoginForm, useAuthState } from "domains/auth";
import { ListingItem, useListings } from "domains/marketplace";
import * as React from "react";

const addToCart = (listingId, token) =>
  fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
    method: "POST",
    body: JSON.stringify({
      quantity: 1,
      listingId,
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const MarketplacePublic = () => {
  const { listings } = useListings();
  const auth = useAuthState();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      {auth.status === "anonymous" && (
        <LoginForm
          onSuccess={(accessToken) => {
            auth.login(accessToken);
          }}
        />
      )}
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
        {listings &&
          listings.map((item) => (
            <ListingItem
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              price={item.price}
              availableStock={item.numOfStock}
              onlyOne={item.availability === "single-item"}
              onAddToCart={
                auth.status === "authenticated"
                  ? () => addToCart(item._id, auth.accessToken)
                  : undefined
              }
              key={item._id}
            />
          ))}
      </div>
    </div>
  );
};

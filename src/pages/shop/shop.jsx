import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview";

const shopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsOverview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default shopPage;

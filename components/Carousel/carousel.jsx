import ImageGallery from "react-image-gallery";
import React from "react";
const images = [
  {
    original: "https://i.imgur.com/wIxW4Te.jpg",
    thumbnail: "https://i.imgur.com/wIxW4Te.jpg",
  },
  {
    original: "https://i.imgur.com/zyNUOIb.jpg",
    thumbnail: "https://i.imgur.com/zyNUOIb.jpg",
  },
  {
    original: "https://i.imgur.com/rBW37K3.jpg",
    thumbnail: "https://i.imgur.com/rBW37K3.jpg",
  },
  {
    original: "https://i.imgur.com/nBGw9Lt.jpg",
    thumbnail: "https://i.imgur.com/nBGw9Lt.jpg",
  },
  {
    original: "https://i.imgur.com/auKefMr.jpg",
    thumbnail: "https://i.imgur.com/auKefMr.jpg",
  },
];

export default class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

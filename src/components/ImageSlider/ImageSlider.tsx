import { useEffect, useState } from "react";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {

        setLoading(true)
    
      const response = await fetch('${getUrl}?list');
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.Message);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data, please wait.</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  return <div></div>;
}

export default ImageSlider;

import { useState, useEffect } from "react";

function useAPICaller(url) {
  const [data1, setData] = useState(null);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // alert("Data fetched")
      fetchData();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 10000);

    return () => <>clearInterval(interval)</>;
  }, [url]);
  return data1;
}
function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/photos";
  const data = useAPICaller(API_URL);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data.map((x) => (
        <img src={x.url} style={{ width: "300px", height: "300px" }} />
      ))}
    </>
  );
}
export default App;






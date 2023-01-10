import React, { useEffect, useState } from "react";
import Link from "next/link"

const CatalogComponent = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setList(data.results)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <Link href={"/"}>Go Back</Link>
      <div style={{paddingTop: "10px"}}>
        {
          list.map((item, idx) => {
            return (
              <div key={idx} style={{width:"100%", height:"auto", border:"1px", backgroundColor:"pink", marginBottom:"15px"}}>
                {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default CatalogComponent;

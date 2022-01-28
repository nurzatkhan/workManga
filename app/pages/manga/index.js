import Image from 'next/image'
import Link from 'next/link';
import ss from '../../styles/mangaName.module.css'
import { useEffect, useState } from 'react';
import { HeadComponent } from '../../components/HeadComponent';
const axios = require ('axios').default


export default function manga({mangs2}) {
  const [mangs, setMangs] = useState()
  useEffect(() =>{
    async function load(){
      const response = await fetch('http://localhost:5000/manga/name')
      const json = await response.json()
      setMangs(json)
    }
    load()
  },[])



return (
  <HeadComponent>
      <h1 className={ss.h1}>все манги Саита</h1>
      <div className={ss.all_manga}>
        { mangs2.map(m =>(
          <div className={ss.one_manga}>
              <Link href={`manga/manga_id/[id]`} as={`manga/manga_id/${m.id}`}><a>
                <div className={ss.manga}>
                  {m.name}
                  </div>
                  <div className={ss.img_div}>
                  <img src={`http://localhost:5000/${m.url}`}></img>
                  </div>
                </a></Link>
          </div>
              
            ))}
      
      </div>

  </HeadComponent>
  )
}
manga.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/manga/name')
  const mangs2 = await res.json()
  return { mangs2 }
}

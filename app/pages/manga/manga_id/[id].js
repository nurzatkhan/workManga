import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HeadComponent } from '../../../components/HeadComponent';
const axios = require ('axios').default
import ss from '../../../styles/mangaId.module.css'


export default function index({mangaProps, MangsProps}) {
const router = useRouter().query.id
const [mangs, setMangs] = useState(MangsProps)
const [manga, setManga] = useState(mangaProps)

useEffect(() =>{

  async function load(){
    const res = await fetch(`http://localhost:5000/manga/name/${router}`)
    const mangaArr = await res.json()
    const mmmm= mangaArr[0]
    setManga(mmmm)

    const response = await fetch(`http://localhost:5000/manga/chapter/${router}`)
    const json = await response.json()

    setMangs(json)
    console.log("менин атым коткбас")
  }
  if(!manga || !mangs){   load()}

},[])

if (!manga || !mangs) {
  return (
    <HeadComponent title={"Загрузка"}>
<div key="uniqueId1">
  <h1 key="uniqueId1asd">Загрузк.......</h1>
  Остана виииии те эээту музыку
  Вииииите 
  вите НАдо
  выйййййте 
</div>
    </HeadComponent>
    )
}


if (manga || mangs) return (
  <HeadComponent title={manga.name}>
    
    <div className={ss.div__body}> 
        <div className={ss.king__div}>
              <div className={ss.king__img__div}>
                <h1>{manga.name}</h1>
                <img src={`http://localhost:5000/${manga.url}`}></img>
              </div>
              <div>
                <h4>{manga.description}</h4>
              </div>
        </div>
        <div className={ss.chapterDiv}>
            { mangs.map(m =>(
              <div className={ss.one__chapter__div}>
                  <Link href={`/manga/chapter/[id]`} as={`/manga/chapter/${m.id}`}><a>
                    <div>{m.name_manga_chapter}</div>
                    </a></Link>
              </div>
              
                ))}
              <Link href={`/manga/chapter/pos`} as={`/manga/chapter/pos`}><a>
                    <div>добавить Главу новую</div>
                    </a></Link>
          </div>
    </div>         
  </HeadComponent>
  )
}
export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:5000/manga/name/${ctx.query.id}`)
  const mangaArr = await res.json()
  const mangaProps= mangaArr[0]

  const response = await fetch(`http://localhost:5000/manga/chapter/${ctx.query.id}`)
  const MangsProps = await response.json()

  return { props: { mangaProps, MangsProps }}
}
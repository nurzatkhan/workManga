import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HeadComponent } from '../../../components/HeadComponent';
const axios = require ('axios').default
import s from '../../../styles/chapter.module.css'

export default function index({manga}) {
  const router = useRouter().query.id
  const [mangs, setMangs] = useState(manga)

  useEffect(() =>{
    async function load(){
      const response = await fetch(`http://localhost:5000/manga/page/${router}`)
      const json = await response.json()
      setMangs(json)
    }
    if(!mangs){ 
         load()
        }
  },[])



  if (!mangs) {
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

  if (mangs) return (
  <HeadComponent title={`глава#${router}`}>
      <h1>chapter id</h1> 

    <div className={s.chapter__pages}>
        { mangs.map(m =>(

                    <img src={`http://localhost:5000/${m.url_page}`}></img>

                ))}
      </div>
  </HeadComponent>
  )
}
export async function getServerSideProps(ctx) {
// index.getInitialProps = async (ctx) => {
//   if(!ctx.req){
//     return {manga:null}
//   }

  const response = await fetch(`http://localhost:5000/manga/page/${ctx.query.id}`)
  const manga = await response.json()
  return { props: { manga } }
  // return { manga }
}

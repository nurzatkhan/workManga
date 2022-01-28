import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HeadComponent } from '../components/HeadComponent';
const axios = require ('axios').default

export default function index({posts}) {

return (<>

  <HeadComponent title={"новости"}>
      <h1>главные новости сайта</h1>

      <Link href={`/manga`} as={`/manga`}>
        <a>коталог Manga</a>
      </Link>
  </HeadComponent>
  </>
  )
}

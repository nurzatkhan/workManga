import Head from 'next/head';
import Link from 'next/link';
import s from '../styles/HeadComponent.module.css'
import { useEffect, useState } from 'react';
export function HeadComponent({children, title='manga', header , items}){
    const[activeMenu,setMenuActive]=useState(true)
    return(
        <> 
        <Head>
            <title>MDD | {title}</title>
            <meta name="viewport" content="MDD ,Monkey D Dragon ,dragon ,Monkey ,монкей д дрогон ,ercew ,asfq "/>
            <meta name="description" content="описание то что отображается с низу гугла"/>
            <meta charSet="utf8"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
        </Head>
        
        <nav> 
        <button onClick={()=>setMenuActive(!activeMenu)}><img src="http://localhost:5000/lines_menu_burger_icon_123889.svg"/></button>

        <div className= {activeMenu ? "burger__menu" : "burger__menu active"} onClick={()=>setMenuActive(true)}>
            <div className='menu__content' onClick={e => e.stopPropagation()}>
                <div className='content__li'>
                    <div   ></div>
                 <Link href={`/`} as={`/`}><a>новости Manga</a></Link>
                 <Link href={`/manga`} as={`/manga`}><a>все Manga</a></Link>
                 </div>
            </div>
            <div className='menu__blur'></div>

        </div>

        <h3>Monkey D.Dragon | MDD </h3>

        </nav>
        <main>
            {children}
        </main>
        <style jsx global>{`
        html {
            color:#191970;
            background-image: url(https://wallpapercave.com/wp/wp2771916.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }

        *{
            font-family: 'Josefin Sans', sans-serif; 
            margin: 0px;
            padding: 0px;

}
     
        }
        nav{
            position:fixed;
            height:90px;
            left:0;
            top:0;
            right:0;
            background:	#8B008B;
            display:flex; 
            justify-content: space-around; 
            align-items:center;
            font-family: 'Anton', sans-serif;
            z-index: 255;
            }
        nav h1{
            color: black;
        }
        nav img{
            height: 40px;
            width: 40px;
            color:red;
        }
        main{
            margin-top:120px;
        }
        nav button{
            position:fixed;
            left:25px;
            top: 22px;
            font-size: 45px;
            background-color: rgba(255, 255, 255, 0);
            border: none;
            cursor: pointer;
            color:red;
            
        }
        .burger__menu{
            position:fixed;
            left:0;
            top: 90px;
            height: 100vh;
            width: 100vw;
            display:flex;
            transform: translateX(-200%);
            transition: 0.2s;
        }
        .burger__menu.active{
            transform: translateX(0);
        }
        .menu__content{
            
            width :30%;
            height: 100%;
            background-color: rgb(189, 189, 189);

        }
        .menu__blur{
            width :100%;
            height: 100vh;
            left:30%;
            backdrop-filter: blur(2px);
            position: absolute;
        }
        @media screen and (max-width:768px) {
            .menu__content{
                width: 100%;
        
            }
            .menu__blur{
                backdrop-filter: none;
            }
        }
        `}</style>

        </>
    )
}
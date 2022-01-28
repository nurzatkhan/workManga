import { useEffect, useState,useCallback } from 'react';
import { HeadComponent } from '../../../components/HeadComponent';
const axios = require ('axios').default

export default function index({posts}) {
    const[asd1,setAsd1]= useState()

    const[photo,setPhoto]= useState()
    const[name,setName]= useState()
    const[description,setDescription]= useState()


    const sendMangaName= (e) =>{
        e.preventDefault()
        try {
            if (!name){
                setAsd1('name undefined')
            }if (!description){
                setAsd1("description undefined")
            }if (!photo){
                setAsd1("foto img undefined")
            }
            if(!name && !description && !photo){setAsd1("full undefined")}
            if(name && description && photo){
            const data = new FormData()
            data.append('name',name)
            data.append('description',description)
            data.append('photo',photo)  
            axios.post('http://localhost:5000/manga/name',data)
            console.log("всё ок")
        }
        }catch(error){

        }
    } 
        
return (
  <HeadComponent title={'name and nGlava'}>
      <h1>{asd1}</h1>
       <form>
        <h1>станица</h1>
            <input
                value={name} 
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="имя новой манги"/>
            
            <textarea 
                type="text" 
                name="description"
                onChange={e => setDescription(e.target.value)}
                placeholder="вот тут должен быть описание манги"/>

            <input type="file" onChange={e => setPhoto(e.target.files[0])}/>
        
        <button  onClick={sendMangaName}>добавить</button>
        </form>
  </HeadComponent>
  )
}

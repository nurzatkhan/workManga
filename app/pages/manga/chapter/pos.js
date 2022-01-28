
import { useEffect, useState,useRef, createRef } from 'react';
import { HeadComponent } from '../../../components/HeadComponent';
const axios = require ('axios').default
import s from '../../../styles/posChapter.module.css'


export default function index({posts})  {
  const[photo,setPhoto]= useState([])

  const[car,setCar]= useState(null)
  const[drag, setDrag]=useState(false)

  const[mangaId, setMangaId]=useState()
  const[mangaName, setMangaName ]=useState()

  const fileinputref = useRef()

  const[mangsSelect,setMansSelect]= useState([])

  const[error,setError]= useState()

  const[inc,setInc]= useState(0)


useEffect(() =>{
          async function load(){
            const response = await fetch('http://localhost:5000/manga/name')
            const json = await response.json()
            setMansSelect(json)
          }
          load()
        },[])


 function urlData(data){
  for (var i = 0; i < data.length; i++){
    datafilescrete((inc+i),data[i])
}
setInc(inc+data.length)

}
function datafilescrete(k,data){
  setPhoto((prevPho)=>[...prevPho,{url:data.result, pOp:data.file, order:k, id:k}])
}

function ser(files){
  const arrFiles = (Object.values(files))
  for(var i = arrFiles.length - 1; i >= 0; i--) {
    if(!(arrFiles[i].type).includes('image/')){ arrFiles.splice(i, 1);}}
  Promise.all(Array.prototype.map.call(arrFiles, readAsDataURL))
  .then(urls => {urlData(urls)
  })
  .catch(error => {
  });
}
function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onerror = reject;
      fr.onload = () => {
          resolve({result: fr.result, file: file});
      }
      fr.readAsDataURL(file);
  });
}
const sendMangaName= (e) =>{
      e.preventDefault()
      if(!mangaName){        setError("Ведите имя главы")      }
      if(!mangaId){        setError("Манга не определена")      }
      if(!photo[0]){        setError("страницы не определены")      }

      if(mangaName && mangaId && photo[0]){
        const data = new FormData()
          data.append(`mangaId`, mangaId)
          data.append(`mangaName`, mangaName)
          setMangaName("")
      for (var i = 0; i < photo.length; i++){
          data.append(`${i}`,photo[i].pOp)
      }
      setPhoto([])           
          axios.post('http://localhost:5000/manga/name',data)
      }}


function dragStarthandler(e,m){
  setCar(m)
}
function dragEndHandler(e){
  e.target.style.borderColor = "black"

}
function dragOverHandler(e){
  e.preventDefault()
  e.target.style.borderColor = "gray"
}
function dragHandler(e,m){
  e.preventDefault()
  setPhoto(photo.map(c => {
    if(c.id === m.id){
      return {...c, order: car.order}
    }
    if(c.id === car.id){
      return {...c, order: m.order}
    }
    return c
  }))
  e.target.style.background = "white"
}        

const sortCards = (a, b) => {
if (a.order > b.order){
  return 1
}else {
  return -1
}
}


function DragInputHendler(e){
  e.preventDefault();
  setDrag(true)
}
function DraginputLeave(e){
  e.preventDefault();
  setDrag(false)
}
function DragInputDropHendler(e){
  e.preventDefault();
  // const files = Object.values(e.dataTransfer.files)
  // console.log(files)

        ser(e.dataTransfer.files)
  // console.log([...e.dataTransfer.items])
  setDrag(false)
}
function deleteClick (e,f){
  e.preventDefault()
  setPhoto(photo.filter(value => !(value.order===f)))


}
return (<div className={s.bo}>
  <HeadComponent title={'name and nGlava'}>
     <form>
      <div className={s.divBody}>
          <div className={s.divInutsForm}> 
                {error
                  ?error
                  :<></>
                }
                  <div className={s.divInutsFormSelect}>
                      <select onChange={e => setMangaId(e.target.value)}>
                          <option selected disabled>Выберите мангу</option>

                          {mangsSelect.map(m =>( <option value={m.id}>{m.name}</option>))}
                      
                      </select>
                  </div>
                  <div className={s.divInutsFormName}>
                      <input type="text" value={mangaName} onChange={e => setMangaName(e.target.value)} />
                  </div>
                  

                  <div className={s.divInutsFormDragOnDrop2}>
                      {drag
                          ? <div
                          className={s.divInutsFormDragOnDropDiv}

                              onDragStart={e => DragInputHendler(e)}
                              onDragLeave={e=> DraginputLeave(e)}
                              // onDragOver={e => DraginputLeave(e)}
                              onDragOver={e => DragInputHendler(e)} 
                              onDrop={e=> DragInputDropHendler(e)}
                                  >
                                  отпустите файлы
                                  чтоб загрузить</div>
                          : <div className={s.divInutsFormDragOnDrop}
                              onDragStart={e => DragInputHendler(e)}
                              onDragLeave={e=> DraginputLeave(e)}
                              onDragOver={e => DragInputHendler(e)}
                                  
                                  ><p>переташите или нажмите на кнопку</p>
                                  <div>
                                  <button onClick={(event)=>{
                                      event.preventDefault()
                                      fileinputref.current.click()
                                  }}>+</button>
                                      <input ref={fileinputref} accept='image/*' style={{display:"none"}} multiple type="file" onChange={e => ser(e.target.files)} />
                                  </div>
                          </div>
                      }     
                  </div>

                  <div className={s.divInutsFormButtonSabmit}>
                      <button onClick={sendMangaName}>отправить на сервер</button>
                  </div>
          </div>

          <div className={s.app}>
                          { photo.sort(sortCards).map(m =>(
                      <div 
                      onDragStart={(e) => dragStarthandler(e,m)}
                      onDragLeave={(e) => dragEndHandler(e)}
                      onDragEnd={(e) => dragEndHandler(e)}
                      onDragOver={(e) => dragOverHandler(e)}
                      onDrop={(e) => dragHandler(e,m)}
                      draggable = {true}
                      key={m.id.toString()}
                      className={s.card}
                      >
                                <button className={s.butonCardX} key={m.id.toString()} onClick={e => deleteClick(e , m.order)}>x</button>
                              <img src={m.url} key={m.id.toString()}></img>
                      </div>
                          ))}
              </div>

          </div>
      </form>
      </HeadComponent>
      </div>
)
}

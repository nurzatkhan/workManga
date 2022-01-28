const db = require('../db')
const path = require('path')
const crypto = require('crypto');


class mangaNameControllers{
    async createMangaName(req, res){
        if(!req.body.mangaName){
            return res.json("Ведите имя главы")
          }
          if(!req.body.mangaId){
            return res.json("Манга не определена")
          }
          if(!req.files){
            return res.json("страницы не определены")
          }
          if(req.body.mangaName && req.body.mangaId&& req.files){
            try{
                const id_manga_chapter = await db.query('insert into manga_chapter (id_manga_name, name_manga_chapter ) values ($1, $2) returning id',[req.body.mangaId,req.body.mangaName])

            var result = Object.values(req.files)
            for (var i = 0; i < result.length; i++){    
                var filename =(crypto.randomBytes(20).toString('hex')+result[i].name)
                var page_namber = i+1
                result[i].mv('public/'+filename)
                const newmanga = await db.query('insert into manga_page (id_manga_chapter, page_namber, url_page) values ($1, $2, $3) returning id;',[id_manga_chapter.rows[0].id, page_namber, filename])
    
            }
                return res.json("OK");
            }
            catch(e){
                console.log(e)

            }
            
    }}
    

    async getMangaName(req, res){
        try{
        const user = await db.query('select * from manga_name')
        res.json(user.rows)
        }catch(e){console.log(e)}
        
    }
    async getONEmangaName(req, res){
        try{
            const id = req.params.id
            const user = await db.query('select * from manga_name where id = $1', [id])
            res.json(user.rows)

        }catch(e){console.log(e)}
       
    }
    async updateMangaName(req, res){
        const {id ,name,description} = req.body
        const newGabit = await db.query('UPDATE manga_name set name = $2 where id = $1 returning *', [id,name])
        console.log(newGabit)
        res.json(newGabit.rows[0])
    }
    async deleteMangaName(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM manga_name where id = $1', [id])
        res.send("ok я удалил");
    }
}
module.exports =new mangaNameControllers()

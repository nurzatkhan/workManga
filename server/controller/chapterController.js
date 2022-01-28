const db = require('../db')
const path = require('path')
const crypto = require('crypto');


class mangaNameControllers{
    
    async createChapter(req, res){
    try{
                  
        var result = Object.values(req.files)
        for (var i = 0; i < result.length; i++){    
            var filename =(crypto.randomBytes(20).toString('hex')+result[0].name)  
            result[i].mv('public/'+filename)
        }
            return res.json(123);


            
    }catch(e){console.log(e)}}

    async getChapter(req, res){
        

    }
    async getONEChapter(req, res){
        try{
            const id = req.params.id
            const user = await db.query('select * from manga_chapter where id_manga_name = $1', [id])
            res.json(user.rows)
        }catch(e){console.log(e)}
        

    }
    async updateChapter(req, res){
        
    }
    async deleteChapter(req, res){
        
    }
}
module.exports =new mangaNameControllers()

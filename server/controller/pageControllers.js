const db = require('../db')
const path = require('path')
const crypto = require('crypto');


class mangaPageControllers{
    
    async createChapter(req, res){
}

    async getPage(req, res){

    }
    async getOnePage(req, res){
        try{const id = req.params.id
            const user = await db.query('select * from manga_page where id_manga_chapter = $1', [id])
            console.log(id)
            res.json(user.rows)}
        catch(e){

        }
       
    }
    async updatePage(req, res){
        
    }
    async deletePage(req, res){
        
    }
}
module.exports =new mangaPageControllers()

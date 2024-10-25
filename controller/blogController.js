const dbConnect = require('../dbConnect/sqlConnect');
const db = dbConnect();


const createBlog = async (req,res) => {
    const {title, contents, author, category, tags } = req.body;
    const sql = `INSERT INTO blog (title,contents,author,category,tags) VALUES (?, ?, ?, ?, ?)`;
    
    // db.query(sql, [title, contents, author, category, JSON.stringify(tags)], (err, result) => {
    //     if (err) return res.status(500).json({error:err.message});
    //     res.status(201).json({id:result.insertId,title,contents, author, category,tags});
    // });

    try {
        const db = await dbConnect();
        const [result] = await db.execute(sql, [title, contents, author, category, JSON.stringify(tags)]);
        res.status(201).json({id:result.insertId,title,contents, author, category,tags});
    } catch (err) {
        res.status(500).json({error:err.message});
    }
}

const getAllPost = async (req,res) => {
    const sql = `SELECT * FROM blog_db.blog`;
    try {
        const [results] =  await (await db).execute(sql);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const getSinglePost = async (req,res) => {
    const sql = `SELECT * FROM blog WHERE id = ?`;

    try {
        const [result] = (await db).query(sql,[req.params.id]);
        if (result.lenght === 0) {
            return res.status(404).json({message: 'No blog post was found'});
        }
        res.status(200).json(result[0])
    } catch (error) {
        res.status(500).json({error:err.message});
    }
}

const searchBlog = async (req,res) => {
    const searchTerm = req.query.term;
    const sql = `SELECT * FROM blog WHERE title LIKE ? OR contents LIKE ?`;

    try {
        //await the query 
        const [results] = await (await db).execute(sql, [`%${searchTerm}%`, `%${searchTerm}%`]);
         console.log(results.length)

         //check if they are results
         if (results.length === 0) {
            return res.status(404).json({message:'No results found'});
         }  
         //send results back as JSON
         res.status(200).json(results); 
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const updatePost = async(req,res) => {
    const {title,contents,category,tags} = req.body;
    const sql = `UPDATE blog SET title = ?, contents = ?, category = ?, tags = ? WHERE id = ?`;

    try {
        const result = await (await db).query(sql, [title,contents,category,JSON.stringify(tags), req.params.id]);
        if (result.affctedRows === 0) {
            return res.status(404).json({message:'Post not found'});
        }
        res.status(200).json(result)
    } catch (error) {
        
    }
}

const deletePost = async (req,res) =>{
    const sql = `DELETE FROM blog WHERE id = ?`;

    try {
        const results = (await db).query(sql, [req.params.id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({message:"Post not found"});
        }
        res.status(200).json({message:"Post deleted"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports = {createBlog, getAllPost, getSinglePost,deletePost,searchBlog,updatePost}
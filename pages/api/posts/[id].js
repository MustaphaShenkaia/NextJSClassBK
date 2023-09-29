import Posts from '../../../data.json'; 

export default function handlerId(req,res){

    const {method, cookies, query} = req
    console.log(query); // { id: '1' }

    const {id} = query
    console.log(id); // 1

    const post = Posts.posts.find(ps => ps.id == id)
    
    if(!post) {
        res.status(404).json({message: "Id bulunamadı"})
    } else {
        res.status(200).json(post)
        console.log(post)
    }

    
}
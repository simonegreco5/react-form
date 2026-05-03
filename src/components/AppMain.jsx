// sezione import
import { useState } from 'react'
import articleList from '../assets/array.js'

export default function AppMain(){

    const [articles, setArticles] = useState(articleList)
    const [newArticle, setNewArticle] = useState('')

    function submitArticle(e){
        e.preventDefault()
        console.log('article submitted')

        // add new article (use setArticles)

        // setArticles([newArticle, ...articles])  // unshift 
        // setArticles([...articles, newArticle]) // push
        // N.B. così stiamo passando una stringa

        // siccome ci serve un oggetto con id univoco 
        // creiamo una variabile con id: data attuale / title: newArticle
        const newItem = {
            id: Date.now(),
            title: newArticle
        }
        setArticles([newItem, ...articles]) 
        setNewArticle('') // svuotiamo l'input dopo l'aggiunta
    }

    return (
        <div className="container">

            {/* submit */}
            <form onSubmit={submitArticle}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add new article" 
                    value={newArticle} onChange={e => setNewArticle(e.target.value)} />
                    <button className="btn btn-outline-secondary">Add</button>
                </div>
            </form>

            {/* lista articoli */}
            <ul className="list-group list-group-flush">
                {
                    articles.map((item) => (
                        <li className="list-group-item" key={item.id} >{item.title}</li>
                    ))
                }
            </ul>

        </div>
    )
}
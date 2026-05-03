// sezione import
import { useState } from 'react'
import articleList from '../assets/array.js'

export default function AppMain(){

    const [articles, setArticles] = useState(articleList)
    const [newArticle, setNewArticle] = useState('')

    // function - add article
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

    // function - remove article
    function removeArticle(i){
        const filterArticles = articles.filter((item) => i !== item.id)
        // fintanto che i !== item.id(ovvero l'articolo da elminare) li inseriamo nel nuovo array
        // quando i === item.id viene scartato
        console.log(filterArticles)

        setArticles(filterArticles) // aggiorniamo l'array (visivamente l'articolo adesso viene rimosso)
    }

    return (
        <main>
          <div className="container">

            {/* submit */}
            <form onSubmit={submitArticle}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control border-purple" placeholder="Add new article" 
                    value={newArticle} onChange={e => setNewArticle(e.target.value)} />
                    <button className="btn btn-purple">Add</button>
                </div>
            </form>

            {/* lista articoli */}
            <ul className="list-group list-group-flush rounded-4 border-purple">
                {
                    articles.map((item) => (
                        <li className="list-group-item d-flex justify-content-between" key={item.id} >
                            {item.title}
                            <button onClick={()=> removeArticle(item.id)}>
                                <i className="bi bi-trash3"></i>
                            </button>   
                        </li>
                    ))
                }
            </ul>

          </div>
        </main>
    )
}
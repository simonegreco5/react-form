// sezione import
import { useState } from 'react'
import articles from '../assets/array.js'

export default function AppMain(){

    const [article, setArticle] = useState(articles)
    const [newArticle, setNewArticle] = useState('')

    return (
        <div className="container">

            {/* submit */}
            <div class="input-group mb-3">
               <input type="text" className="form-control" placeholder="Add new article" 
               value={newArticle} onChange={e => setNewArticle(e.target.value)} />
               <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>

            {/* lista articoli */}
            <ul className="list-group list-group-flush">
                {
                    article.map((item) => (
                        <li className="list-group-item" key={item.id} >{item.title}</li>
                    ))
                }
            </ul>

        </div>
    )
}
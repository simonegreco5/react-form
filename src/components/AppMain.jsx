// sezione import
import articles from '../assets/array.js'

export default function AppMain(){

    return (
        <div className="container">

            <ul class="list-group list-group-flush">

                {
                    articles.map((item) => (
                        <li className="list-group-item" key={item.id} >{item.title}</li>
                    ))
                }

            </ul>

        </div>
    )
}
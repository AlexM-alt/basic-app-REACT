import React from 'react'
import Article from "../components/Article"

const articles = [
    {
        id: 1,
        title: "Article 1",
        author: "John",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit quibusdam similique natus earum at tempora quasi velit perferendis veritatis eligendi recusandae quisquam vel, quae quia dolores aspernatur assumenda est."
    },

    {
        id: 2,
        title: "Article 2",
        author: "Alex",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit quibusdam similique natus earum at tempora quasi velit perferendis veritatis eligendi recusandae quisquam vel, quae quia dolores aspernatur assumenda est."
    },

    {
        id: 3,
        title: "Article 3",
        author: "Tom",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit quibusdam similique natus earum at tempora quasi velit perferendis veritatis eligendi recusandae quisquam vel, quae quia dolores aspernatur assumenda est."
    },
]
const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}
 
export default HomePage;
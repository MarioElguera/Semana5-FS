import { useNavigate } from 'react-router-dom';


const newsList = [
    { id: 1, title: "Noticia 1", description: "Descripción de la noticia 1" },
    { id: 2, title: "Noticia 2", description: "Descripción de la noticia 2" },
    { id: 3, title: "Noticia 3", description: "Descripción de la noticia 3" },
];

export default function News() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Noticias</h1>
            <ul>
                {newsList.map((news) => (
                    <li key={news.id}>
                        <button onClick={() => navigate(`/news/${news.id}`)}>
                            {news.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}

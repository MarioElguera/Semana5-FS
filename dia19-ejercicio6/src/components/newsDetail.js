import { useParams } from 'react-router-dom';

const newsDetails = {
    1: { title: "Noticia 1", content: "Contenido detallado de la noticia 1" },
    2: { title: "Noticia 2", content: "Contenido detallado de la noticia 2" },
    3: { title: "Noticia 3", content: "Contenido detallado de la noticia 3" },
};

export default function NewsDetail() {
    const { id } = useParams();
    const newsItem = newsDetails[id];

    if (!newsItem) {
        return <div>Noticia no encontrada</div>;
    }

    return (
        <div>
            <h1>{newsItem.title}</h1>
            <p>{newsItem.content}</p>
        </div>
    );
}

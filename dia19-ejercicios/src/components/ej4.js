import { useLoaderData } from 'react-router-dom';

export default function PostJson() {
    const post = useLoaderData();
    return (
        <div>
            <h1>Title:  "{post.title}"</h1>
        </div>
    );
}

import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const { id } = useParams();

    return (
        <div>
            <h1>Perfil del usuario: {id}</h1>
        </div>
    );
}

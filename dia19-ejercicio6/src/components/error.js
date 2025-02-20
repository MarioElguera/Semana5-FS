import React from 'react';

function ErrorPage({ statusCode }) {
    return (
        <div>
            <h1>Error</h1>
            <p>{statusCode
                ? `Hubo un error al cargar la página: ${statusCode}`
                : 'Algo salió mal.'}</p>
        </div>
    );
}

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res?.statusCode || err?.statusCode || 404;
    return { statusCode };
};

export default ErrorPage;

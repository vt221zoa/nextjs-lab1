import React, { Suspense } from "react";

export default function FavoriteArticle({ id }: { id: number }) {
    return (
        <Suspense fallback={<div>Завантаження статті #{id}...</div>}>
            <FavoriteArticleContent id={id} />
        </Suspense>
    );
}

async function FavoriteArticleContent({ id }: { id: number }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await res.json();

    return (
        <div className="border p-3 mb-3">
            <h3 className="font-bold">{article.title}</h3>
            <p>{article.body}</p>
        </div>
    );
}
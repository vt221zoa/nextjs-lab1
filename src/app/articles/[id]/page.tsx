import { notFound } from "next/navigation";
import { Comment } from '@/types/comment';

export async function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({ id: (i + 1).toString() }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const resArticle = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!resArticle.ok) return notFound();
    const article = await resArticle.json();

    const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments: Comment[] = await resComments.json();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
            <p className="mb-6">{article.body}</p>
            <h2 className="text-xl font-semibold mb-2">Коментарі</h2>
            <ul className="space-y-4">
                {comments.map((comment) => (
                    <li key={comment.id} className="border p-4 rounded">
                        <p className="font-semibold">{comment.name} ({comment.email})</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
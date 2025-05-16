import { Post } from "@/types/post";

interface ArticleListProps {
    posts: Post[];
}

export default function ArticleList({ posts }: ArticleListProps) {
    return (
        <ul className="space-y-4">
            {posts.map((post) => (
                <li key={post.id} className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                </li>
            ))}
        </ul>
    );
}
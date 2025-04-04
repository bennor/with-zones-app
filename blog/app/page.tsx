import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <h3>This is our blog</h3>
      <ul>
        <li>
          {/* This URL is scoped to the blog app, and will inherit its `basePath`. */}
          <Link href="/post/1">Post 1</Link>
        </li>
        <li>
          {/* This URL is scoped to the blog app, and will inherit its `basePath`. */}
          <Link href="/post/2">Post 2</Link>
        </li>
      </ul>
      {/* We need to break out of this zone, so we can't use `Link`. */}
      <a href="/">Home</a>
    </div>
  );
}

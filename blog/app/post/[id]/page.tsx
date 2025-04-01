import Link from 'next/link';

export default async function Post({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      {/* This URL is scoped to the blog app, and will inherit its `basePath`. */}
      <Link href="/">Back to blog</Link>
    </div>
  );
}

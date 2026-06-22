import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/entities/post";
import { BlogPostPage, buildPostMetadata } from "@/views/BlogPost";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return buildPostMetadata(slug);
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return <BlogPostPage post={post} />;
}

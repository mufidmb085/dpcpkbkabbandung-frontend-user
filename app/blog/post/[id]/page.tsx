/*
 * Copyright (C) 2025 Mufid Muhammad Baihaqi mufidmb085@gmail.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { posts } from '@/data/dummy/blog-post';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p className="text-gray-500">The post with the given ID does not exist.</p>
      </div>
    );
  }

  return (
    <div className={"flex flex-col justify-center items-center"}>
      <div className={"flex flex-col justify-center items-center max-w-[800px]"}>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <p className={"text-xs"}>{post.body}</p>
      </div>
    </div>
  );
}
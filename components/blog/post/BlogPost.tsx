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


import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

interface BlogPostProps {
  id: string;
  title: string;
  subtitle: string;
  body: string;
}

const BlogPost: React.FC<BlogPostProps> = ({title, subtitle, body }) => {
  return (
    <div className={"flex flex-col flex-grow w-screen sm:max-w-[800px] justify-center"}>
      <Card>
        <CardHeader>
          <div className={"flex flex-col justify-center items-start"}>
            <h1 className={"text-2xl font-medium"}>{title}</h1>
            <h2 className={"text-xl"}>{subtitle}</h2>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col justify-start items-start">
            <p className={"text-sm"}>{body}</p>
          </div>
        </CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
    </div>
  )
}

export default BlogPost;
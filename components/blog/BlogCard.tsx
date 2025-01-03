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

"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface BlogCardProps {
  id: string;
  src: string;
  title: string;
  author: string;
  date: string;
}

const BlogCard: React.FunctionComponent<BlogCardProps> = ({id, src, title, author, date}) => {

  const [isLoaded, setIsLoaded] = React.useState(false);
  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <Link className={"w-full h-full"} href={"/"}>
      <Card className={"flex w-full h-full p-0 m-0"} isPressable={true}>
        <CardHeader className={"justify-center p-0 m-0 aspect-square w-full"}>
          <Skeleton className={"aspect-square"} isLoaded={isLoaded}>
            <Image className={"object-cover object-center aspect-square"} src={src} alt={title} isZoomed={true} loading={"lazy"} onLoad={() => toggleLoad()} />
          </Skeleton>
        </CardHeader>
        <CardBody>
          <h1 className={"text-xl font-medium uppercase line-clamp-3"}>{title}</h1>
        </CardBody>
        <CardFooter>
          <div className="flex flex-col gap-1 justify-center items-start text-xs font-light">
            <p>{author}</p>
            <p>{date}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>

  )
}

export default BlogCard;
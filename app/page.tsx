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

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroSections } from "@/config/dummy/hero-section";
import { Image } from "@nextui-org/image";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()]);
  return (
    <section className={"flex flex-col items-center justify-center text-center"}>
      <section className={"embla"}>
        <div className={"embla__viewport"} ref={emblaRef}>
          <div className={"embla__container"}>
            {heroSections.map((item, index) => (
              <div className={"embla__slide"} key={index}>
                <div className="relative">
                  <Image className={"z-0"} src={item.src} alt={item.alt} radius={"none"}  />
                  <div className="absolute z-10 inset-0 flex flex-col items-start justify-center font-bold bg-overlay/20 p-8">
                    <h1 className={"text-primary text-xl uppercase sm:text-4xl text-start"}>{item.title}</h1>
                    <h2 className={"text-primary-foreground first:capitalize text-medium sm:text-2xl text-start"}>{item.subTitle}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

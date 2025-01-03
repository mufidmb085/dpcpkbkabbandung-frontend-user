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

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import React from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";

export const Toolbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar className={"px-2 sm:px-6"} maxWidth={"full"} shouldHideOnScroll={true} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className={"sm:hidden"}
          icon={isMenuOpen ? <span className="material-symbols-outlined text-content1-foreground">close</span> : <span className="material-symbols-outlined text-content1-foreground">menu</span>}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand className={"gap-2 hidden sm:block"}>
          <Link className={"text-content1-foreground gap-1"} href="/">
            <span className={"material-symbols-outlined"}>deployed_code</span>
            <p>Title</p>
          </Link>
        </NavbarBrand>
        <NavbarBrand className={"sm:hidden"}>
          <p>Title</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ul className={"hidden sm:flex sm:flex-row sm:gap-2"}>
          {siteConfig.navbarMenuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Button size="md" color={pathname === item.href ? "primary" : "default"} variant={pathname === item.href ? "solid" : "light"} as={Link} href={item.href} className={"w-fit"}>
                <span className={"material-symbols-outlined"}>{item.icon}</span>{item.label}
              </Button>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarMenu className={"sm:hidden p-2"}>
        <ul className={"w-full h-screen flex flex-col flex-wrap"}>
          {siteConfig.navbarMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Button size="md" color={pathname === item.href ? "primary" : "default"} variant={pathname === item.href ? "solid" : "light"} as={Link} href={item.href} className={"w-full justify-start gap-1"} onPress={() => setIsMenuOpen(false)}>
                <span className={"material-symbols-outlined"}>{item.icon}</span>{item.label}
              </Button>
            </NavbarMenuItem>
          ))}
        </ul>
      </NavbarMenu>
    </Navbar>
  )
}
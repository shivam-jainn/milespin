import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, ButtonGroup } from "@nextui-org/button"
import Image from "next/image";
export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<img
				src="/logo.svg"
				alt="Picture of logo"
			/>

			<img
				src="/hexa.svg"
				alt="Picture of logo"
			/>





			<Button fullWidth variant="flat" color="default" radius="sm" className="text-white border-2 border-white font-bold max-w-[300px]">Verify</Button>
			<Button fullWidth variant="bordered" className="text-white border-white font-bold max-w-[300px]">Explore</Button>

		</section>
	);
}

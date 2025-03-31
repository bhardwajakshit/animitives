import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center py-5 text-xs md:text-sm">
      Crafted by
      <a
        href="https://github.com/bhardwajakshit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="ml-2"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/66516548?v=4"
          width={24}
          height={24}
          alt="Picture of the author"
          className="rounded-full border border-neutral-200 hover:animate-spin dark:border-neutral-700"
        />
      </a>
    </footer>
  )
}

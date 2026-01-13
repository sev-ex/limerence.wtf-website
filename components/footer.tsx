import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <span className="text-muted-foreground text-sm">made by</span>
        <a
          href="https://github.com/sevex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-border group-hover:border-primary transition-colors">
            <Image
              src="https://avatars.githubusercontent.com/u/253883191?v=4"
              alt=".sevex"
              width={28}
              height={28}
              className="object-cover"
            />
          </div>
          <span className="font-medium text-sm">.sevex</span>
        </a>
      </div>
    </footer>
  )
}

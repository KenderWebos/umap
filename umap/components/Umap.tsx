/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iiiccqcgPcf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">University Map</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <MapIcon className="h-5 w-5" />
                  <span>Campus Map</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <CalendarIcon className="h-5 w-5" />
                  <span>Events</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <CompassIcon className="h-5 w-5" />
                  <span>Guided Tour</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <InfoIcon className="h-5 w-5" />
                  <span>Information</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <div className="relative h-full w-full">
          <div className="absolute inset-0">
            <div className="h-full w-full" />
          </div>
          <div className="absolute bottom-4 left-4 z-10 flex w-[90%] max-w-md flex-col gap-2 rounded-lg bg-background p-4 shadow-lg sm:w-[80%] md:w-[70%] lg:w-[60%]">
            <Input
              type="search"
              placeholder="Search campus..."
              className="w-full rounded-lg bg-muted px-4 py-2 text-sm"
            />
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm">
                <BuildingIcon className="h-5 w-5" />
                <span>Buildings</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm">
                <CoffeeIcon className="h-5 w-5" />
                <span>Cafes</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm">
                <BookIcon className="h-5 w-5" />
                <span>Libraries</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm">
                <CompassIcon className="h-5 w-5" />
                <span>Tours</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed bottom-4 right-4 z-10 lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-xs lg:static lg:max-w-none lg:border-r">
          <div className="flex h-full flex-col border-r bg-background p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Campus Map</h2>
              <Button variant="ghost" size="icon">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="mt-4 flex-1 overflow-auto">
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  <BuildingIcon className="h-5 w-5" />
                  <span>Buildings</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  <CoffeeIcon className="h-5 w-5" />
                  <span>Cafes</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  <BookIcon className="h-5 w-5" />
                  <span>Libraries</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  <CompassIcon className="h-5 w-5" />
                  <span>Guided Tours</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  <CalendarIcon className="h-5 w-5" />
                  <span>Events</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  <InfoIcon className="h-5 w-5" />
                  <span>Information</span>
                </Link>
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed bottom-4 right-4 z-10 lg:hidden">
            <InfoIcon className="h-6 w-6" />
            <span className="sr-only">Toggle information</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs lg:static lg:max-w-none lg:border-l">
          <div className="flex h-full flex-col border-l bg-background p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Building Information</h2>
              <Button variant="ghost" size="icon">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="mt-4 flex-1 overflow-auto">
              <div className="grid gap-4">
                <div>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Building"
                    className="rounded-lg"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">Main Library</h3>
                  <p className="text-sm text-muted-foreground">
                    The Main Library is the largest library on campus, offering a wide range of resources and study
                    spaces for students.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span>8am - 10pm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-5 w-5" />
                      <span>555-1234</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5" />
                      <span>123 Main St</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-5 w-5 fill-primary" />
                      <span>4.8 (120 reviews)</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm"
                  >
                    <HeartIcon className="h-5 w-5" />
                    <span>Add to Favorites</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CoffeeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
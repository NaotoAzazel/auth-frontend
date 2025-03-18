import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

export const fontSans = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const fontHeading = Manrope({
	subsets: ['latin'],
	variable: '--font-heading',
})

export const metadata: Metadata = {
	title: 'Auth app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					fontSans.variable,
					fontHeading.variable,
					'relative h-full font-sans antialiased'
				)}
			>
				<main className='relative flex min-h-screen flex-col'>
					<div className='flex-1 flex-grow'>{children}</div>
				</main>
			</body>
		</html>
	)
}

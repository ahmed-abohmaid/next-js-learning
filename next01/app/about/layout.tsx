import { Metadata } from 'next'
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <nav>About Navbar</nav>
    <main className={styles.main}>
    {children}
    </main>
    </>
  )
}
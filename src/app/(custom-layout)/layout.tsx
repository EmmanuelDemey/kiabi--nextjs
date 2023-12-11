export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <h2>Ceci est le titre secondaire</h2>
        {children}
    </>
  )
}

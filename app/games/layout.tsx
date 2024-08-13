const GamesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <h2>Games</h2>
      {children}
    </div>
  )
}
export default GamesLayout

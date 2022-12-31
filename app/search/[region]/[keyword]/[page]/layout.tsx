import SearchForm from 'app/components/Form'

type LayoutProp = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProp) {
  return (
    <div>
      <SearchForm />
      <main>{children}</main>
    </div>
  )
}

type Props = {
  params: {
    name: string
  }
}

export default function Head({ params }: Props) {
  const name = params.name
  return (
    <>
      <title>Country | {name}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content={`${name} is such and interesting country and this is its info`}
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

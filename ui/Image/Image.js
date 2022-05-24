import NextImage from 'next/image'
import { useRouter } from 'next/router'

const fakeImage = ({ src }) => src

export default function Image({ src, ...otherProps }) {
  const { basePath } = useRouter()
  const srcPath = `${basePath}/${src}`

  return (
    <>
      <NextImage loader={fakeImage} src={srcPath} {...otherProps} />
    </>
  )
}

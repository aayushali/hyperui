import type { FunctionComponent } from 'react'

type Props = {
  text: string
  url: string
}

const Banner: FunctionComponent<Props> = ({ text, url }) => (
  <aside className="p-3 text-center text-white bg-black">
    <p className="text-sm font-medium text-center">
      <a
        href={url}
        className="hover:opacity-75"
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>
    </p>
  </aside>
)

export default Banner

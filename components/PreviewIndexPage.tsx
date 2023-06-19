import IndexPage from 'components/IndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
  type Song,
  songQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const songs: Song[] = usePreview(token, songQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview posts={posts} songs={songs} settings={settings} />
}

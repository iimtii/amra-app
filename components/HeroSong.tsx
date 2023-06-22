import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Song } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroSong(
  props: Pick<
    Song,
    'name' | 'date' | 'author'
  >
) {
  const { name, date, author} = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/songs/${name}`} className="hover:underline">
              {name || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        </div>
      </div>
    </section>
  )
}

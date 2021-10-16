import Link from 'next/link'
import Date from '../utils/date'

export default function BlogList({ allPostsData }) {
    return (

            <div className="max-w-6xl mx-auto h-48">
                <ul>
                    {allPostsData.map(({ id, date, title, description }) => (
                        <li className="px-8 py-2 border-b border-card-border hover:text-blue-800" key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>
                                    <div className="text-xl font-medium">{title}</div>
                                    <p className="mt-2 mb-4 font-light">{description}</p>
                                    <p className="text-sm font-hairline"> <Date dateString={date} /></p>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

    )
}
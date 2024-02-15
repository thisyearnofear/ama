'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface AMA {
  id?: string
  date: string
  subject: string
  person: string
  bio: string
}

export default function Home() {
  const [warpcastURL, setWarpcastURL] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [upcomingAMAs, setUpcomingAMAs] = useState<AMA[]>([])
  const [newAMA, setNewAMA] = useState<AMA>({
    date: '',
    subject: '',
    person: '',
    bio: '',
  })

  return (
    <div className="flex flex-col items-center py-12 w-full text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold py-6">AMACASTER</h2>
      <h3 className="text-xl font-medium py-2">Previously</h3>

      {/* Two-column layout for names */}
      <div className="flex justify-center w-full gap-8 mb-4">
        {/* Column 1 */}
        <div className="flex-1 max-w-md">
          <h3 className="mb-2 text-center">Hosted by DWR</h3>
          <ul className="flex flex-col items-center">
            {/* Render list items without icons */}
            <li className="py-1 text-center">
              <Link
                href="/ama?url=https://warpcast.com/dwr.eth/0x390ae86a"
                className="underline"
              >
                Vitalik Buterin
              </Link>
            </li>
            {/* Repeat for other list items */}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex-1 max-w-md">
          <h3 className="mb-2 text-center">Hosted by Community</h3>
          <ul className="flex flex-col items-center">
            {/* Render list items without icons */}
            <li className="py-1 text-center">
              <Link
                href="/ama?url=https://warpcast.com/jam/0x30a0f030"
                className="underline"
              >
                @colin
              </Link>
            </li>
            {/* Repeat for other list items */}
          </ul>
        </div>
      </div>

      {/* Centered content below */}
      <div>
        {/* Other sections without icons */}
        <h3 className="text-lg mb-2">Other Past AMAs</h3>
        {/* Render input and link without icons */}

        <br />

        <h3 className="text-lg mb-2">Improve Your Question</h3>
        {/* Render iframe without icons */}

        <br />

        <div className="flex flex-col items-center w-full">
          {/* Render upcoming AMAs without icons */}
        </div>

        {/* Lore section without icons */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3 className="text-lg mb-2">Lore</h3>
          <p>
            inverse AMA{' '}
            <a
              href="https://warpcast.com/samantha/0xc9010d04"
              className="underline"
            >
              @Samantha
            </a>
            <br />
            wordcloud collection{' '}
            <a
              href="https://warpcast.com/ghostlinkz.eth/0x58ce6ae7"
              className="underline"
            >
              @ghostlinkz
            </a>
            {/* Repeat for other lore items */}
            <br />
            built by @papa
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            <a href="https://twitter.com/papajimjams">
              {/* Render social media links without icons */}
            </a>
            {/* Repeat for other social media links */}
          </div>
        </div>
      </div>
    </div>
  )
}

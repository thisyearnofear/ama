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
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708030863/ethereum.svg"
                alt="Vitalik Buterin"
                className="icon-size mr-0"
              />
              <Link
                href="/ama?url=https://warpcast.com/dwr.eth/0x390ae86a"
                className="underline"
              >
                {' '}
                Vitalik Buterin
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/coinbase.svg"
                alt="Brian Armstrong"
                className="icon-size mr-1"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/dwr.eth/0x7735946a' },
                }}
                className="underline"
              >
                {' '}
                Brian Armstrong
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/USV.svg"
                alt="Fred Wilson"
                className="icon-size mr-1"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/dwr.eth/0x87e91802' },
                }}
                className="underline"
              >
                {' '}
                Fred Wilson
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/y-combinator.svg"
                alt="Garry Tan"
                className="icon-size mr-1"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/dwr.eth/0xe4ec97c9' },
                }}
                className="underline"
              >
                {' '}
                Garry Tan
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/ebay.svg"
                alt="Chris Dixon"
                className="icon-size mr-1"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/dwr.eth/0x231c3b60' },
                }}
                className="underline"
              >
                {' '}
                Chris Dixon
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/Twitter.svg"
                alt="Elad Gil"
                className="icon-size mr-1"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/dwr.eth/0xd39ac80f' },
                }}
                className="underline"
              >
                {' '}
                Elad Gil
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/a16z.svg"
                alt="Marc Andreessen"
                className="icon-size mr-1"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/pmarca/0x5901e102' },
                }}
                className="underline"
              >
                {' '}
                Marc Andreessen
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex-1 max-w-md">
          <h3 className="mb-2 text-center">Hosted by Community</h3>
          <ul className="flex flex-col items-center">
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/paragraph.svg"
                alt="@colin"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/jam/0x30a0f030' },
                }}
                className="underline"
              >
                @colin
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/horsefacts.svg"
                alt="horsefacts"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/jam/0x794f4a4e' },
                }}
                className="underline"
              >
                horsefacts
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/purple.svg"
                alt="@ccarella"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/jam/0xe195a8e2' },
                }}
                className="underline"
              >
                @ccarella
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/perl.svg"
                alt="@ace"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/kugusha.eth/0xa404739c' },
                }}
                className="underline"
              >
                @ace
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/mod.svg"
                alt="@df"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/yb/0x803cf956' },
                }}
                className="underline"
              >
                @df
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/fxhash.svg"
                alt="@qualv"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/dwr.eth/0x87e91802' },
                }}
                className="underline"
              >
                @qualv
              </Link>
            </li>
            <li className="py-1 text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/bountycaster.svg"
                alt="@linda"
                className="icon-size mr-2"
              />
              <Link
                href={{
                  pathname: '/ama',
                  query: { url: 'https://warpcast.com/yb/0x803cf956' },
                }}
                className="underline"
              >
                @linda
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered content below */}
      <div>
        <h3 className="text-lg mb-2">Other Past AMAs</h3>
        <div className="flex flex-row justify-center">
          <input
            value={warpcastURL}
            onChange={(e) => setWarpcastURL(e.target.value)}
            className="border rounded-md mr-2 px-2 focus:outline-none"
            placeholder="Insert Warpcast Link..."
          />
          <Link
            href={`/ama/?url=${warpcastURL}`}
            className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
          >
            View
          </Link>
        </div>

        <br></br>

        {/* Improve Questions section */}
        <h3 className="text-lg mb-2">Improve Your Question</h3>
        <div className="flex justify-center w-full">
          <iframe
            id="MZYJGGQCNM"
            loading="eager"
            src="https://embed.pickaxeproject.com/axe?id=Question_Feedback_1B6BD&mode=embed_gold&host=beta&theme=custom&opacity=100&image=hide&title=hide&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_bb=8B5CF6&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=2&s_r=2"
            width="500px"
            height="340px"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{
              border: '1px solid rgba(0, 0, 0, 1)',
              transition: '.3s',
              borderRadius: '4px',
              boxShadow: isHovered
                ? '0px 6px 6px -3px rgba(0,0,0,0.1)'
                : 'none',
            }}
            className="mx-auto"
          ></iframe>
        </div>

        <br></br>

        {/* Display Upcoming AMAs */}
        <div className="flex flex-col items-center w-full">
          {upcomingAMAs.map((ama, index) => (
            <div
              key={index}
              className="flex items-center justify-start w-full max-w-4xl px-4 py-2 border-b"
            >
              {/* Icon */}
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/wowow.svg"
                alt="wowow"
                className="h-6 w-6"
              />

              {/* AMA Info */}
              <span className="flex-1 text-left">
                {ama.subject} with {ama.person} on{' '}
                {new Date(ama.date).toLocaleDateString()}
              </span>

              {/* Calendar Buttons */}
              <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                Add to Google Calendar
              </button>
              <button className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-xs">
                Add to iCal
              </button>
            </div>
          ))}
        </div>

        {/* Lore section */}
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
            <br />
            short story{' '}
            <a
              href="https://www.blabla.lol/stories/fc-ama-with-garry-tan"
              className="underline"
            >
              @jackjack.eth
            </a>
            <br />
            challenge set by{' '}
            <a
              href="https://warpcast.com/dwr.eth/0xa04f0f2c"
              className="underline"
            >
              @dwr
            </a>{' '}
            (
            <a
              href="https://warpcast.com/dwr.eth/0x6186cf9b"
              className="underline"
            >
              his ama
            </a>
            )
            <br />
            forked from{' '}
            <a
              href="https://github.com/wojtekwtf/fc-ama-formatter"
              className="underline"
            >
              @woj
            </a>{' '}
            and{' '}
            <a
              href="https://warpcast.com/alvesjtiago.eth"
              className="underline"
            >
              @tiago
            </a>
            <br />
            coding assist{' '}
            <a href="https://warpcast.com/carter" className="underline">
              @carter
            </a>
            <br />
            <br></br>
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
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/twitter.svg"
                alt="Twitter"
                className="icon-size"
              />
            </a>
            <a href="https://warpcast.com/papa">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031540/farcaster.svg"
                alt="farcaster"
                className="icon-size"
              />
            </a>
            <a href="https://paragraph.xyz/@papajams.eth">
              <img
                src="https://res.cloudinary.com/dsneebaw0/image/upload/v1708031541/paragraph.svg"
                alt="paragraph"
                className="icon-size"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

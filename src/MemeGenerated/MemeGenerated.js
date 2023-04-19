import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'
import './MemeGenerated.css'

const MemeGenerated = () => {
    const [copied, setCopied] = useState(false)
    const clipboard = useClipboard()
    const navigate = useNavigate()
    const location = useLocation()
    const url = new URLSearchParams(location.search).get('url')

    const copyLink = () => {
        clipboard.copy(url)
        setCopied(true)
    }

    return (
        <div className="container">
            <button onClick={() => navigate('/')} className="home">
                Make Memes
            </button>
            {url && <img src={url} alt="meme" />}
            <button onClick={copyLink} className="copy">
                {copied ? 'Link Copied' : 'Copy Link'}
            </button>
        </div>
    )
}

export default MemeGenerated
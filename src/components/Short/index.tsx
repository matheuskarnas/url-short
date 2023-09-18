import React, { useState } from 'react'
import { ButtonCyan } from '../Button'
import { UrlResult } from '../UrlResult'
import { Container, Results } from './styled'

type VirginLinkProps = {
  link: string
  responseLink: string
}

export function Short() {
  const [inputValue, setInputValue] = useState('')
  const [virginLink, setVirginLink] = useState<VirginLinkProps[]>([])

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      apiCall(inputValue)
    }
  }

  function handleClick() {
    apiCall(inputValue)
  }

  const apiCall = (link: string) => {
    if (inputValue !== '') {
      fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(response => response.json())
        .then(data => {
          console.log('response', data)
          if (!data.ok) {
            return alert('O link inserido não é valido')
          }
          setVirginLink(state => [
            ...state,
            {
              link: data.result.original_link,
              responseLink: data.result.short_link
            }
          ])
        })
    }
  }

  return (
    <>
      <Container>
        <input
          type='url'
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleEnter}
          placeholder='Shorten a link here...'
        />
        <ButtonCyan type='submit' onClick={handleClick}>
          Shorten It!
        </ButtonCyan>
      </Container>

      <Results>
        {virginLink.map(link => (
          <UrlResult
            key={link.responseLink}
            link={link.link}
            shortLink={link.responseLink}
          />
        ))}
      </Results>
    </>
  )
}

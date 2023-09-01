import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wordlist from 'web-bip39/wordlists/english'

import { RootState } from '../../../redux/store'
import { setWord } from '../../../redux/ValidatorOnboarding/KeyGeneration/slice'

type AutocompleteInputProps = {
  index: number
}

const AutocompleteInput = ({ index }: AutocompleteInputProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const word = useSelector((state: RootState) => state.keyGeneration.words[index])
  const dispatch = useDispatch()

  useEffect(() => {
    setSuggestions(wordlist.filter(w => w.startsWith(word)))
  }, [word])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(setWord({ index, word: value }))
  }

  return (
    <div>
      <input type="text" value={word} onChange={handleInputChange} />
      <div>
        {suggestions.map(s => (
          <div key={s}>{s}</div>
        ))}
      </div>
    </div>
  )
}

export default AutocompleteInput

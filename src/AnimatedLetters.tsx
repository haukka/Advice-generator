import './AnimatedLetters.scss'

interface LetterAnimated {
    letterClass: string;
    strArray: string[];
    idx: number;
}

const AnimatedLetters = ({ letterClass, strArray, idx }: LetterAnimated) => {
  return (
    <span>
      {strArray.map((char: string, i: number) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
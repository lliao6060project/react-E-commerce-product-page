import type { PropsWithChildren } from 'react'

interface ContentBlockProps extends PropsWithChildren {
  list: string[]
}

const ContentBlock = ({list}: ContentBlockProps) => {
  return (
    <>
      {
        list.map((item, i: number) => {
          return (
            <div
              id={`block-${item}`}
              key={`${item}-${i}`}
              className='min-h-screen text-justify xl:py-3'
            >
              <h3 className='text-2xl bold py-4 font-bold'>{item} Block</h3>
              <p className='leading-relaxed'>
                Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.

                In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.
              </p>
            </div>
          )
        })
      }
    </>
  )
}

export default ContentBlock
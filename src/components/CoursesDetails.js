// Go is a statically typed, compiled high-level programming 
// language designed at Google by Robert Griesemer, Rob Pike, 
// and Ken Thompson. It is syntactically similar to C, 
// but with memory safety, garbage collection, structural 
// typing, and CSP-style concurrency. It is often referred 
// to as Golang because of its former domain name, 
// golang.org, but its proper name is Go.


{/* <div className="tab">
  <input type="checkbox" id='css' name='course' />
  <label htmlFor="css">CSS</label>

  <div class="inner">
      <div className='hold'>
          <p>
              Cascading Style Sheets (CSS) is a styling language used 
              for describing the presentation of a document written in a 
              markup language such as HTML or XML (including XML dialects 
              such as SVG, MathML or XHTML). CSS is a cornerstone 
              technology of the World Wide Web, alongside HTML and JavaScript.
              <br/> <br/>

              CSS is designed to enable the separation of presentation and 
              content, including layout, colors, and fonts. This separation 
              can improve content accessibility; provide more 
              flexibility and control in the specification of presentation 
              characteristics; enable multiple web pages to share formatting 
              by specifying the relevant CSS in a separate .css file, which 
              reduces complexity and repetition in the structural content. 
          </p>
          <Link href='/'>ENROL NOW</Link>
      </div>
      <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FCSS3_logo_and_wordmark.svg%2F1200px-CSS3_logo_and_wordmark.svg.png&tbnid=CQe3fY7nNccEWM&vet=12ahUKEwj7g-Sa4Y_-AhWBrEwKHVIhDPEQMygAegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCSS&docid=m95i5R440PM28M&w=1200&h=1693&q=css&ved=2ahUKEwj7g-Sa4Y_-AhWBrEwKHVIhDPEQMygAegUIARDjAQ' alt='' />
  </div>
</div> */}





    
const courseDetails = [
  {
    input: <input type="checkbox" id='html' name='course' />,
    label: <label htmlFor="html">HTML</label>,
    img: <img src='data:image/png;base64,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' alt='' />,
    link: '/',
    paragraph: ' \
      HyperText Markup Language (HTML) is the standard \
      markup language for documents designed to be displayed \
      in a web browser. It can be assisted by technologies such \
      as Cascading Style Sheets (CSS) and scripting languages \
      such as JavaScript. CSS gives beauty to the contents on \
      the HTML page and makes the appearance meaningful. \
      \
      Web browsers receive HTML documents from a web server or \
      from local storage and render the documents into \
      multimedia web pages. HTML describes the structure of a \
      web page semantically and originally included cues for \
      the appearance of the document. \
    '
  },
  {
    input: <input type="checkbox" id="css" name="course" />,
    label: <label htmlFor="css">CSS</label>,
    img: <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FCSS3_logo_and_wordmark.svg%2F1200px-CSS3_logo_and_wordmark.svg.png&tbnid=CQe3fY7nNccEWM&vet=12ahUKEwj7g-Sa4Y_-AhWBrEwKHVIhDPEQMygAegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCSS&docid=m95i5R440PM28M&w=1200&h=1693&q=css&ved=2ahUKEwj7g-Sa4Y_-AhWBrEwKHVIhDPEQMygAegUIARDjAQ' alt='' />,
    // img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FCSS3_logo_and_wordmark.svg%2F1200px-CSS3_logo_and_wordmark.svg.png&tbnid=CQe3fY7nNccEWM&vet=12ahUKEwj7g-Sa4Y_-AhWBrEwKHVIhDPEQMygAegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCSS&docid=m95i5R440PM28M&w=1200&h=1693&q=css&ved=2ahUKEwj7g-Sa4Y_-AhWBrEwKHVIhDPEQMygAegUIARDjAQ',
    paragraph: ' \
      Cascading Style Sheets (CSS) is a styling language used \
      for describing the presentation of a document written in a \
      markup language such as HTML or XML (including XML dialects \
      such as SVG, MathML or XHTML). CSS is a cornerstone \
      technology of the World Wide Web, alongside HTML and JavaScript. \
      \
      CSS is designed to enable the separation of presentation and \
      content, including layout, colors, and fonts. This separation \
      can improve content accessibility; provide more \
      flexibility and control in the specification of presentation \
      characteristics; enable multiple web pages to share formatting \
      by specifying the relevant CSS in a separate .css file, which \
      reduces complexity and repetition in the structural content. \
    ',
    link: '/'
  },
  {
    input: <input type="checkbox" id='js' name='course' />,
    label: <label htmlFor="js">JavaScript</label>,
    img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' alt='' />,
    link: '/',
    paragraph: ' \
      JavaScript often abbreviated JS, is a programming language \
      that is one of the core technologies of the World Wide Web, \
      alongside HTML and CSS. All major web \
      browsers have a dedicated JavaScript engine to execute the \
      code on users\' devices. \
      \
      JavaScript is a high-level, often just-in-time compiled language \
      that conforms to the ECMAScript standard. It has dynamic \
      typing, prototype-based object-orientation, and first-class \
      functions. It is multi-paradigm, supporting event-driven, \
      functional, and imperative programming styles. \
      \
      It has application programming interfaces (APIs) for working \
      with text, dates, regular expressions, standard data \
      structures, and the Document Object Model (DOM). \
    '
  },
  {
    input: <input type="checkbox" id='python' name='course' />,
    label: <label htmlFor="python">Python</label>,
    img: <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4TDg4ODhERDhARERERDg4QERERDw4OGBIXFxcUFhQZHiohGhsmHhYWIj8kJistMTEwGCA1OjUvOiovMC0BCgoKDw4PHBERHDIjHiMtLy8vLy8vLS0vLTItLy8vMi0tLS8xLy0vLy8vLy8tLTIvLy0tLS8vMS8vLS8tLy0vLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xABHEAACAQEDBAsMCAYDAQAAAAAAAQIDBAUREiExUQYHIkFSYXGRk6HRExQVFzIzU3JzgZKxFjSisrPB0+EjNUKC0vAkYnTC/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAEDBAUCBgf/xAA5EQACAQEDCQUGBQUBAAAAAAAAAQIDBBExBRITIVFSgZGhMkFhcdEUFSKxwfAjM2Ki4UJTcoLxNP/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAa++LzpWahOvVe5jmUV5U5vRGK1v9xpNu5CbSV7MutVjCLnOUYRisZSk1GMVrbegql67P7JTbjRUrTJb8dxSx9d537k0UK/9kFotU8qrLJpp406MW+5w1etLjfVoNUaFOxLGfIz6lsd90C2W3Z/bp4qn3Ogt7JjlzXvlinzGnr7JLwn5Vprf2TdNc0MDVEFqNKEcEuRWdWbxb5mTUt1eXlVqkvWnN/NnwlJvS2+V4kEHaVxzeyVJrQ2uR4H3p2+0R8itUh6tScfkzFAtQJvuNtZ9k940/JtNb+991+/ibqw7YlthgqsKVeO/mdOb/ujm+yVA8kcqUHikdxqzWDZ1u6NntiqtRqOVmm/SYdzb4qizJetgWqMk0mmmmsU1nTWs/PRvNjmye0WSSSbqUMd3Qk9zhvuD/pfU99FWpZFjDkW6dreE+Z2sGDdV5UrRRhXoyyoS9zi9+MlvNGcUGrtTLyd4AAAAAAAAAAAAAAAAAAAAAAADmG2bb5StVKz47inTU2tdSbed8kUudnTzke2N/Mans6X3S1Y1+JwZVtj/AA+KKyX/AGI7C6UqULTbE5uolKnRxcYxg86lPDO29OGjB5+Ln09D5DvljqwnSpzp4OEoRlBrRkOKa6izbKkoxSj3layU4yk87uNPbdh931I5PcY03vTpbiSevNmfvTOW7ILoqWW0ToTeUsFKnNLBTpvHB4bzzNYa0zuRzPbWqwdeywXlxpzc9eTKSyfuyILJVln5rd6J7VSjmZy1Mo55BJomcADyAwAQIYIAEMtu1vfEqVsVnk/4Vo3OG9GsluZe/DJ48VqOuHAbnk1a7M1pVek1yqpHA78Z9rilJPaaFkfwtAAFQtAAAAAAAAAAAAAAAAAAAAA5HtjfzGp7On9064cj2x/5jP2dL5MtWP8AM4Mq2z8viirlq2LbM52aCo1YOtRTeTg8KlPHO1HHM1xPDTp3irEGlOEZq6RnQnKDvidItm2TRyH3CjUlPe7rkQgnreTKTfJm5Tn1vt1StVnWqyy6k3jJ6Et5JLeSWYxiTinShT7KO6lWc+0ADySEYAIEMEACGCAAAy7p+tWb21L8SJ384BdP1qze2pfiRO/lC2Yov2TsvzAAKZbAAAAAAAAAAAAAADSX5slstlzVZ4zwxVGnhKbWt70VytFMt22NaZN9wo0qcdc8qpPlzYJdZNToTmr0tRDOvCGpvWdOByL6eXj6Sn0UR9Pbx4dPooknsdTw5kftlPxOumgvjYnZLRVdasqmW1GLyZ5KwWjMUH6eXj6Sn0UR9Pbx9JT6KJ1Gy1Yu9O7icytVKSuav4Fx8X136qvSvsHi+u/VV6V9hTfp7ePpKfRRI+nt5ekp9FE70Vo3upzpaG70Ln4vrv1VelfYPF7d+qr0r7CmfT28vSU+iiPp7eXpKfRRFoq+91DS0N3oXPxfXfqq9K+weL27tVXpX2FL+nt5ekp9FEfT+8uHT6KIaKvvdQ0tDd6GjvqzRpWq0UoY5FOtOEMXi8mMmlizCPta7ROrUqVZ4OdScpzaWCcpPF5j4lxX3ayo8dQIAGIAECGZd0fWrN7al+JE/QB+f7o+tWb21L8SJ3m045E2s25eDWkz7dLNuexMv2JXprxPuCu981OHP4mO+anDn8TPNe/Ke4+aNX2R7SxAritVRaJy58TKoXpJZprFcJZmvdvktLLNCTuknHxxXNHMrLJYazcg8U6iksqLxT3z2aqaavRWAAGAKfs22U97Lveztd3ksZSzNUIPQ8OE95e972Ngvy8o2ezVbRLPkR3MeHN5ox97aOI2q0TqTnUqSypzk5Tk9+T/ACLdloqbzpYLqVLVWcFmxxfQ8VJylJyk3KUm3KUm3KUnpbb0s8gg0zNBIIAAeQSIAAeQGACBDBAAhggAAABAhgAABlXT9Zs3tqX4kTvdq83P1WcDuj61ZvbUvxInfLV5ufqv5GblDs8GaFh+qK8QAfN0ejAB5GMybFa3CWuL0rsN/GSaTWdPQ9ZVzb3PXxi4PTHOuRm3ke1tS0MsHh54tcVe/wDpTtVLVnribMAHpCgc8207wz2eyp7zrVFzxh/99Rz832zi05d42l44qDjTjxKMUmviyjQGzQjm00vvWY9eWdUbBIIJSIHkEiAAHkBgAgQwQAIYIAAAAQIYAAACAQIZsNj1Fzttjgs+Nejj6qqJt8yZ3e1+bn6r+Ryravup1LY7S1uKEXg951ppxS48IuT4tzrOm3nPCk1raS58TJynUUYSeyL+TNKwwerxZpQDyfPT0IAIAAZF31cmrDU3g+TR8zHIxwzrStHKdU6jpzU13O/kKUc5NbS2Axu/YA93pqO8jI0cthxC96mVarRPhVqsuepJmITUljKT1tvnZ5N9YGA3e7weQSAgAeQGACBDBBkWKw1q0sihTnVlvqEXLJ429CXGyw2bYBeM1jKFKjxVKqx+wpHEpxji7juMJSwV5ViC6eLa3eks3SVf8B4tbd6SzfHV/TONPT3kSaCpsKWC5+LW3eks/SVf0x4tLd6SzdJV/TFp6e8g0FTdKWC6eLS3eks3SVv8Dz4tLw9LZ+kq/php6e8g0FTYU0gufi0t/pbN0lX9M+tDaytbf8StQgtcO6VHzNRFp6e0aoT2FGNncFw2i11MijHcprutWS/h0lxvff8A1Wd8mddCuza2skMJV6lS0tf0+apfDF5X2i5WWzU6cFTpQjThHNGEYqMVyJEM7UsIayWFlf8AUYdx3VSs1CFnpLcxzyk/KnN6Zy432LeMa9q+M1BaI6eXf/3lMm3W9RTjB4y0NrRE055HK9vUloYO/ef09eW27bstC74nwABBgF4AAQwQDyAycWCAF4XHKprBtam0eDLvWnk2m0Q4NWpHmqNfkYp9cTvV54ZrW0ADyMAAQIYLXsM2Iu1fx6+VCzJ4JLNOvJPOk96K0N+5a1o7huyVotVKzxxSnLdyX9FNLGT5cE/fgdzs9CNOEKdOKhCEVGEVojFLBIq2ms4rNWLLVnoqTzngjxYrHSpU40qMI04R0Qikly8b4xWtdOOZvPqWkwbXbXJuMHhHXr/YwzyNrywlJxpK/wAXhwXf54eZt07Nq+LV4Gxlea3o4+88+FXwF8X7GAQZrypat/pH0J9BDYbDwq+Avi/Yjwq+Avi/Y15Avedq3+kfQfs9PYbLws+B9r9iPCz4C+L9jXEC952rf6R9B+z09hsvCz4C+L9h4XfAXxfsa0gPedq3+kfQPZ6ew2Er3lvRS5WY1a2VJZm82rQj4HkiqW2vUV0pu7l8tR3GjBYIAEFQlAAAYIB5AYAAhgEYAAKFszs/c7ytcddTui48uKn85M0xdttSw5Noo2hLNVpunLVlQeOflU/slHPrNGV8E/A8TWjmza8QAQSHAIAEMv8AtTWNOpaq7XkQhSg/WblL7sOcvl51sIKK0y+W+VbapX/Drvf74a9ypw7WWC9JbtLUvzPN5brOFObWOpffA2rDBXRXEwwCDxRrggEDGACBDABAgAB5AYAIAYAAhggABg8gCGCEm8y0vMuUkybqo5VWGqO6fu0dZJSpOpNQXe7uYpSzU5bDd94wBlA93oaO6jF0k9pX9mt1O0WKpCCyqkMKtJb7nHHFLjcXJcrRxfE/RBybbA2NujVlaqUf4FSWM0tFGq3nT1Rk9HG8NRfslW74HwM+10r/AI1xKgQAXikCAAA6rtUfUq3/AKZfhUzeXp5x8iNFtUfUq3/pl+FTN7ennHyI8pl/8p/5L5M3rB3eRinkEHkjUABAhgAgQAA8gMAEAMAAQwQAAweQBDAB5AYN9c9myaeU9M8/It7/AHkMG7LA5NTmtwtC4b7CwHoMj2J36ea/x49/0W3X3XX0LXW/oXH0AAPQmeD5VqMJxlCcVOEk4yhJJxlF6U09KPqAA5psi2vaicqlhalF5+95ywnHihN5muKWHKyl2y7LRSbVWjVptcOEknyPDB+47+C1C1yWp6yrOyxeGo/O+RLU+ZkZEtT5mfokHftn6ev8HHsf6un8lJ2qE1Yq2Ka/5MtPsqZvL084/cbo0t6+cfIjz+XJZ1BvbJfJmpY45skvAwwCDyppAAg5AAHkTOkZCsVZpNQeDzrOtHOT3hW4HWu02VK3UVFJzzpJPNLThyHvwjQ4fVLsN5WCw99b90PQpaatu9GanvCtwHzrtHeFfgdce023hGhw+qXYPCNDh9UuwPd9g/vfuh6D01bc6M1PeFfgdce0jwfX4HWu02/hKhw+qXYPCVDh9UuwPd9g/vfvh6Bp6250Zp/B9fgdce0eD6/A612m4V40G0lPO3gs0tPMZhLTyTZanYqN3bHF/JHMrVVjjG7gyteD6/o+uPaR4Or+j649pZgSe46G9Lp6C9tnsRXKd1Vn/So8bl2YmfZbohHPN5b1aEbQE9HJVnpu+5yf6tfRJLmiOdqqS8PIAA0iuAAAAAAAAAAAAAA0l6+cfIjdmkvbzj5EZWWf/N/svkyxZu3wMMAg8qaIAADB5BADJIAEMEAz7PdUpJSm8j/rhi/fqJqFnqVpZtNX/e3D71HM5xgr5MwDybC03VKKcoPLS0rDB4cRrwr0KlGWbUV318n9+IU5xmr4s92fy4+si1lToeXH1kWw3chdifmvqU7bjHiAAbpRAAAAAAAAAAAAAAAAAAAABpL284+RG7NXfFLNGa3s0uTeM3K0HKzO7uafDv5X38CezO6fmasAHkjTB5BADAAEMEAAB97uinWgno08yb/IspU6dRxkpR0prAsFnt9OaW6UXvxbwfu1noMi16cYypt3Sbv196u7vLXzKNspybUlgZhWLwilVmlox+ef8zdWm8KcFmalLeinjn/Ir1SblJyelt48rFlq0U5RjTTvad78NWHH6DscJJuTwJoeXH1kW0qtipuVWEVrxfu0lqJMhJ6Ob8V0X8oVuetIAA3SiAAAAAAAAAAAAAAAAAAAADxKKaaaxT0rWj2BNAaK3WGUMZRzw178f91mGWkwa9205Z1uHrXYYFryM786g/8AV/R/R4bS7StXdPmaIGdVuuovJ3a5cOpmLOy1FphJc7XOY9Sy1qfag1w1c1ei3GpGWDPmQHx5iMStnLaS3EnkYkYicltHcSQeoQk/JWPuZ94WCtLRDDlwXzJYUZ1OxFvyV/yOXOMcXcYpMINtRim29CWlm1oXLw5+6GnnfYbOz2aEFhCKWvfb5WaVnyPWm/xPhXN8sOetbCvUtkF2dbMa7bD3NZUs83p1JakbAA9NRowpQUIK5L75mbObk72AASnIAAAAAAAAAAAAAAAAAAAAAAAAAAAAHUcRM8VdBrq4BUyhiWKB8omdZSAVbH2iWrgZgANmriUkAAQjAAAAAAAAAAAAAAAAA//Z' alt='' />,
    link: '/',
    paragraph: ' \
      Python is a high-level, interpreted, general-purpose \
      programming language. Its design philosophy emphasizes \
      code readability with the use of significant indentation. \
      Python is dynamically-typed and garbage-collected. It supports \
      multiple programming paradigms, including structured \
      (particularly procedural), object-oriented and functional \
      programming. It is often described as a "batteries included" \
      language due to its comprehensive standard library. \
    '
  },
  {
    input: <input type="checkbox" id='sql' name='course' />,
    label: <label htmlFor="sql">SQL</label>,
    img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQea5rOoojN8m7SZmkIeyKRfH_Zt-gmH7vWXA&usqp=CAU' alt='' />,
    link: '/',
    paragraph: ' \
      SQL (also pronouced "sequel") Structured Query Language is a \
      domain-specific language used in programming and designed \
      for managing data held in a relational database management \
      system (RDBMS), or for stream processing in a relational \
      data stream management system (RDSMS). It is particularly \
      useful in handling structured data, i.e. data incorporating \
      relations among entities and variables. \
      \
      SQL offers two main advantages over older read–write APIs such \
      as ISAM or VSAM. Firstly, it introduced the concept of \
      accessing many records with one single command. Secondly, \
      it eliminates the need to specify how to reach a record, \
      e.g. with or without an index. \
    '
  }
]






















export {courseDetails}
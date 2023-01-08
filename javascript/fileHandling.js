function handleChangeSourceFile(e) {
  // TODO: handle change csv file XD
  const fileInput = document.getElementById('first_csvfile')
  // remove input file
  fileInput.getElementsByTagName('input')[0].remove()
  fileInput.getElementsByTagName('label')[0].remove()

  // get filename && add fallback filename
  // create span as container for the filename
  const fileName = e.target.files[0]?.name || 'Unknown.csv'
  const span = document.createElement('span')
  span.setAttribute('id', 'sourceCSV')

  // create span with filename
  fileInput.appendChild(span).textContent = fileName

  // add styles

  document.querySelector('.input-file__wrapper').style.display = 'flex'
  document.querySelector('.input-file__wrapper #sourceCSV').style.fontSize = '20px'
  document.querySelector('.input-file__wrapper #sourceCSV').style.padding = 'inherit'
  document.querySelector('.input-file__wrapper #sourceCSV').style.cursor = 'pointer'

  // file handling
  const files = e.target.files[0];
  const reader = new FileReader()
  reader.onload = () => {
    const jsonified = csvToJSON(reader.result);
    console.log('jsonified', jsonified);
    // add function to save to DB
  }
  reader.readAsText(files)
}

function handleChangeTargetFile(e) {
  const fileInput = document.getElementById('second_csvfile')
  // remove input file
  fileInput.getElementsByTagName('input')[0].remove()
  fileInput.getElementsByTagName('label')[0].remove()

  // get filename && add fallback filename
  // create span as container for the filename
  const fileName = e.target.files[0]?.name || 'Unknown.csv'
  const span = document.createElement('span')
  span.setAttribute('id', 'targetCSV')

  // create span with filename
  fileInput.appendChild(span).textContent = fileName

  // add styles
  document.querySelector('.input-file__wrapper').style.display = 'flex'
  document.querySelector('.input-file__wrapper #targetCSV').style.fontSize = '20px'
  document.querySelector('.input-file__wrapper #targetCSV').style.padding = 'inherit'
  document.querySelector ('.input-file__wrapper #targetCSV').style.cursor = 'pointer'

  // file handling
  const files = e.target.files[0];
  const reader = new FileReader()
  reader.onload = () => {
    const jsonified = csvToJSON(reader.result);
    console.log('jsonified', jsonified);
    // add function to save to DB
  }
  reader.readAsText(files)
}

function csvToJSON(csv) {
    const lines = csv?.split('\n')
    const result = []
    // add/remove delimiter inside [] to split CSV values
    // lines[0] is the column title
    // should not include as return value
    const headers = lines[0]?.split(/[,;]/)

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i]?.split(/[,;]/)

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}


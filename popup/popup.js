const domparser = new DOMParser()

const template = `
<div>
  <textarea
    id="input-box"
    title="input-box"
    placeholder="Please input your CSS here!"
    cols="30"
    rows="10"
  ></textarea>

  <button id="fetch-button">Fetch</button>
</div>
`.trim()

const xml = domparser.parseFromString(template, 'text/html')

const node = document.importNode(xml.body.childNodes[0], true)

// console.log(node)

const app = document.querySelector('#app')

app.append(node)

document.querySelector('#fetch-button').addEventListener('click', () => {
  fetch('')
    .then(res => res.json())
    .then(json => console.log(json))
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    )
  }
})

// chrome.storage.local.set({ test: 'value' }).then(() => {
//   console.log("Value is set")
// })

chrome.storage.local.get().then((result) => {
  console.log("Value currently is " + JSON.stringify(result))
})


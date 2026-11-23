import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <Sum a={10} b={20}/>
    </StrictMode>
  )

function sum(a, b) {
  return a + b;
}
// sum(10, 20)

function Sum({a, b}) {
  return <div>{a + b}</div>;
}
// <Sum a={10} b={20}/>
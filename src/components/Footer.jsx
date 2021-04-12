import React from 'react'


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p> &#169;Pantufla {currentYear}</p>
      </footer>
    </div>
  )
}

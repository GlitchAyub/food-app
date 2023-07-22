import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div class="container ">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <Link href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </Link>
      <span class="mb-3 mb-md-0 text-muted">© 2023 FoodApp, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
   </ul>
  </footer>
</div>
  )
}

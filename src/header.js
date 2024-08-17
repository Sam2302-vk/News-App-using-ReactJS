function Header(){
    return(
//       <div>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <img class="logo" src="Good.png" />
//     <a class="navbar-brand" href="#">GOOD NEWS</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Genral</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             More
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Sports</a></li>
//             <li><a class="dropdown-item" href="#">Politics</a></li>
//             <li><a class="dropdown-item" href="#">Crime</a></li>
//             <li><a class="dropdown-item" href="#">Cinema</a></li>
//             {/* <li><hr class="dropdown-divider" /></li> */}
//             {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
//           </ul>
//         </li>
//         {/* <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li> */}
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//       </div>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="head">
    <div class="container-fluid" id="title">
      <img class="logo" src="Good.png" alt="Logo" />
      <a class="navbar-brand" href="#">GOOD NEWS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">General</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Sports</a></li>
              <li><a class="dropdown-item" href="#">Politics</a></li>
              <li><a class="dropdown-item" href="#">Crime</a></li>
              <li><a class="dropdown-item" href="#">Cinema</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" />
          <button class="btn" type="submit" id="btn">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>
    )
}
export default Header;
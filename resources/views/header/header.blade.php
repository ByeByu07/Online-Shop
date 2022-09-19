<nav class="d-flex justify-content-between px-5 py-3 align-items-center header_container">
    <h1>LOGGGO</h1>
    <ul class="d-flex gap-5 w-100">
        <li>Category</li>
        <li class="w-100">
            <input class="w-100" type="search" name="" id="">
        </li>
    </ul>
    <ul class="d-flex gap-5">
        @auth
            <li>Dashboard</li>
            <li>Logout</li>
        @else
            <li class="btn btn-outline-light">SignIn</li>
        @endauth
        <li class="btn">Cart</li>
    </ul>
</nav>

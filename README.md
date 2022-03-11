[Video Tutorial Link](https://www.youtube.com/watch?v=Law7wfdg_ls&ab_channel=DevEd)


1. Need "react-router-dom" dependency.

2. Configure url to container to display via below - 
```aidl
<Router>
  <Routes>
       <Route path="/" element={<Home/>}/>
  </Routes>
</Router>
```

3. Button or icon on click to change url to diplay mapped to container -
```aidl
<nav> 
       <Link to={"/about"}>
           About
       </Link>
       <Link to={"/shop"}>
           Shop
       </Link>
</nav>
```

4. Difference between nav and div => nav is more specific & horizontally configure version of div
5. Difference between Link and NavLink => same as above
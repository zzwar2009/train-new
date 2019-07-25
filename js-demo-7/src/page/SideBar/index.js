import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
let routes = [
  
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];
for(let i = 0;i<300;i++){
  let obj = {
    path: "/index"+i,
    sidebar: (index) => <div>index{index}</div>,
    main: () => <h2>main{i}</h2>
  }
  routes.push(obj);
}

console.log(routes)
function SidebarExample() {
  let lis = routes.map((route, index) => {
    // Render more <Route>s with the same paths as
    // above, but different components this time.
    return  (<li><Link to={route.path}>link-{index}</Link></li>);
  })

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
         <p>这个超长左侧导航的例子结论是 点击左侧导航 左侧不会重新渲染而回到顶部，滚动位置不变</p>
          <ul style={{ listStyleType: "none", padding: 0 ,height:'800px','overflow-y':'auto'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
            {lis}
          </ul>

         
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                component={route.main}
              />
            ))}
        </div>
      </div>
    </Router>
  );
}

export default SidebarExample;

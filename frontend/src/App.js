import { Route, Switch, Link } from "wouter";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import PasswordUpdate from "./pages/PasswordUpdate";
import Register from "./pages/Register";
import StoreListings from "./pages/StoreListings";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";
import UserManagement from "./pages/UserManagement";
import { Navbar } from "./pages/Navbar";


// get theme and language contexts here

export default function App() {
  

  return (
    <div className={`App`}>
      {/* Add context provider here */}
      <Navbar />
      {/* <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        
        <Link href="/">Home</Link> |{" "}
        <Link href="/landing">Landing</Link> |{" "}
        <Link href="/admin">Admin</Link> |{" "}
        <Link href="/store-owner">Owner</Link> |{" "}
        <Link href="/stores">Stores</Link> |{" "}
        <Link href="/users">Users</Link> |{" "}
        <Link href="/register">Register</Link> |{" "}
        <Link href="/update-password">Update Password</Link>
      </nav> */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/landing" component={Landing} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/store-owner" component={StoreOwnerDashboard} />
        <Route path="/stores" component={StoreListings} />
        <Route path="/users" component={UserManagement} />
        <Route path="/auth/login" component={Register} />
        <Route path="/auth/register" component={Register} />
        <Route path="/update-password" component={PasswordUpdate} />
        <Route path="/404" component={NotFound} />
        {/* Fallback route */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

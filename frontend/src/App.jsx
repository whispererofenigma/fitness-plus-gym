import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
function App() {
  useEffect(() => {
    AOS.init();
    // Refresh AOS if content updates dynamically
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}        
      </Routes>
    </Router>
  )
}

export default App
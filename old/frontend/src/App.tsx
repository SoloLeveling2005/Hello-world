import React from 'react';
import './App.css';
import { getSites } from './actions/site/action';
import { connect } from "react-redux";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
interface AppProps {
  getSites: () => void
}

const App: React.FC<AppProps> = ({ getSites }) => {
    
// в App ничего не пиши;
// Все основные компоненты на одном уровне как App будут находится в папке pages

React.useEffect(() => {
  getSites()
}, [])
const { width } = useWindowDimensions();
return (
    <div className="App">
        <RenderHtml
          contentWidth={width}
          source="https://translate.google.com/"
        />
    </div>
);
// return (
//     <div className="App">
//       <Router>
//
//         <Link to="https://translate.google.com/">Главная</Link>
//
//         <Link to="/about">Контакты</Link>
//
//         <Link to="/topics">Темы</Link>
//
//       </Router>
//     </div>
//   );
// }

export default connect(null, { getSites })(App);

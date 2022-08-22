import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import BookHubContextTheme from './Context/BookHubContextTheme'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  onClickThemeIcon = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    /* console.log(isDarkTheme) */
    return (
      <BookHubContextTheme.Provider
        value={{
          isDarkTheme,
          onClickThemeIcon: this.onClickThemeIcon,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/shelf" component={Bookshelves} />
            <ProtectedRoute exact path="/books/:id" component={BookDetails} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </>
      </BookHubContextTheme.Provider>
    )
  }
}

export default App

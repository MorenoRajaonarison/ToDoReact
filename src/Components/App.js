import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Footer from './Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddTask from './AddTask'

class App extends Component {
    render() {
        return (
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path='/add-task' component={AddTask} />
                        <Route path='/:filter?' component={ToDoList} />

                    </Switch>
                <Footer />
                </BrowserRouter>
            </section>
        )
    }
}

export default App
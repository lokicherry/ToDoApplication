const React = require('react')
import './../css/TodoHeader.css'

export class TodoHeader extends React.Component {
    render() {
        return (
            <div id="todoHeader" className="header">
                <h1 className="todoheading">todos</h1>
            </div>
        )
    }
}
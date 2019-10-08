import React from 'react'

class Cell extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    clickListen = () => {
        this.setState({
            color: '#333'
        })
    }
    
    render() {
        return(
            <div
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.clickListen}
                >
            </div>
        )
    }
}

export default Cell
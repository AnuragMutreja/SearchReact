import React,{Component} from 'react';

class List extends Component{
    constructor() {
        super();
        this.state={
            list:[],
        }
    }
    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "d83ab09e38msh3b1a4b2c6d3af7ap12faa5jsn304b4ae7631c"
            }
        }).then((response) => {
            response.json().then((response) => {
                this.setState({list:response})
            })
        })
    }
    render() {

        return(
            <div>
                <h1>List</h1>
                {
                    this.state.list?
                    <div>
                        {
                            this.state.list.map((item,i)=>
                            <div>
                                hello
                            </div>)
                        }
                    </div>
                    :<p>Please Wait..</p>
                }

            </div>
        );
    }
}

export default List;

import React,{Component} from 'react';

class Search extends Component{
    constructor(props) {
        super(props)
        this.state={
            error:null,
            isLoaded:false,
            searchData:[]
        };
    }
    search(key)
    {
        console.warn(key)
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + key, {
	"method": "GET",
	"headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "d83ab09e38msh3b1a4b2c6d3af7ap12faa5jsn304b4ae7631c"
    }}).then(res => res.json())
                .then(
                    (res) => {
                        this.setState({
                            isLoaded: true,
                            searchData: res.drinks

                        });
                    },
                    // error handler
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
    }
    render() {
        const{error,isLoaded,searchData}=this.state;
        return(
            <div>
                <h1>Search</h1>
                <input type="text"onChange={(event => this.search(event.target.value))}/>
                <div className="col">
                    {searchData.map(drinks=><div>{drinks.strDrink}</div>)}
                </div>
            </div>
        );
    }
}

export default Search;

import React,{Component} from 'react';

class filter extends Component{
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

            <div class = "filter">
                <h1>FILTER</h1>
                    <select>
                      <option value="Ordinary Drink">Ordinary Drink</option>
                      <option value="Cocktail">Cocktail</option>
                      <option value="Milk / Float / Shake">Milk / Float / Shake</option>
                      <option selected value="Other/Unknown">Other/Unknown</option>
                      <option value="Cocoa">Cocoa</option>
                      <option value="Shot">Shot</option>
                      <option value="Coffee / Tea">Coffee / Tea</option>
                      <option value="Homemade Liqueur">Homemade Liqueur</option>
                        <option value="Punch / Party Drink">Punch / Party Drink</option>
                      <option value="Beer">Beer</option>
                        <option value="Soft Drink / Soda">Soft Drink / Soda</option>
                    </select>

            </div>
        );
    }
}

export default filter;
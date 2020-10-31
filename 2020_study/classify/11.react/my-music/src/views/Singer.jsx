import React from 'react';

import {renderRoutes} from 'react-router-config';
import {HashRouter as Router,Link} from 'react-router-dom'

export default class Ly extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            dataAll:null
        }
    }
    componentDidMount(){
        Promise.all([
            this.axios.get("/api/singer-list"),
           
        ]).then(res=> {
            console.log(res[0].data.data)
            let arr = [];
            let obj = {};
            res[0].data.data.forEach((item) => {
            const letter = item.firstLetter;
            if (obj[letter] === undefined) {
                obj[letter] = {
                letter,
                items: [],
                };
            }
            obj[letter].items.push(item);
            });
            for (let key in obj) {
            arr.push(obj[key]);
            }
            arr.sort((a, b) => {
            return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
            });
        
            this.setState({dataAll:[arr]})
            console.log(this.state)
          
        });
    }
    render(){
        return !this.state.dataAll?"loading":(
            <section>
             <div>singer</div>
             <ul>
                  <Router> 
                    { 
                        this.state.dataAll[0].map((item,index)=>{
                            return (
                            
                                   
                                    <li key={index}>
                                        <p>{item.letter}</p>
                                        {/* <p>{console.log(item.items)}</p> */}
                                        <ol>
                                           
                                            {
                                                item.items.map((item2,index2)=>(  
                                                <li key={index2}>
                                                    <Link to={{
                                                        pathname:"/singer/child",
                                                        state:{                    
                                                            id:item2.id
                                                        }
                                                }} > {item2.name} 
                                                </Link>
                                                </li>))
                                            }
                                            
                                        </ol>
                                    
                                    
                                    </li>
                                    
                                
                            
                            )
                        })
                    }
                  
                    {renderRoutes(this.props.route.childrens)}
                 </Router> 
             </ul>
         
                        
            </section>
        )
    }
}

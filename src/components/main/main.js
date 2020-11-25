import React from 'react';
import PrimaryCol from '../primaryCol/primary-col';
import AboutCol from '../primaryCol/aboutCol';
import './styles.css';


export default class  Main  extends React.Component {
    
    constructor() {
        super();
        this.state = {

            pokeShow: false,
            pokeAbout:false, 
                }
       
    }
    render() {
        return (
             
                    <div className="t-main">
                        {
                          this.props.show && <PrimaryCol/>
                        }
                        {
                          this.props.showAbout && <AboutCol/>
                        }

                    </div>
                )                  
            }
        }
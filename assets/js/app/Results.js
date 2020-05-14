import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Results extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Remy'
    }
    this.checkGains=this.checkGains.bind(this)
  }

  componentDidMount(){
     (adsbygoogle = window.adsbygoogle || []).push({});
  }

  //checking gains or loss
  checkGains(){
    const {percent} = this.props.globalState.totalStatus
    if(this.props.globalState.status == 'gain'){
      return `You  made ${percent}% profit`
    } else{
      return `You  loss ${percent}% of your initial Investment`
    }
  }


  render () {
    const {percent, newCP, newSP}= this.props.globalState.totalStatus
    return (<section id="results">
         <div className ="container">
         <div className="col-md-12">
           <div className="ads">
           <ins className="adsbygoogle"
     style={{"display":"block"}}
     data-ad-client="ca-pub-1876888588409540"
     data-ad-slot="5700576241"
     data-ad-format="auto"></ins>
           </div>
          </div>
           <div className="col-md-12">
              <h3> Your ${newCP} dollar investment is now</h3>
              <h1> {newSP}</h1>
                <h4>{this.checkGains()}</h4>
              <a href="#" className="main-btn active">
                 create account to keep track of all your records
              </a>

              <a href="#" className="main-btn " onClick={this.props.goBack}>
                 or Check Another Transaction
              </a>
           </div>
           <div className="col-md-12">
             <div className="ads"><ins className="adsbygoogle"
               style={{"display":"block"}}
               data-ad-client="ca-pub-1876888588409540"
               data-ad-slot="6100356041"
               data-ad-format="auto"></ins>
               </div>
            </div>
        </div>

      </section> )
  }
}

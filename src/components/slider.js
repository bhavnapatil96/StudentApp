import React from 'react';
class First extends React.Component{
    constructor() {
        super();
        this.state = {
            data:['https://www.vnsgu.ac.in/slide/4.jpg','https://www.vnsgu.ac.in/slide/1.jpg','https://www.vnsgu.ac.in/slide/7.jpg','https://www.vnsgu.ac.in/slide/5.jpg','https://www.vnsgu.ac.in/slide/6.jpg',
                'https://www.vnsgu.ac.in/slide/4.jpg','https://www.vnsgu.ac.in/slide/8.jpg','https://www.vnsgu.ac.in/slide/2.jpg','https://www.vnsgu.ac.in/slide/2.jpg'],
            imgsrc:'',
            cnt:0
        };
        //this.changeContent = this.changeContent.bind(this);
    }
    changeContent=()=> {
        if(this.state.cnt<(this.state.data.length-1)){
            this.setState({imgsrc:this.state.data[this.state.cnt]});
            this.setState({cnt:this.state.cnt+1})
        }
        else if(this.state.cnt==(this.state.data.length-1)){
            this.state.imgsrc=this.state.data[this.state.cnt];
            this.setState({cnt:0})
        }
    }
    render(){
        return(
            <div>
                <h1><center>Welcome to Student Information System</center></h1>
                <div className="mySlider">
                    {

                        setTimeout(this.changeContent,3000)
                    }
                    <img src={this.state.imgsrc} height="250px" width="1400px"/>
                </div>
            </div>
            )

    }


};
export default First;

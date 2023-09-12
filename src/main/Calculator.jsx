import React, { Component } from "react";
import './Calculator.css'
import Button from "../components/Button";
import Display from "../components/Display";


export default class Calculator extends Component{

    constructor(props){

        super(props);

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory(){
        console.log('Limpar');
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n);
    }

    

    render(){
        
        return(
            <div className="calculator">
                <Display value={120}></Display>
                <Button label='AC'  triple  click={this.clearMemory}></Button>
                <Button label='/' operation click={this.setOperation}></Button>
                <Button label='7' click={this.addDigit}></Button>
                <Button label='8' click={this.addDigit}></Button>
                <Button label='9' click={this.addDigit}></Button>
                <Button label='*' operation click={this.setOperation}></Button>
                <Button label='4' click={this.addDigit}></Button>
                <Button label='5' click={this.addDigit}></Button>
                <Button label='6' click={this.addDigit}></Button>
                <Button label='-' operation click={this.setOperation}></Button>
                <Button label='1' click={this.addDigit}></Button>
                <Button label='2' click={this.addDigit}></Button>
                <Button label='3' click={this.addDigit}></Button>
                <Button label='+' operation click={this.setOperation}></Button>
                <Button label='0' double click={this.addDigit}></Button>
                <Button label='.' click={this.addDigit}></Button>
                <Button label='=' operation click={this.setOperation}></Button>
            </div>
        )
    }
}
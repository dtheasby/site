import * as React from 'react';

class Calculator extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            "valueOne": 0,
            "valueTwo": 0,
            "option": "Add",
            "result": 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOption = this.handleOption.bind(this);
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
    }

    handleOption(event: any) {
        this.setState({ option: event.target.value })
        this.updateResult();
    }

    updateResult() {
        var newResult;
        switch (this.state.option) {
            case "Add":
                newResult = this.state.valueOne + this.state.valueTwo;
                this.state.result = newResult;
                break;
            case "Minus":
                newResult = this.state.valueOne - this.state.valueTwo;
                this.state.result = newResult;
                break;
        }
    }

    render() {
        return <div>
            <div>
                <input type="number" name="valueOne" value={this.state.valueOne} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <input type="number" name="valueTwo" value={this.state.valueTwo} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <select value={this.state.option} onChange={(e) => this.handleOption(e)}>
                    <option value="Add">Add</option>
                    <option value="Minus">Minus</option>
                </select>
            </div>
            <div>
                <p>result: {this.state.result}</p>
            </div>
        </div>
    }
};

interface stateType {
    "valueOne": number,
    "valueTwo": number,
    "option": string,
    "result": number
}

export default Calculator;